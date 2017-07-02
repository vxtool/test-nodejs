module.exports = {
  filterError: (res, filter) => {
    console.log("Parametro nao permitido !" + filter , "info");
    res.status(400).json({
      httpStatusCode: 400,
      errorCode: "400",
      message: "Parametro nao permitido: " + filter + " !"
    });
  }
};
