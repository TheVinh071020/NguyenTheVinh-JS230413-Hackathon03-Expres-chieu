exports.validateBody = (req, res, next) => {
  let { name } = req.body;
  if (!name) {
    res.json({
      mesenge: "Sai tên",
    });
  } else {
    console.log("success");
    next();
  }
};
