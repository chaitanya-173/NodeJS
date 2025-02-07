export const isAuthenticated = (req, res, next) => {
  console.log("Middleware is called");
  next();
}

