const User = require("../models/User");

async function getOneData(req, res, next) {
  const id = req.params.id;
  try {
    const userRequired = await User.findById(id);
    res.send(userRequired);
    console.info(userRequired);
    next();
  } catch {
    console.info("User can't be foundade");
    next();
  }
}

async function validateData(req, res, next) {
  try {
    const dniRequested = req.body.dni;
    const codeRequested = req.body.code;
    try {
      const codeTrue = await User.findOne({ code: codeRequested });
      console.log(codeTrue);
      console.log(codeTrue.dni);
      if (codeTrue.dni == dniRequested) {
        res.send({ message: "Enhorabuena, puedes vacunarte." });
      }
      if (codeTrue.dni != dniRequested) {
        res.send({
          message:
            "Tu codigo o DNI no es correcto. Por favor introduce tus datos de nuevo",
        });
      }
      next();
    } catch {
      res.send({
        message: "Tu codigo es incorrecto. Por favor introducelo de nuevo",
      });
    }
  } catch {
    console.info("Cant process request");
    next();
  }
}

module.exports = { validateData, getOneData };
