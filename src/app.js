//MODULES
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");

const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/userRoutes");
const localsMiddleware = require("./middleware/localsMiddle");
const recordameMiddleware = require("./middleware/recordameMiddle");

const apiProductsRouter = require("./routes/api/apiProductsRouter");
const apiGenresRouter = require("./routes/api/apiGenresRouter");
const apiUsersRouter = require("./routes/api/apiUsersRouter");
const apiActorsRouter = require("./routes/api/apiActorsRouter");
const apiDirectorsRouter = require("./routes/api/apiDirectorsRouter");

//CONFIG
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "Secreto",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(localsMiddleware);
app.use(recordameMiddleware);
app.use(methodOverride("_method"));

//ROUTES PRINCIPALES
app.use("/", mainRoutes);
app.use("/product", productsRoutes);
app.use("/user", userRoutes);

//ROUTES DE APIS
app.use("/api/products", apiProductsRouter);
app.use("/api/genres", apiGenresRouter);
app.use("/api/users", apiUsersRouter);
app.use("/api/actors", apiActorsRouter);
app.use("/api/directors", apiDirectorsRouter);

app.listen(3030, () => {
  console.log("Servidor corriendo en el puerto 3030");
  console.log("http://localhost:3030");
});
