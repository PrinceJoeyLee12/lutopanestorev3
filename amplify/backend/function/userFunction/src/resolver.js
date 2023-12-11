const { verifyToken, createToken, loginUser, registerUser } = require('./logic/userAuth');

exports.resolvers = {
  Mutation: {
    createToken: (ctx, Parameters) => {
      return createToken(ctx, Parameters);
    },
    verifyToken: (ctx, Parameters) => {
      return verifyToken(ctx, Parameters);
    },
    registerUser: (ctx, Parameters) => {
      return registerUser(ctx, Parameters);
    },
    loginUser: (ctx, Parameters) => {
      return loginUser(ctx, Parameters);
    },
  },
};
