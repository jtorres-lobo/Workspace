window.onload = () => {
  const provinceSelector = document.querySelector("#provinces_selector");
  const citySelector = document.querySelector("#cities_selector");
  const countryModel = "checkout[shipping_address][country]=";
  const provinceModel = "checkout[shipping_address][province]=";
  const cityModel = "checkout[shipping_address][city]=";
  let permalink_buy_btn = document.querySelector("#permalink").href;

  let buy_btn = `${permalink_buy_btn}${countryModel}CL&${provinceModel}${provinceSelector.value}&${cityModel}${citySelector.value}`;


  
  const regiones = [
    { code: "AP", name: "Arica y Parinacota" },
    { code: "TA", name: "Tarapacá" },
    { code: "AN", name: "Antofagasta" },
    { code: "AT", name: "Atacama" },
    { code: "CO", name: "Coquimbo" },
    { code: "VS", name: "Valparaíso" },
    { code: "LI", name: "Libertador General Bernardo O’Higgins" },
    { code: "ML", name: "Maule" },
    { code: "NB", name: "Ñuble" },
    { code: "BI", name: "Bío Bío" },
    { code: "AR", name: "Araucanía" },
    { code: "LR", name: "Los Ríos" },
    { code: "LL", name: "Los Lagos" },
    { code: "AI", name: "Aysén" },
    { code: "MA", name: "Región de Magallanes" },
    { code: "RM", name: "Región Metropolitana" },
  ];

  const ciudades = [
      {
        "id": 14,
        "nombre": "Arica",
        "region": "AP"
      },
      {
        "id": 25,
        "nombre": "Camarones",
        "region": "AP"
      },
      {
        "id": 98,
        "nombre": "General Lagos",
        "region": "AP"
      },
      {
        "id": 244,
        "nombre": "Putre",
        "region": "AP"
      },
      {
        "id": 6,
        "nombre": "Alto Hospicio",
        "region": "TA"
      },
      {
        "id": 26,
        "nombre": "Camiña",
        "region": "TA"
      },
      {
        "id": 58,
        "nombre": "Colchane",
        "region": "TA"
      },
      {
        "id": 107,
        "nombre": "Huara",
        "region": "TA"
      },
      {
        "id": 112,
        "nombre": "Iquique",
        "region": "TA"
      },
      {
        "id": 218,
        "nombre": "Pica",
        "region": "TA"
      },
      {
        "id": 227,
        "nombre": "Pozo Almonte",
        "region": "TA"
      },
      {
        "id": 11,
        "nombre": "Antofagasta",
        "region": "AN"
      },
      {
        "id": 20,
        "nombre": "Calama",
        "region": "AN"
      },
      {
        "id": 166,
        "nombre": "María Elena",
        "region": "AN"
      },
      {
        "id": 171,
        "nombre": "Mejillones",
        "region": "AN"
      },
      {
        "id": 190,
        "nombre": "Ollague",
        "region": "AN"
      },
      {
        "id": 298,
        "nombre": "San Pedro de Atacama",
        "region": "AN"
      },
      {
        "id": 310,
        "nombre": "Sierra Gorda",
        "region": "AN"
      },
      {
        "id": 314,
        "nombre": "Taltal",
        "region": "AN"
      },
      {
        "id": 322,
        "nombre": "Tocopilla",
        "region": "AN"
      },
      {
        "id": 5,
        "nombre": "Alto del Carmen",
        "region": "AT"
      },
      {
        "id": 22,
        "nombre": "Caldera",
        "region": "AT"
      },
      {
        "id": 39,
        "nombre": "Chañaral",
        "region": "AT"
      },
      {
        "id": 68,
        "nombre": "Copiapó",
        "region": "AT"
      },
      {
        "id": 80,
        "nombre": "Diego de Almagro",
        "region": "AT"
      },
      {
        "id": 92,
        "nombre": "Freirina",
        "region": "AT"
      },
      {
        "id": 108,
        "nombre": "Huasco",
        "region": "AT"
      },
      {
        "id": 318,
        "nombre": "Tierra Amarilla",
        "region": "AT"
      },
      {
        "id": 331,
        "nombre": "Vallenar",
        "region": "AT"
      },
      {
        "id": 8,
        "nombre": "Andacollo",
        "region": "CO"
      },
      {
        "id": 27,
        "nombre": "Canela",
        "region": "CO"
      },
      {
        "id": 62,
        "nombre": "Combarbalá",
        "region": "CO"
      },
      {
        "id": 69,
        "nombre": "Coquimbo",
        "region": "CO"
      },
      {
        "id": 110,
        "nombre": "Illapel",
        "region": "CO"
      },
      {
        "id": 122,
        "nombre": "La Higuera",
        "region": "CO"
      },
      {
        "id": 126,
        "nombre": "La Serena",
        "region": "CO"
      },
      {
        "id": 157,
        "nombre": "Los Vilos",
        "region": "CO"
      },
      {
        "id": 175,
        "nombre": "Monte Patria",
        "region": "CO"
      },
      {
        "id": 193,
        "nombre": "Ovalle",
        "region": "CO"
      },
      {
        "id": 196,
        "nombre": "Paihuano",
        "region": "CO"
      },
      {
        "id": 238,
        "nombre": "Punitaqui",
        "region": "CO"
      },
      {
        "id": 272,
        "nombre": "Río Hurtado",
        "region": "CO"
      },
      {
        "id": 279,
        "nombre": "Salamanca",
        "region": "CO"
      },
      {
        "id": 335,
        "nombre": "Vicuña",
        "region": "CO"
      },
      {
        "id": 2,
        "nombre": "Algarrobo",
        "region": "VS"
      },
      {
        "id": 17,
        "nombre": "Cabildo",
        "region": "VS"
      },
      {
        "id": 24,
        "nombre": "Calle Larga",
        "region": "VS"
      },
      {
        "id": 30,
        "nombre": "Cartagena",
        "region": "VS"
      },
      {
        "id": 31,
        "nombre": "Casablanca",
        "region": "VS"
      },
      {
        "id": 33,
        "nombre": "Catemu",
        "region": "VS"
      },
      {
        "id": 65,
        "nombre": "Concón",
        "region": "VS"
      },
      {
        "id": 85,
        "nombre": "El Quisco",
        "region": "VS"
      },
      {
        "id": 86,
        "nombre": "El Tabo",
        "region": "VS"
      },
      {
        "id": 102,
        "nombre": "Hijuelas",
        "region": "VS"
      },
      {
        "id": 114,
        "nombre": "Isla de Pascua",
        "region": "VS"
      },
      {
        "id": 115,
        "nombre": "Juan Fernández",
        "region": "VS"
      },
      {
        "id": 116,
        "nombre": "La Calera",
        "region": "VS"
      },
      {
        "id": 118,
        "nombre": "La Cruz",
        "region": "VS"
      },
      {
        "id": 123,
        "nombre": "La Ligua",
        "region": "VS"
      },
      {
        "id": 139,
        "nombre": "Limache",
        "region": "VS"
      },
      {
        "id": 142,
        "nombre": "Llay Llay",
        "region": "VS"
      },
      {
        "id": 152,
        "nombre": "Los Andes",
        "region": "VS"
      },
      {
        "id": 184,
        "nombre": "Nogales",
        "region": "VS"
      },
      {
        "id": 191,
        "nombre": "Olmué",
        "region": "VS"
      },
      {
        "id": 202,
        "nombre": "Panquehue",
        "region": "VS"
      },
      {
        "id": 203,
        "nombre": "Papudo",
        "region": "VS"
      },
      {
        "id": 216,
        "nombre": "Petorca",
        "region": "VS"
      },
      {
        "id": 230,
        "nombre": "Puchuncaví",
        "region": "VS"
      },
      {
        "id": 243,
        "nombre": "Putaendo",
        "region": "VS"
      },
      {
        "id": 253,
        "nombre": "Quillota",
        "region": "VS"
      },
      {
        "id": 254,
        "nombre": "Quilpué",
        "region": "VS"
      },
      {
        "id": 258,
        "nombre": "Quintero",
        "region": "VS"
      },
      {
        "id": 269,
        "nombre": "Rinconada",
        "region": "VS"
      },
      {
        "id": 280,
        "nombre": "San Antonio",
        "region": "VS"
      },
      {
        "id": 284,
        "nombre": "San Esteban",
        "region": "VS"
      },
      {
        "id": 286,
        "nombre": "San Felipe",
        "region": "VS"
      },
      {
        "id": 307,
        "nombre": "Santa María",
        "region": "VS"
      },
      {
        "id": 309,
        "nombre": "Santo Domingo",
        "region": "VS"
      },
      {
        "id": 332,
        "nombre": "Valparaíso",
        "region": "VS"
      },
      {
        "id": 338,
        "nombre": "Villa Alemana",
        "region": "VS"
      },
      {
        "id": 340,
        "nombre": "Viña del Mar",
        "region": "VS"
      },
      {
        "id": 345,
        "nombre": "Zapallar",
        "region": "VS"
      },
      {
        "id": 3,
        "nombre": "Alhué",
        "region": "RM"
      },
      {
        "id": 15,
        "nombre": "Buin",
        "region": "RM"
      },
      {
        "id": 23,
        "nombre": "Calera de Tango",
        "region": "RM"
      },
      {
        "id": 35,
        "nombre": "Cerrillos",
        "region": "RM"
      },
      {
        "id": 36,
        "nombre": "Cerro Navia",
        "region": "RM"
      },
      {
        "id": 59,
        "nombre": "Colina",
        "region": "RM"
      },
      {
        "id": 64,
        "nombre": "Conchalí",
        "region": "RM"
      },
      {
        "id": 82,
        "nombre": "El Bosque",
        "region": "RM"
      },
      {
        "id": 84,
        "nombre": "El Monte",
        "region": "RM"
      },
      {
        "id": 89,
        "nombre": "Estación Central",
        "region": "RM"
      },
      {
        "id": 109,
        "nombre": "Huechuraba",
        "region": "RM"
      },
      {
        "id": 111,
        "nombre": "Independencia",
        "region": "RM"
      },
      {
        "id": 113,
        "nombre": "Isla de Maipo",
        "region": "RM"
      },
      {
        "id": 117,
        "nombre": "La Cisterna",
        "region": "RM"
      },
      {
        "id": 120,
        "nombre": "La Florida",
        "region": "RM"
      },
      {
        "id": 121,
        "nombre": "La Granja",
        "region": "RM"
      },
      {
        "id": 124,
        "nombre": "La Pintana",
        "region": "RM"
      },
      {
        "id": 125,
        "nombre": "La Reina",
        "region": "RM"
      },
      {
        "id": 132,
        "nombre": "Lampa",
        "region": "RM"
      },
      {
        "id": 135,
        "nombre": "Las Condes",
        "region": "RM"
      },
      {
        "id": 144,
        "nombre": "Lo Barnechea",
        "region": "RM"
      },
      {
        "id": 145,
        "nombre": "Lo Espejo",
        "region": "RM"
      },
      {
        "id": 146,
        "nombre": "Lo Prado",
        "region": "RM"
      },
      {
        "id": 161,
        "nombre": "Macul",
        "region": "RM"
      },
      {
        "id": 163,
        "nombre": "Maipú",
        "region": "RM"
      },
      {
        "id": 167,
        "nombre": "María Pinto",
        "region": "RM"
      },
      {
        "id": 173,
        "nombre": "Melipilla",
        "region": "RM"
      },
      {
        "id": 187,
        "nombre": "Ñuñoa",
        "region": "RM"
      },
      {
        "id": 194,
        "nombre": "Padre Hurtado",
        "region": "RM"
      },
      {
        "id": 198,
        "nombre": "Paine",
        "region": "RM"
      },
      {
        "id": 205,
        "nombre": "Pedro Aguirre Cerda",
        "region": "RM"
      },
      {
        "id": 211,
        "nombre": "Peñaflor",
        "region": "RM"
      },
      {
        "id": 212,
        "nombre": "Peñalolén",
        "region": "RM"
      },
      {
        "id": 222,
        "nombre": "Pirque",
        "region": "RM"
      },
      {
        "id": 229,
        "nombre": "Providencia",
        "region": "RM"
      },
      {
        "id": 232,
        "nombre": "Pudahuel",
        "region": "RM"
      },
      {
        "id": 233,
        "nombre": "Puente Alto",
        "region": "RM"
      },
      {
        "id": 250,
        "nombre": "Quilicura",
        "region": "RM"
      },
      {
        "id": 257,
        "nombre": "Quinta Normal",
        "region": "RM"
      },
      {
        "id": 263,
        "nombre": "Recoleta",
        "region": "RM"
      },
      {
        "id": 265,
        "nombre": "Renca",
        "region": "RM"
      },
      {
        "id": 281,
        "nombre": "San Bernardo",
        "region": "RM"
      },
      {
        "id": 291,
        "nombre": "San Joaquín",
        "region": "RM"
      },
      {
        "id": 292,
        "nombre": "San José de Maipo",
        "region": "RM"
      },
      {
        "id": 294,
        "nombre": "San Miguel",
        "region": "RM"
      },
      {
        "id": 297,
        "nombre": "San Pedro",
        "region": "RM"
      },
      {
        "id": 301,
        "nombre": "San Ramón",
        "region": "RM"
      },
      {
        "id": 308,
        "nombre": "Santiago",
        "region": "RM"
      },
      {
        "id": 311,
        "nombre": "Talagante",
        "region": "RM"
      },
      {
        "id": 319,
        "nombre": "Tiltil",
        "region": "RM"
      },
      {
        "id": 341,
        "nombre": "Vitacura",
        "region": "RM"
      },
      {
        "id": 346,
        "nombre": "Curacaví",
        "region": "RM"
      },
      {
        "id": 40,
        "nombre": "Chépica",
        "region": "LI"
      },
      {
        "id": 45,
        "nombre": "Chimbarongo",
        "region": "LI"
      },
      {
        "id": 52,
        "nombre": "Codegua",
        "region": "LI"
      },
      {
        "id": 56,
        "nombre": "Coínco",
        "region": "LI"
      },
      {
        "id": 61,
        "nombre": "Coltauco",
        "region": "LI"
      },
      {
        "id": 81,
        "nombre": "Doñihue",
        "region": "LI"
      },
      {
        "id": 100,
        "nombre": "Graneros",
        "region": "LI"
      },
      {
        "id": 119,
        "nombre": "La Estrella",
        "region": "LI"
      },
      {
        "id": 134,
        "nombre": "Las Cabras",
        "region": "LI"
      },
      {
        "id": 141,
        "nombre": "Litueche",
        "region": "LI"
      },
      {
        "id": 147,
        "nombre": "Lolol",
        "region": "LI"
      },
      {
        "id": 160,
        "nombre": "Machalí",
        "region": "LI"
      },
      {
        "id": 164,
        "nombre": "Malloa",
        "region": "LI"
      },
      {
        "id": 165,
        "nombre": "Marchigue",
        "region": "LI"
      },
      {
        "id": 176,
        "nombre": "Mostazal",
        "region": "LI"
      },
      {
        "id": 179,
        "nombre": "Nancagua",
        "region": "LI"
      },
      {
        "id": 181,
        "nombre": "Navidad",
        "region": "LI"
      },
      {
        "id": 189,
        "nombre": "Olivar",
        "region": "LI"
      },
      {
        "id": 200,
        "nombre": "Palmilla",
        "region": "LI"
      },
      {
        "id": 213,
        "nombre": "Peralillo",
        "region": "LI"
      },
      {
        "id": 214,
        "nombre": "Paredones",
        "region": "LI"
      },
      {
        "id": 217,
        "nombre": "Peumo",
        "region": "LI"
      },
      {
        "id": 219,
        "nombre": "Pichidegua",
        "region": "LI"
      },
      {
        "id": 220,
        "nombre": "Pichilemu",
        "region": "LI"
      },
      {
        "id": 224,
        "nombre": "Placilla",
        "region": "LI"
      },
      {
        "id": 237,
        "nombre": "Pumanque",
        "region": "LI"
      },
      {
        "id": 256,
        "nombre": "Quinta de Tilcoco",
        "region": "LI"
      },
      {
        "id": 260,
        "nombre": "Rancagua",
        "region": "LI"
      },
      {
        "id": 266,
        "nombre": "Rengo",
        "region": "LI"
      },
      {
        "id": 267,
        "nombre": "Requínoa",
        "region": "LI"
      },
      {
        "id": 287,
        "nombre": "San Fernando",
        "region": "LI"
      },
      {
        "id": 303,
        "nombre": "San Vicente de Tagua Tagua",
        "region": "LI"
      },
      {
        "id": 305,
        "nombre": "Santa Cruz",
        "region": "LI"
      },
      {
        "id": 34,
        "nombre": "Cauquenes",
        "region": "ML"
      },
      {
        "id": 38,
        "nombre": "Chanco",
        "region": "ML"
      },
      {
        "id": 57,
        "nombre": "Colbún",
        "region": "ML"
      },
      {
        "id": 66,
        "nombre": "Constitución",
        "region": "ML"
      },
      {
        "id": 77,
        "nombre": "Curepto",
        "region": "ML"
      },
      {
        "id": 78,
        "nombre": "Curicó",
        "region": "ML"
      },
      {
        "id": 87,
        "nombre": "Empedrado",
        "region": "ML"
      },
      {
        "id": 104,
        "nombre": "Hualañé",
        "region": "ML"
      },
      {
        "id": 138,
        "nombre": "Licantén",
        "region": "ML"
      },
      {
        "id": 140,
        "nombre": "Linares",
        "region": "ML"
      },
      {
        "id": 149,
        "nombre": "Longaví",
        "region": "ML"
      },
      {
        "id": 169,
        "nombre": "Maule",
        "region": "ML"
      },
      {
        "id": 174,
        "nombre": "Molina",
        "region": "ML"
      },
      {
        "id": 204,
        "nombre": "Parral",
        "region": "ML"
      },
      {
        "id": 206,
        "nombre": "Pelarco",
        "region": "ML"
      },
      {
        "id": 207,
        "nombre": "Pelluhue",
        "region": "ML"
      },
      {
        "id": 209,
        "nombre": "Pencahue",
        "region": "ML"
      },
      {
        "id": 262,
        "nombre": "Rauco",
        "region": "ML"
      },
      {
        "id": 268,
        "nombre": "Retiro",
        "region": "ML"
      },
      {
        "id": 271,
        "nombre": "Río Claro",
        "region": "ML"
      },
      {
        "id": 276,
        "nombre": "Romeral",
        "region": "ML"
      },
      {
        "id": 278,
        "nombre": "Sagrada Familia",
        "region": "ML"
      },
      {
        "id": 283,
        "nombre": "San Clemente",
        "region": "ML"
      },
      {
        "id": 290,
        "nombre": "San Javier",
        "region": "ML"
      },
      {
        "id": 300,
        "nombre": "San Rafael",
        "region": "ML"
      },
      {
        "id": 312,
        "nombre": "Talca",
        "region": "ML"
      },
      {
        "id": 316,
        "nombre": "Teno",
        "region": "ML"
      },
      {
        "id": 333,
        "nombre": "Vichuquén",
        "region": "ML"
      },
      {
        "id": 337,
        "nombre": "Villa Alegre",
        "region": "ML"
      },
      {
        "id": 342,
        "nombre": "Yerbas Buenas",
        "region": "ML"
      },
      {
        "id": 4,
        "nombre": "Alto Biobío",
        "region": "BI"
      },
      {
        "id": 12,
        "nombre": "Antuco",
        "region": "BI"
      },
      {
        "id": 13,
        "nombre": "Arauco",
        "region": "BI"
      },
      {
        "id": 19,
        "nombre": "Cabrero",
        "region": "BI"
      },
      {
        "id": 28,
        "nombre": "Cañete",
        "region": "BI"
      },
      {
        "id": 41,
        "nombre": "Chiguayante",
        "region": "BI"
      },
      {
        "id": 63,
        "nombre": "Concepción",
        "region": "BI"
      },
      {
        "id": 67,
        "nombre": "Contulmo",
        "region": "BI"
      },
      {
        "id": 70,
        "nombre": "Coronel",
        "region": "BI"
      },
      {
        "id": 75,
        "nombre": "Curanilahue",
        "region": "BI"
      },
      {
        "id": 90,
        "nombre": "Florida",
        "region": "BI"
      },
      {
        "id": 105,
        "nombre": "Hualpén",
        "region": "BI"
      },
      {
        "id": 106,
        "nombre": "Hualqui",
        "region": "BI"
      },
      {
        "id": 131,
        "nombre": "Laja",
        "region": "BI"
      },
      {
        "id": 137,
        "nombre": "Lebu",
        "region": "BI"
      },
      {
        "id": 151,
        "nombre": "Los Álamos",
        "region": "BI"
      },
      {
        "id": 153,
        "nombre": "Los Ángeles",
        "region": "BI"
      },
      {
        "id": 158,
        "nombre": "Lota",
        "region": "BI"
      },
      {
        "id": 177,
        "nombre": "Mulchén",
        "region": "BI"
      },
      {
        "id": 178,
        "nombre": "Nacimiento",
        "region": "BI"
      },
      {
        "id": 182,
        "nombre": "Negrete",
        "region": "BI"
      },
      {
        "id": 210,
        "nombre": "Penco",
        "region": "BI"
      },
      {
        "id": 249,
        "nombre": "Quilaco",
        "region": "BI"
      },
      {
        "id": 251,
        "nombre": "Quilleco",
        "region": "BI"
      },
      {
        "id": 299,
        "nombre": "San Pedro de la Paz",
        "region": "BI"
      },
      {
        "id": 302,
        "nombre": "San Rosendo",
        "region": "BI"
      },
      {
        "id": 304,
        "nombre": "Santa Bárbara",
        "region": "BI"
      },
      {
        "id": 306,
        "nombre": "Santa Juana",
        "region": "BI"
      },
      {
        "id": 313,
        "nombre": "Talcahuano",
        "region": "BI"
      },
      {
        "id": 321,
        "nombre": "Tirúa",
        "region": "BI"
      },
      {
        "id": 324,
        "nombre": "Tomé",
        "region": "BI"
      },
      {
        "id": 329,
        "nombre": "Tucapel",
        "region": "BI"
      },
      {
        "id": 343,
        "nombre": "Yumbel",
        "region": "BI"
      },
      {
        "id": 9,
        "nombre": "Angol",
        "region": "AR"
      },
      {
        "id": 29,
        "nombre": "Carahue",
        "region": "AR"
      },
      {
        "id": 46,
        "nombre": "Cholchol",
        "region": "AR"
      },
      {
        "id": 60,
        "nombre": "Collipulli",
        "region": "AR"
      },
      {
        "id": 72,
        "nombre": "Cunco",
        "region": "AR"
      },
      {
        "id": 73,
        "nombre": "Curacautín",
        "region": "AR"
      },
      {
        "id": 76,
        "nombre": "Curarrehue",
        "region": "AR"
      },
      {
        "id": 88,
        "nombre": "Ercilla",
        "region": "AR"
      },
      {
        "id": 91,
        "nombre": "Freire",
        "region": "AR"
      },
      {
        "id": 97,
        "nombre": "Galvarino",
        "region": "AR"
      },
      {
        "id": 99,
        "nombre": "Gorbea",
        "region": "AR"
      },
      {
        "id": 136,
        "nombre": "Lautaro",
        "region": "AR"
      },
      {
        "id": 148,
        "nombre": "Loncoche",
        "region": "AR"
      },
      {
        "id": 150,
        "nombre": "Lonquimay",
        "region": "AR"
      },
      {
        "id": 156,
        "nombre": "Los Sauces",
        "region": "AR"
      },
      {
        "id": 159,
        "nombre": "Lumaco",
        "region": "AR"
      },
      {
        "id": 172,
        "nombre": "Melipeuco",
        "region": "AR"
      },
      {
        "id": 185,
        "nombre": "Nueva Imperial",
        "region": "AR"
      },
      {
        "id": 195,
        "nombre": "Padre las Casas",
        "region": "AR"
      },
      {
        "id": 215,
        "nombre": "Perquenco",
        "region": "AR"
      },
      {
        "id": 223,
        "nombre": "Pitrufquén",
        "region": "AR"
      },
      {
        "id": 231,
        "nombre": "Pucón",
        "region": "AR"
      },
      {
        "id": 241,
        "nombre": "Purén",
        "region": "AR"
      },
      {
        "id": 264,
        "nombre": "Renaico",
        "region": "AR"
      },
      {
        "id": 277,
        "nombre": "Saavedra",
        "region": "AR"
      },
      {
        "id": 315,
        "nombre": "Temuco",
        "region": "AR"
      },
      {
        "id": 317,
        "nombre": "Teodoro Schmidt",
        "region": "AR"
      },
      {
        "id": 323,
        "nombre": "Toltén",
        "region": "AR"
      },
      {
        "id": 327,
        "nombre": "Traiguén",
        "region": "AR"
      },
      {
        "id": 334,
        "nombre": "Victoria",
        "region": "AR"
      },
      {
        "id": 336,
        "nombre": "Vilcún",
        "region": "AR"
      },
      {
        "id": 339,
        "nombre": "Villarrica",
        "region": "AR"
      },
      {
        "id": 71,
        "nombre": "Corral",
        "region": "LR"
      },
      {
        "id": 96,
        "nombre": "Futrono",
        "region": "LR"
      },
      {
        "id": 127,
        "nombre": "La Unión",
        "region": "LR"
      },
      {
        "id": 128,
        "nombre": "Lago Ranco",
        "region": "LR"
      },
      {
        "id": 133,
        "nombre": "Lanco",
        "region": "LR"
      },
      {
        "id": 154,
        "nombre": "Los Lagos",
        "region": "LR"
      },
      {
        "id": 162,
        "nombre": "Máfil",
        "region": "LR"
      },
      {
        "id": 168,
        "nombre": "Mariquina",
        "region": "LR"
      },
      {
        "id": 197,
        "nombre": "Paillaco",
        "region": "LR"
      },
      {
        "id": 201,
        "nombre": "Panguipulli",
        "region": "LR"
      },
      {
        "id": 270,
        "nombre": "Río Bueno",
        "region": "LR"
      },
      {
        "id": 330,
        "nombre": "Valdivia",
        "region": "LR"
      },
      {
        "id": 7,
        "nombre": "Ancud",
        "region": "LL"
      },
      {
        "id": 21,
        "nombre": "Calbuco",
        "region": "LL"
      },
      {
        "id": 32,
        "nombre": "Castro",
        "region": "LL"
      },
      {
        "id": 37,
        "nombre": "Chaitén",
        "region": "LL"
      },
      {
        "id": 47,
        "nombre": "Chonchi",
        "region": "LL"
      },
      {
        "id": 50,
        "nombre": "Cochamó",
        "region": "LL"
      },
      {
        "id": 74,
        "nombre": "Curaco de Vélez",
        "region": "LL"
      },
      {
        "id": 79,
        "nombre": "Dalcahue",
        "region": "LL"
      },
      {
        "id": 93,
        "nombre": "Fresia",
        "region": "LL"
      },
      {
        "id": 94,
        "nombre": "Frutillar",
        "region": "LL"
      },
      {
        "id": 95,
        "nombre": "Futaleufú",
        "region": "LL"
      },
      {
        "id": 103,
        "nombre": "Hualaihué",
        "region": "LL"
      },
      {
        "id": 143,
        "nombre": "Llanquihue",
        "region": "LL"
      },
      {
        "id": 155,
        "nombre": "Los Muermos",
        "region": "LL"
      },
      {
        "id": 170,
        "nombre": "Maullín",
        "region": "LL"
      },
      {
        "id": 192,
        "nombre": "Osorno",
        "region": "LL"
      },
      {
        "id": 199,
        "nombre": "Palena",
        "region": "LL"
      },
      {
        "id": 234,
        "nombre": "Puerto Octay",
        "region": "LL"
      },
      {
        "id": 235,
        "nombre": "Puerto Montt",
        "region": "LL"
      },
      {
        "id": 236,
        "nombre": "Puerto Varas",
        "region": "LL"
      },
      {
        "id": 240,
        "nombre": "Puqueldón",
        "region": "LL"
      },
      {
        "id": 242,
        "nombre": "Purranque",
        "region": "LL"
      },
      {
        "id": 245,
        "nombre": "Puyehue",
        "region": "LL"
      },
      {
        "id": 246,
        "nombre": "Queilén",
        "region": "LL"
      },
      {
        "id": 247,
        "nombre": "Quellón",
        "region": "LL"
      },
      {
        "id": 248,
        "nombre": "Quemchi",
        "region": "LL"
      },
      {
        "id": 255,
        "nombre": "Quinchao",
        "region": "LL"
      },
      {
        "id": 274,
        "nombre": "Río Negro",
        "region": "LL"
      },
      {
        "id": 293,
        "nombre": "San Juan de la Costa",
        "region": "LL"
      },
      {
        "id": 296,
        "nombre": "San Pablo",
        "region": "LL"
      },
      {
        "id": 1,
        "nombre": "Aysén",
        "region": "AI"
      },
      {
        "id": 42,
        "nombre": "Chile Chico",
        "region": "AI"
      },
      {
        "id": 48,
        "nombre": "Cisnes",
        "region": "AI"
      },
      {
        "id": 51,
        "nombre": "Cochrane",
        "region": "AI"
      },
      {
        "id": 54,
        "nombre": "Coyhaique",
        "region": "AI"
      },
      {
        "id": 101,
        "nombre": "Guaitecas",
        "region": "AI"
      },
      {
        "id": 129,
        "nombre": "Lago Verde",
        "region": "AI"
      },
      {
        "id": 188,
        "nombre": "O'Higgins",
        "region": "AI"
      },
      {
        "id": 273,
        "nombre": "Río Ibáñez",
        "region": "AI"
      },
      {
        "id": 326,
        "nombre": "Tortel",
        "region": "AI"
      },
      {
        "id": 10,
        "nombre": "Antártica",
        "region": "MA"
      },
      {
        "id": 18,
        "nombre": "Cabo de Hornos",
        "region": "MA"
      },
      {
        "id": 130,
        "nombre": "Laguna Blanca",
        "region": "MA"
      },
      {
        "id": 180,
        "nombre": "Natales",
        "region": "MA"
      },
      {
        "id": 226,
        "nombre": "Porvenir",
        "region": "MA"
      },
      {
        "id": 228,
        "nombre": "Primavera",
        "region": "MA"
      },
      {
        "id": 239,
        "nombre": "Punta Arenas",
        "region": "MA"
      },
      {
        "id": 275,
        "nombre": "Río Verde",
        "region": "MA"
      },
      {
        "id": 288,
        "nombre": "San Gregorio",
        "region": "MA"
      },
      {
        "id": 320,
        "nombre": "Timaukel",
        "region": "MA"
      },
      {
        "id": 325,
        "nombre": "Torres del Paine",
        "region": "MA"
      },
      {
        "id": 16,
        "nombre": "Bulnes",
        "region": "NB"
      },
      {
        "id": 43,
        "nombre": "Chillán",
        "region": "NB"
      },
      {
        "id": 44,
        "nombre": "Chillán Viejo",
        "region": "NB"
      },
      {
        "id": 49,
        "nombre": "Cobquecura",
        "region": "NB"
      },
      {
        "id": 53,
        "nombre": "Coelemu",
        "region": "NB"
      },
      {
        "id": 55,
        "nombre": "Coihueco",
        "region": "NB"
      },
      {
        "id": 83,
        "nombre": "El Carmen",
        "region": "NB"
      },
      {
        "id": 183,
        "nombre": "Ninhue",
        "region": "NB"
      },
      {
        "id": 186,
        "nombre": "Ñiquen",
        "region": "NB"
      },
      {
        "id": 208,
        "nombre": "Pemuco",
        "region": "NB"
      },
      {
        "id": 221,
        "nombre": "Pinto",
        "region": "NB"
      },
      {
        "id": 225,
        "nombre": "Portezuelo",
        "region": "NB"
      },
      {
        "id": 252,
        "nombre": "Quillón",
        "region": "NB"
      },
      {
        "id": 259,
        "nombre": "Quirihue",
        "region": "NB"
      },
      {
        "id": 261,
        "nombre": "Ránquil",
        "region": "NB"
      },
      {
        "id": 282,
        "nombre": "San Carlos",
        "region": "NB"
      },
      {
        "id": 285,
        "nombre": "San Fabián",
        "region": "NB"
      },
      {
        "id": 289,
        "nombre": "San Ignacio",
        "region": "NB"
      },
      {
        "id": 295,
        "nombre": "San Nicolás",
        "region": "NB"
      },
      {
        "id": 328,
        "nombre": "Trehuaco",
        "region": "NB"
      },
      {
        "id": 344,
        "nombre": "Yungay",
        "region": "NB"
      }
    ];

  regiones.forEach((e) => {
    let provinceOption = document.createElement("option");
    provinceOption.setAttribute("value", `${e.code}`);
    provinceOption.innerHTML = `${e.name}`;
    provinceSelector.appendChild(provinceOption);
  });

  provinceSelector.addEventListener("change", () => {
    selectedProvince = provinceSelector.value;
    console.log(selectedProvince);
    getCities(selectedProvince);
  });

  const getCities = (province_selected) => {
    citySelector.innerHTML ="<option selected='selected' disabled='disabled' value=''>Selecciona tu Ciudad</option>";
    console.log(province_selected);
    res = ciudades.filter((a) => a.region === province_selected);
    console.log(res);

    res.forEach((e) => {
      let cityOption = document.createElement("option");
      cityOption.setAttribute("value", `${e.nombre}`);
      cityOption.setAttribute("region", `${e.region}`);
      cityOption.innerHTML = `${e.nombre}`;
      citySelector.appendChild(cityOption);
    });

  };

  citySelector.addEventListener("change", () => {
    console.log(provinceSelector.value);
    console.log(citySelector.value);
    document.querySelector("#permalink").href = `${permalink_buy_btn}${countryModel}CL&${provinceModel}${provinceSelector.value}&${cityModel}${citySelector.value}`;
  });
  
  // Reference:
  // checkout[shipping_address][country]=CL&checkout[shipping_address][province]=TA&checkout[shipping_address][city]=Iquique

  console.log(permalink_buy_btn);
  console.log("//////////////////////////////////////////");
  console.log(buy_btn);
  console.log("//////////////////////////////////////////");
  document.querySelector("#permalink").href = buy_btn;
  console.log(document.querySelector("#permalink").href);
};
