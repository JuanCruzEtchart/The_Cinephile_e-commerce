const path = require("path");
const fs = require("fs");
const { Console } = require("console");

function findAll() {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "../data/products.json")
  );
  const data = JSON.parse(jsonData);
  return data;
}

const mainController = {
  home: (req, res) => {
    const data = findAll()
    let movies = [];
    let serie = [];

  data.forEach((ultimo_Lanzamiento) => {
    if (ultimo_Lanzamiento.type == "Película" ) {
      movies.push(ultimo_Lanzamiento);   
  }
  });

  data.forEach((ultimo) => {
    if (ultimo.type == "Serie de TV" ) {
      serie.push(ultimo);   
  }
  });

  res.render("index", { ultimo_Lanzamiento: movies ,ultimo: serie });
  },
 
  


};

module.exports = mainController;




