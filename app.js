const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/userRoutes");
const methodOverride = require ("method-override");

// Configuracion
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", mainRoutes);

app.use("/product", productsRoutes);

app.use("/user", userRoutes);

app.listen(3030, () => {
  console.log("Servidor corriendo en puerto el 3030");
  console.log("http://localhost:3030");
});
