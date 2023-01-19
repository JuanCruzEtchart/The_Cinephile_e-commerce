//MODULES
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const localsMiddleware = require("./middleware/localsMiddle");
const recordameMiddleware = require("./middleware/recordameMiddle");

//MAIN ROUTES IMPORT
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/userRoutes");

//API ROUTES IMPORT
const apiProductsRouter = require("./routes/api/apiProductsRouter");
const apiGenresRouter = require("./routes/api/apiGenresRouter");
const apiUsersRouter = require("./routes/api/apiUsersRouter");
const apiActorsRouter = require("./routes/api/apiActorsRouter");
const apiDirectorsRouter = require("./routes/api/apiDirectorsRouter");

//RENDER DEPLOY CONFIG
const port = process.env.PORT || 3030;
require("dotenv").config();

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

//MAIN ROUTES
app.use("/", mainRoutes);
app.use("/product", productsRoutes);
app.use("/user", userRoutes);

//API ROUTES
app.use("/api/products", apiProductsRouter);
app.use("/api/genres", apiGenresRouter);
app.use("/api/users", apiUsersRouter);
app.use("/api/actors", apiActorsRouter);
app.use("/api/directors", apiDirectorsRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
  console.log(`http://localhost:${port}`);
});
