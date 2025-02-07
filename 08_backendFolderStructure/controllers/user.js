export const register = (req, res) => {
  const obj = req.body;
  console.log(obj);

  // save data in database

  res.status(200).json({
    success: true,
    message: "Account created successfully",
  });
}

export const login = (req, res) => {
  const {email, password} = req.body;
  console.log(obj);

  // save data in database

  res.status(200).json({
    success: true,
    message: "Login successfully",
  });
}