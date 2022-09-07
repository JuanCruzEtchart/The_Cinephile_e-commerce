const express = require("express");
const app = express();
const path = require("path");
const productRoutes = require("./routes/productsRoutes");
app.use(express.static(path.join(__dirname, "public")));
/*app.set("view engine", "ejs");*/

app.listen(3030, () => {
  console.log("Servidor corriendo en puerto el 3030");
  console.log("http://localhost:3030");
}); 

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/detalle", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});

/*app.use("/detalle", productRoutes);*/

app.get("/carrito", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/perfil", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/perfil.html"));
});

app.get("/header", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/header.html"));
});

app.get("/footer", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/footer.html"));
});
