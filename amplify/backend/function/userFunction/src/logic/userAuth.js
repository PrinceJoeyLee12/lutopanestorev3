const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const Mutations = require('/opt/graphql/mutations');
const Queries = require('/opt/graphql/queries');
const { errorResponder, graphqlRequester } = require('/opt/requestHelper/index');
const Utils = require('/opt/utils/index');
const { optionConfig } = require('../helper');
const { params } = require('../constants');
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.registerUser = async (ctx, Parameters) => {
  try {
    const { args } = ctx?.arguments;
    const numSaltRounds = Utils.ParamsHelper.getParamsValue(params.NUM_SALT_ROUND, Parameters);

    if (!args?.password || !args?.userData?.email) {
      return errorResponder(400, ctx?.fieldName, 'No password to hash', null);
    }

    const salt = await bcryptjs.genSalt(parseInt(numSaltRounds));

    if (!salt) {
      return errorResponder(
        400,
        ctx?.fieldName,
        `${JSON.stringify({
          error_type: 'registration_error',
          message: 'Registration Error for password',
        })}`,
        null
      );
    }

    const password = await bcryptjs.hash(args?.password, salt);

    if (!password) {
      return errorResponder(400, ctx?.fieldName, `We cannot create an account as of the moment with an error`, null);
    }

    const options = {
      method: 'POST',
      body: JSON.stringify({
        query: `
        mutation CreateUser(
          $input: CreateUserInput!
          $condition: ModelUserConditionInput
        ) {
          createUser(input: $input, condition: $condition) {
            id
            firstName
            lastName
            email
            userSub
            password
            number_1
            number_2
            address {
              addressLine1
              addressLine2
              country
              region
              regionCode
              state
              stateCode
              city
              cityCode
              barangay
              barangayCode
              landMark
              zipCode
              latitude
              longitude
              accuracy
              altitudeAccuracy
              speed
              heading
              __typename
            }
            billingInfo {
              id
              type
              fullName
              phone
              email
              isDefault
              __typename
            }
            loyverseId
            loyverse {
              id
              customer_code
              data
              __typename
            }
            orderedStores {
              nextToken
              __typename
            }
            orders {
              nextToken
              __typename
            }
            cart {
              id
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
        }
      `,
        variables: {
          input: { password, ...args?.userData },
        },
      }),
    };

    Utils.logger('registerUser', 'RegisterUser Options', 'INFO', options);

    const newToken = await createToken(
      { arguments: { args: { user: { email: args?.userData?.email } } } },
      Parameters,
      true
    );
    Utils.logger('registerUser', 'Generated Token', 'INFO', newToken);

    let data = '';
    try {
      data = await graphqlRequester(ctx, options, optionConfig, { token: newToken });
      console.log('@@@@@@@@@@@@@:  ~ file: userAuth.js:62 ~ data:', JSON.stringify(data));
    } catch (error) {
      console.log('@@@@@@@@@@@@@:  ~ file: userAuth.js:66 ~ error:', JSON.stringify(error));
    }

    return data;
  } catch (error) {
    Utils.logger('registerUser', '', 'ERROR', error);
    return errorResponder(400, ctx?.fieldName, 'Cannot store user password!', null);
  }
};

exports.loginUser = async (ctx, Parameters) => {
  try {
    const { args } = ctx?.arguments;

    if (!args?.password || !args?.email) {
      return errorResponder(400, ctx?.fieldName, 'No password to hash', null);
    }

    const options = {
      method: 'POST',
      body: JSON.stringify({
        query: Queries.listUsers,
        variables: { filter: { email: { eq: `${args?.email}` } } },
      }),
    };

    Utils.logger('loginUser', 'Login User Options', 'INFO', options);

    // Check user
    const listUsers = await graphqlRequester(ctx, options, optionConfig);
    const user = listUsers?.data?.listUsers?.items?.[0];

    if (!user) {
      return errorResponder(
        400,
        ctx?.fieldName,
        `${JSON.stringify({
          error_type: 'no_user_error',
          message: 'No User Found with this email',
        })}`,
        null
      );
    }

    // Check Password
    const isMatched = await bcryptjs.compare(args?.password, user?.password);
    if (!isMatched) {
      return errorResponder(
        400,
        ctx?.fieldName,
        `${JSON.stringify({
          error_type: 'password_error',
          message: 'Email/Password is incorrect',
        })}`,
        null
      );
    }

    // Create/New Token
    const newToken = await createToken({ arguments: { args: { user: { email: args?.email } } } }, Parameters, true);

    return {
      user,
      token: newToken,
    };
  } catch (error) {
    return errorResponder(400, ctx?.fieldName, 'Cannot store user password!', null);
  }
};

exports.verifyToken = async (ctx, Parameters) => {
  const { args } = ctx?.arguments;
  const secretKey = Utils.ParamsHelper.getParamsValue(params.JWT_SECRET_KEY, Parameters);

  const token = args?.token;
  const shouldCreateNewToken = args?.shouldCreateNewOne;
  let user = null;
  const attributes = {
    newToken: '',
  };
  let errors = [];

  try {
    user = await jwt.verify(token, secretKey);
    if (shouldCreateNewToken && (user?.email || user?.user?.email)) {
      try {
        attributes.newToken = await createToken(
          { arguments: { args: { user: { email: user?.email || user?.user?.email } } } },
          Parameters,
          true
        );
      } catch (error) {
        Utils.logger('verifyToken', 'createToken Error', 'ERROR', error);
        errors = [
          {
            status: 200,
            message: 'Cannot Create new Token as of the moment',
            stack: '',
          },
        ];
      }
    }
  } catch (error) {
    Utils.logger('verifyToken', 'Error on verification', 'ERROR', error);
    const errorString = error.message.includes('expires') ? "Token Expired we'll redirect you to login" : '';
    return errorResponder(400, ctx?.fieldName, errorString || 'Having trouble generating your token', null);
  }

  return {
    data: {
      [ctx?.fieldName]: {
        user,
      },
      attributes,
    },
    errors,
  };
};

const createToken = async (ctx, Parameters, shouldOnlyReturnToken = false) => {
  const { args } = ctx?.arguments;
  Utils.logger('createToken', 'Create Token Args', 'INFO', args);

  const secretKey = Utils.ParamsHelper.getParamsValue(params.JWT_SECRET_KEY, Parameters);
  let user = args?.user || {};
  let token = '';

  if (!user?.email) {
    return errorResponder(400, ctx?.fieldName, "We don't have payload to create a token", null);
  }

  try {
    token = await jwt.sign(user, secretKey, { expiresIn: process.env.JWT_EXPIRATION });
  } catch (error) {
    Utils.logger('createToken', 'Error on createToken', 'ERROR', error);
    return errorResponder(400, ctx?.fieldName, 'Having trouble generating your token', null);
  }
  if (shouldOnlyReturnToken) {
    return token;
  }

  return {
    data: {
      [ctx?.fieldName]: {
        token,
      },
      attributes: null,
    },
    errors: [],
  };
};
