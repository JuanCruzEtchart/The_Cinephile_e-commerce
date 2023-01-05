module.exports = {
  normalLogin: (req, res, next) => {
    if (req.session.usuarioLogueado) {
      next();
    } else {
      res.redirect("/user/login");
    }
  },
  adminLogin: (req, res, next) => {
    if (
      req.session.usuarioLogueado &&
      req.session.usuarioLogueado.admin_status == 1
    ) {
      next();
    } else {
      res.redirect("/user/login");
    }
  },
};
