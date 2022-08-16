const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));

app.get("/inicio", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/inicio.html"));
});

app.get("/detalle", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/detalle.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});

app.get("/perfil", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/perfil.html"));
});