const express = require("express");

const superserver = express();

superserver.use("/pelis", (req, res) => {
  res.send("Esta es mi url de pelis");
});

superserver.use("/", (req, res) => {
  res.send("Este es HOME");
});

const PORT = 5000;
superserver.listen(PORT, () => {
  console.log(`Escuchando por el puerto ${PORT}`);
});
