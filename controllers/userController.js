const fs = require("fs");
const { platform } = require("os");
const path = require("path");

function findAll(){
 const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"))
  const data = JSON.parse(jsonData);
  return data
};

function stringAndCreate(data){
  const dataString = JSON.stringify(data, null, 4)
  fs.writeFileSync(path.join(__dirname, "../data/users.json"), dataString);
}


const userController = {

  login: (req, res) => {
    const data = findAll();
   //Encontrando el ID

    /* const usuarioEncontrado = data.find(function(usuario){

        return usuario.id == req.body
      
    })
    */
    res.render("login", {users: data});
    },

    register: (req, res) => {
    const data = findAll();
    res.render("register", {users: data} );
  },
<<<<<<< HEAD
  profile: (req, res) => {
    res.render("profile");
  },
=======
    
    thankyou: (req, res) => {
    const data = findAll();
    res.render("thankyou", {users: data} );
    },

    store: (req, res) => {
      
      console.log(req.body);
      
      const data = findAll();
      
      const newUser = {
      id: data.length + 1,
      name: req.body.user,
      email: req.body.email,
      password: req.body.password,
      security: 1
      }
      console.log(newUser);
      data.push (newUser);
      
      stringAndCreate(data);

      res.redirect("/user/thankyou")
    },


>>>>>>> 2f0e863f4903d5173201710e419a774fe01f6d35
};

module.exports = userController;
