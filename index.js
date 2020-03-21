// Importar express
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const lugares = [
  {
    name: "Universidad Autónoma de B.C.S",
    address:"Sur KM 5.5, Universidad Autónoma de Baja California Sur, 23080",
    lat: "24.101493",
    lang: "-110.314203",
    img: "https://tribunadeloscabos.com.mx/wp-content/uploads/2017/10/Convocatoria-UABCS-3-1200x900.jpg",
    icon: "https://cdn.onlinewebfonts.com/svg/img_377761.png"
  },
  {
    name: "Universidad Tecnologico de La Paz",
    address:"Boulevard Forjadores 4720, 8 de Octubre 2da Secc, 23080",
    lat: "24.119796",
    lang: "-110.308317",
    img: "https://media-exp1.licdn.com/dms/image/C4D1BAQEEWS3zx3n8uA/company-background_10000/0?e=2159024400&v=beta&t=k8WNcO5EjGQGI5rhPjrKgVkZHNm9VJ0ATWZHlp7yf1g",
    icon: "https://cdn.onlinewebfonts.com/svg/img_377761.png"
  },
  {
    name: "Universidad Mundial",
    address:"Mariano Abasolo s/n, Pueblo Nuevo, 23090",
    lat: "24.142191",
    lang: "-110.333000",
    img: "https://i1.wp.com/www.bcsnoticias.mx/wp-content/uploads/2016/11/universidad-mundial.jpg?fit=1500%2C1000&ssl=1",
    icon: "https://cdn.onlinewebfonts.com/svg/img_377761.png"
  },
  {
    name: "Soriana forjadores",
    address:"Blvd. Forjadores S/N, Fuerza Aérea, 23050",
    lat: "24.125310",
    lang: "-110.312535",
    img: "https://lh5.googleusercontent.com/p/AF1QipPCBctXvbOirori_MAT1vr3NCxrx8BAokEdSGt9=w408-h306-k-no",
    icon: "https://images.vexels.com/media/users/3/128737/isolated/preview/48e42fba70becce83a35fd88be6d589f-icono-de-servicio-de-compras-redondo-by-vexels.png"
  },
  {
    name: "Sushi factory",
    address:"Blvd. Forjadores 4215, Fuerza Aérea, 23081",
    lat: "24.126254",
    lang: "-110.312631",
    img: "https://lh5.googleusercontent.com/p/AF1QipMuuktd4zvRY6YqqsgOyvLsJaslNThEKbP_1_jj=w408-h306-k-no",
    icon: "https://cdn.onlinewebfonts.com/svg/img_217000.png"
  },
  {
    name: "Sushi Mako",
    address:"esquina, Calle del Tiro, Calle de los Barriles",
    lat: "24.059438",
    lang: "-110.294469",
    img: "https://lh5.googleusercontent.com/p/AF1QipOwLBb9Sugtjnrt5-Q8EaK_AoybyxINWmUU2sO_=w408-h306-k-no",
    icon: "https://cdn.onlinewebfonts.com/svg/img_217000.png"
  },
  {
    name: "Soriana Camino Real",
    address:"Carr, La Paz-San José del Cabo 4270, Fraccionamiento El Palmar II,",
    lat: "24.052969",
    lang: "-110.303125",
    img: "https://lh5.googleusercontent.com/p/AF1QipOMhkUPPlj3LwLvc6M-3L0LyLq8wp8atrS0QKBx=w408-h306-k-no",
    icon: "https://images.vexels.com/media/users/3/128737/isolated/preview/48e42fba70becce83a35fd88be6d589f-icono-de-servicio-de-compras-redondo-by-vexels.png"
  },
  {
    name: "TEX Burguer",
    address:"Paseo Alvaro Obregon, Zona Central, 23000 ",
    lat: "24.165630",
    lang: "-110.3128314",
    img: "https://lh5.googleusercontent.com/p/AF1QipOGjh6Ota_8JFhvQoisWn2aXffINPlrmiFv6Dhc=w408-h306-k-no",
    icon: "https://cdn.onlinewebfonts.com/svg/img_217000.png"
  },
  {
    name: "Just Burguer Colosio",
    address:"Luis Donaldo Colosio & Carabineros, Indeco",
    lat: "24.124969",
    lang: "-110.315806",
    img: "https://lh5.googleusercontent.com/p/AF1QipOjXTxCruadVj3Tl0KDzHfibPLnaOAjNGhK12iT=w426-h240-k-no",
    icon: "https://cdn.onlinewebfonts.com/svg/img_217000.png"
  },
  {
    name: "Just Burguer Garzas",
    address:"Puebla 1125, Universidad Autónoma de, 23060",
    lat: "24.139010",
    lang: "-110.317356",
    img: "https://10619-2.s.cdn12.com/rests/original/311_503605931.jpg",
    icon: "https://cdn.onlinewebfonts.com/svg/img_217000.png"
  },
];

app.use(bodyParser.urlencoded({ extended: false})); // El tipo de codificación que utilizará la salida
app.use(bodyParser.json()); // Formato de la salida

//Levantar el servidor
app.listen(3000, () => {
  //Set up
  console.log("El servidor está corriendo en http://localhost:3000/");
});

app.get('/', (req, res) => {
  res.send("Inicio");
});

/**
*Busqueda
*Hace la busqueda de los lugares
*@param {JSON} query
*@param {string} query.search
*/

app.get('/busqueda', (req, res) => {
  const response = {
    data: [],
    message: ""
  };

  let statusCode = null;
  /* */
  if(req.query.search && req.query.search.trim()){
    //Filtrar en el JSON
    response.data = lugares.filter(lugar => {
      //if return true --- Ese elemento si lo quiero
      return lugar.name.toLocaleLowerCase().includes(req.query.search.toLocaleLowerCase());
    });
    statusCode = 200;
  } else {
    //Enviar todo el JSON
    response.data = lugares;
    statusCode = 200;
  }
  /* */
  res.status(statusCode).send(response);
});
