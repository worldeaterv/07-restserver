const { response, request } = require("express");

const getUsuario = (req = request, res = response) => {
  const query = req.query;
  res.json({
    msg: "get api - controlador",
    query
  });
};

const putUsuario = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put api - controlador",
    id,
  });
};

const postUsuario = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post api - controlador",
    nombre,
    edad,
  });
};

const deleteUsuario = (req, res = response) => {
  res.json({
    msg: "delete api - controlador",
  });
};

const patchUsuario = (req, res = response) => {
  res.json({
    msg: "patch api - controlador",
  });
};

module.exports = {
  getUsuario,
  putUsuario,
  postUsuario,
  deleteUsuario,
  patchUsuario,
};
