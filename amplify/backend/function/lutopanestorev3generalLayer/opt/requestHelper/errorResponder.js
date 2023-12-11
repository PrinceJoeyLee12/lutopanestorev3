/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.errorResponder = (status, fieldName, message, stack, errors = []) => ({
  statusCode: status,
  data: { [fieldName]: null },
  errors: errors?.length
    ? errors
    : [
        {
          status: 200,
          message: message || '',
          stack: stack || '',
        },
      ],
});
