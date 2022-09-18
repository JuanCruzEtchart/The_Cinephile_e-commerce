const path = require("path");

let productsDetail = [
  {
    id: "1",
    name: "El Padrino",
    image: "/images/productDetail/godfather.png",
    description: "1972 - R - 2h 55m",
    imdbScore: "9,2",
    imdbTotalReviews: "1,8 M",
    tomatoScore: "97%",
    genre: ["Crimen", "Drama"],
    trailerLink: "https://www.youtube.com/watch?v=UaVTIH8mujA",
    purchasePrice: "$ 1559,90",
    rentalPrice: "$ 499,90",
    synopsis:
      "Don Vito Corleone es el jefe de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años 40. Don Corleone tiene cuatro hijos; una chica, Connie, y tres varones, Santino, o Sonny, como le gusta que le llamen, Michael y Freddie, al que envían exiliado a Las Vegas, dada su incapacidad para asumir puestos de mando en la ”Familia”. Cuando otro capo, Sollozzo, al rechazar el Padrino intervenir en el negocio de estupefacientes, intenta asesinar a éste, empieza una cruenta lucha de violentos episodios entre los distintos grupos.",

    director: [
      {
        name: "Francis Ford Coppola",
        link: "https://en.wikipedia.org/wiki/Francis_Ford_Coppola",
      },
    ],
    script: [
      {
        name: "Francis Ford Coppola",
        link: "https://en.wikipedia.org/wiki/Francis_Ford_Coppola",
      },
      {
        name: "Mario Puzo",
        link: "https://en.wikipedia.org/wiki/Mario_Puzo",
      },
    ],
    cast: [
      {
        id: 1,
        actor: "Marlon Brando",
        character: "Vito Corleone",
        image: "/images/productDetail/marlonBrando.jpg",
        link: "https://en.wikipedia.org/wiki/Marlon_Brando",
      },
      {
        id: 2,
        actor: "Al Pacino",
        character: "Mickael Corleone",
        image: "/images/productDetail/alPacino.jpg",
        link: "https://en.wikipedia.org/wiki/Al_Pacino",
      },
      {
        id: 3,
        actor: "Diane Keaton",
        character: "Key Adams",
        image: "/images/productDetail/dianeKeaton.jpg",
        link: "https://en.wikipedia.org/wiki/Diane_Keaton",
      },
      {
        id: 4,
        actor: "James Caan",
        character: "Sony Corleone",
        image: "/images/productDetail/jamesCaan.jpg",
        link: "https://en.wikipedia.org/wiki/James_Caan",
      },
      {
        id: 5,
        actor: "John Cazale",
        character: "Fredo Corleone",
        image: "/images/productDetail/johnCazale.jpg",
        link: "https://en.wikipedia.org/wiki/John_Cazale",
      },
      {
        id: 6,
        actor: "Robert Duvall",
        character: "Tom Hagen",
        image: "/images/productDetail/robertDuvall.png",
        link: "https://en.wikipedia.org/wiki/Robert_Duvall",
      },
      {
        id: 7,
        actor: "Marlon Brando",
        character: "Vito Corleone",
        image: "/images/productDetail/marlonBrando.jpg",
        link: "https://en.wikipedia.org/wiki/Marlon_Brando",
      },
    ],
    directedBy: [
      {
        id: 1,
        name: "El Padrino II",
        image: "/images/productDetail/godfather2.png",
      },
      {
        id: 2,
        name: "Apocalypse Now",
        image: "/images/productDetail/apocalypse.png",
      },
      {
        id: 3,
        name: "Dracula",
        image: "/images/productDetail/dracula.jpg",
      },
      {
        id: 4,
        name: "El Padrino III",
        image: "/images/productDetail/godfather3.png",
      },
      {
        id: 5,
        name: "Patton",
        image: "/images/productDetail/patton.png",
      },
      {
        id: 6,
        name: "The Outsiders",
        image: "/images/productDetail/theOutsiders.png",
      },
      {
        id: 7,
        name: "Sleepy Hollow",
        image: "/images/productDetail/sleepyHollow.png",
      },
    ],
    similar: [
      {
        id: 1,
        name: "The Shawshank Redemption",
        image: "/images/productDetail/shawshank.png",
      },
      {
        id: 2,
        name: "Goodfellas",
        image: "/images/productDetail/goodFellas.png",
      },
      {
        id: 3,
        name: "The Dark Knight",
        image: "/images/productDetail/batman.png",
      },
      {
        id: 4,
        name: "Peaky Blinders",
        image: "/images/productDetail/peakyBlinders.jpg",
      },
      {
        id: 5,
        name: "Taxi Driver",
        image: "/images/productDetail/taxiDriver.jpg",
      },
      {
        id: 6,
        name: "Road To Perdition",
        image: "/images/productDetail/roadToPerdition.jpg",
      },
      {
        id: 7,
        name: "Gotti",
        image: "/images/productDetail/gotti.jpg",
      },
    ],
  },
];

const productController = {
  detail: (req, res) => {
    let productFound = productsDetail.find((product) => {
      return product.id == req.params.id;
    });
    res.render("productDetail", { product: productFound });
  },
  management: (req, res) => {
    res.render("productManagement");
  },
  cart: (req, res) => {
    res.render("productCart");
  },
};

module.exports = productController;
