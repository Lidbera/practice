const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.body = '로그인 필요';
    ctx.status = 401; // Unauthorized
    return;
  }
  return next();
};

export default checkLoggedIn;
