// IMPORTANTE:
// Este archivo es donde vas a cambiar manualmente la información de la liga.
// Puedes editar equipos, sedes, torneos, partidos, tabla de posiciones y goleadores.

export const contact = {
  whatsapp: "8122512214",
  whatsappLink:
    "https://wa.me/528122512214?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20inscribir%20un%20equipo%20en%20Spartans%20League.",
  instagram: "@sprtns_league",
  instagramLink: "https://www.instagram.com/sprtns_league/",
  youtube: "Spartans League",
  youtubeLink: "https://www.youtube.com/@SpartansLeague-euro",
};

export const sedes = [
  {
    nombre: "Euro Campus Valle",
    estado: "Sede activa",
    liga: "Spartans League Fut 7",
    detalle: "Jornadas y partidos por confirmar según calendario.",
  },
  {
    nombre: "Euro Campus Campestre",
    estado: "Sede activa",
    liga: "Spartans League Fut 7",
    detalle: "Jornadas y partidos por confirmar según calendario.",
  },
  {
    nombre: "Campus Montenova",
    estado: "Sede disponible",
    liga: "Spartans League Fut 7",
    detalle: "Información de torneos y horarios por confirmar.",
  },
];

export const torneos = [
  {
    nombre: "Spartans League Fut 7",
    categoria: "Libre",
    equipos: 14,
    estado: "Torneo actual",
    sedes: "Euro Campus Valle, Euro Campus Campestre y Campus Montenova",
    inicio: "Fecha por confirmar",
  },
];

export const equipos = [
  "SoccerBee",
  "Kawashima Wanders",
  "Principes de la B",
  "Commers",
  "Los Demas FC",
  "Armadillos FC",
  "Jaiba Brava",
  "La Menor FC",
  "FC Internazionale Milanesa",
  "Juniors FC",
  "Capri FC",
  "CAFC",
  "Los Krikos",
  "Necali Moms",
];

// PARTIDOS POR JORNADA Y POR CAMPUS
// Para editar: cambia horarios, equipos, marcadores, estados o descansos.
// En Jornadas 2 a 8 hay descansos para que el calendario cuadre con 14 equipos.

export const partidosPorJornada = [
  {
    "jornada": "Jornada 1",
    "fecha": "Sábado 10 de agosto",
    "campus": [
      {
        "campus": "Campus Valle",
        "sede": "Euro Campus Valle",
        "horario": "8:00 AM a 2:00 PM",
        "descanso": [],
        "juegos": [
          {
            "hora": "08:00",
            "local": "Valle Spartans",
            "visitante": "Atlético Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Real Cumbres",
            "visitante": "Titanes FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Spartanos FC",
            "visitante": "Gladiadores",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Leones FC",
            "visitante": "Halcones Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Toros FC",
            "visitante": "Coyotes",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Rangers SL",
            "visitante": "Black Wolves",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "14:00",
            "local": "Dragones FC",
            "visitante": "Jaguares Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Campestre",
        "sede": "Euro Campus Campestre",
        "horario": "8:00 AM a 2:00 PM",
        "descanso": [],
        "juegos": [
          {
            "hora": "08:00",
            "local": "SoccerBee",
            "visitante": "Kawashima Wanders",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Principes de la B",
            "visitante": "Commers",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Los Demas FC",
            "visitante": "Armadillos FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Jaiba Brava",
            "visitante": "La Menor FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "FC Internazionale Milanesa",
            "visitante": "Juniors FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Capri FC",
            "visitante": "CAFC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "14:00",
            "local": "Los Krikos",
            "visitante": "Necali Moms",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Montenova",
        "sede": "Campus Montenova",
        "horario": "7:30 PM, 8:30 PM y 9:30 PM",
        "descanso": [
          "Tiburones",
          "Venados FC",
          "Sparta Nova",
          "Reales SL",
          "Montenova FC",
          "Cumbres FC",
          "Apaches",
          "Rayos Montenova"
        ],
        "juegos": [
          {
            "hora": "19:30",
            "local": "Imperio FC",
            "visitante": "Centuriones",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "20:30",
            "local": "Nova United",
            "visitante": "Guerreros",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "21:30",
            "local": "Canarios FC",
            "visitante": "Real Nova",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      }
    ]
  },
  {
    "jornada": "Jornada 2",
    "fecha": "Sábado 17 de agosto",
    "campus": [
      {
        "campus": "Campus Valle",
        "sede": "Euro Campus Valle",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
          "Valle Spartans",
          "Atlético Valle"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "Real Cumbres",
            "visitante": "Titanes FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Spartanos FC",
            "visitante": "Gladiadores",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Leones FC",
            "visitante": "Halcones Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Toros FC",
            "visitante": "Coyotes",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Rangers SL",
            "visitante": "Black Wolves",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Dragones FC",
            "visitante": "Jaguares Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Campestre",
        "sede": "Euro Campus Campestre",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
                  "Necali Moms",
                  "Los Demas FC"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "La Menor FC",
            "visitante": "SoccerBee",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "CAFC",
            "visitante": "Commers",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Kawashima Wanders",
            "visitante": "Los Krikos",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Armadillos FC",
            "visitante": "Juniors FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "FC Internazionale Milanesa",
            "visitante": "Principes de la B",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Jaiba Brava",
            "visitante": "Capri FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Montenova",
        "sede": "Campus Montenova",
        "horario": "7:30 PM, 8:30 PM y 9:30 PM",
        "descanso": [
          "Imperio FC",
          "Centuriones",
          "Nova United",
          "Reales SL",
          "Montenova FC",
          "Cumbres FC",
          "Apaches",
          "Rayos Montenova"
        ],
        "juegos": [
          {
            "hora": "19:30",
            "local": "Guerreros",
            "visitante": "Canarios FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "20:30",
            "local": "Real Nova",
            "visitante": "Tiburones",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "21:30",
            "local": "Venados FC",
            "visitante": "Sparta Nova",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      }
    ]
  },
  {
    "jornada": "Jornada 3",
    "fecha": "Sábado 24 de agosto",
    "campus": [
      {
        "campus": "Campus Valle",
        "sede": "Euro Campus Valle",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
          "Real Cumbres",
          "Titanes FC"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "Spartanos FC",
            "visitante": "Gladiadores",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Leones FC",
            "visitante": "Halcones Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Toros FC",
            "visitante": "Coyotes",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Rangers SL",
            "visitante": "Black Wolves",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Dragones FC",
            "visitante": "Jaguares Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Valle Spartans",
            "visitante": "Atlético Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Campestre",
        "sede": "Euro Campus Campestre",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
                  "SoccerBee",
                  "Kawashima Wanders"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "CAFC",
            "visitante": "Armadillos FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Commers",
            "visitante": "Necali Moms",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Capri FC",
            "visitante": "Los Demas FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Juniors FC",
            "visitante": "La Menor FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Los Krikos",
            "visitante": "FC Internazionale Milanesa",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Principes de la B",
            "visitante": "Jaiba Brava",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Montenova",
        "sede": "Campus Montenova",
        "horario": "7:30 PM, 8:30 PM y 9:30 PM",
        "descanso": [
          "Imperio FC",
          "Centuriones",
          "Nova United",
          "Guerreros",
          "Canarios FC",
          "Real Nova",
          "Apaches",
          "Rayos Montenova"
        ],
        "juegos": [
          {
            "hora": "19:30",
            "local": "Tiburones",
            "visitante": "Venados FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "20:30",
            "local": "Sparta Nova",
            "visitante": "Reales SL",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "21:30",
            "local": "Montenova FC",
            "visitante": "Cumbres FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      }
    ]
  },
  {
    "jornada": "Jornada 4",
    "fecha": "Sábado 31 de agosto",
    "campus": [
      {
        "campus": "Campus Valle",
        "sede": "Euro Campus Valle",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
          "Spartanos FC",
          "Gladiadores"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "Titanes FC",
            "visitante": "Leones FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Halcones Valle",
            "visitante": "Toros FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Coyotes",
            "visitante": "Rangers SL",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Black Wolves",
            "visitante": "Dragones FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Jaguares Valle",
            "visitante": "Valle Spartans",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Atlético Valle",
            "visitante": "Real Cumbres",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Campestre",
        "sede": "Euro Campus Campestre",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
                  "La Menor FC",
                  "Los Krikos"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "SoccerBee",
            "visitante": "Capri FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Armadillos FC",
            "visitante": "Commers",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Los Demas FC",
            "visitante": "Principes de la B",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Kawashima Wanders",
            "visitante": "Necali Moms",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "FC Internazionale Milanesa",
            "visitante": "CAFC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Jaiba Brava",
            "visitante": "Juniors FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Montenova",
        "sede": "Campus Montenova",
        "horario": "7:30 PM, 8:30 PM y 9:30 PM",
        "descanso": [
          "Centuriones",
          "Nova United",
          "Guerreros",
          "Canarios FC",
          "Real Nova",
          "Tiburones",
          "Venados FC",
          "Sparta Nova"
        ],
        "juegos": [
          {
            "hora": "19:30",
            "local": "Reales SL",
            "visitante": "Montenova FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "20:30",
            "local": "Cumbres FC",
            "visitante": "Apaches",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "21:30",
            "local": "Rayos Montenova",
            "visitante": "Imperio FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      }
    ]
  },
  {
    "jornada": "Jornada 5",
    "fecha": "Sábado 7 de septiembre",
    "campus": [
      {
        "campus": "Campus Valle",
        "sede": "Euro Campus Valle",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
          "Leones FC",
          "Halcones Valle"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "Spartanos FC",
            "visitante": "Gladiadores",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Toros FC",
            "visitante": "Coyotes",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Rangers SL",
            "visitante": "Black Wolves",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Dragones FC",
            "visitante": "Jaguares Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Valle Spartans",
            "visitante": "Atlético Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Real Cumbres",
            "visitante": "Titanes FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Campestre",
        "sede": "Euro Campus Campestre",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
                  "Commers",
                  "Jaiba Brava"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "SoccerBee",
            "visitante": "Los Krikos",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Kawashima Wanders",
            "visitante": "Principes de la B",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Capri FC",
            "visitante": "Armadillos FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Necali Moms",
            "visitante": "Los Demas FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "La Menor FC",
            "visitante": "FC Internazionale Milanesa",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "CAFC",
            "visitante": "Juniors FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Montenova",
        "sede": "Campus Montenova",
        "horario": "7:30 PM, 8:30 PM y 9:30 PM",
        "descanso": [
          "Canarios FC",
          "Real Nova",
          "Tiburones",
          "Venados FC",
          "Sparta Nova",
          "Reales SL",
          "Montenova FC",
          "Cumbres FC"
        ],
        "juegos": [
          {
            "hora": "19:30",
            "local": "Apaches",
            "visitante": "Rayos Montenova",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "20:30",
            "local": "Imperio FC",
            "visitante": "Centuriones",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "21:30",
            "local": "Nova United",
            "visitante": "Guerreros",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      }
    ]
  },
  {
    "jornada": "Jornada 6",
    "fecha": "Sábado 14 de septiembre",
    "campus": [
      {
        "campus": "Campus Valle",
        "sede": "Euro Campus Valle",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
          "Toros FC",
          "Coyotes"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "Gladiadores",
            "visitante": "Leones FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Halcones Valle",
            "visitante": "Rangers SL",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Black Wolves",
            "visitante": "Dragones FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Jaguares Valle",
            "visitante": "Valle Spartans",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Atlético Valle",
            "visitante": "Real Cumbres",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Titanes FC",
            "visitante": "Spartanos FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Campestre",
        "sede": "Euro Campus Campestre",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
                  "Capri FC",
                  "FC Internazionale Milanesa"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "SoccerBee",
            "visitante": "Juniors FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Principes de la B",
            "visitante": "Commers",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "La Menor FC",
            "visitante": "Kawashima Wanders",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Jaiba Brava",
            "visitante": "Los Krikos",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Los Demas FC",
            "visitante": "CAFC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Necali Moms",
            "visitante": "Armadillos FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Montenova",
        "sede": "Campus Montenova",
        "horario": "7:30 PM, 8:30 PM y 9:30 PM",
        "descanso": [
          "Imperio FC",
          "Venados FC",
          "Sparta Nova",
          "Reales SL",
          "Montenova FC",
          "Cumbres FC",
          "Apaches",
          "Rayos Montenova"
        ],
        "juegos": [
          {
            "hora": "19:30",
            "local": "Centuriones",
            "visitante": "Nova United",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "20:30",
            "local": "Guerreros",
            "visitante": "Canarios FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "21:30",
            "local": "Real Nova",
            "visitante": "Tiburones",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      }
    ]
  },
  {
    "jornada": "Jornada 7",
    "fecha": "Sábado 21 de septiembre",
    "campus": [
      {
        "campus": "Campus Valle",
        "sede": "Euro Campus Valle",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
          "Rangers SL",
          "Black Wolves"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "Leones FC",
            "visitante": "Halcones Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Toros FC",
            "visitante": "Coyotes",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Dragones FC",
            "visitante": "Jaguares Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Valle Spartans",
            "visitante": "Atlético Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Real Cumbres",
            "visitante": "Titanes FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Spartanos FC",
            "visitante": "Gladiadores",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Campestre",
        "sede": "Euro Campus Campestre",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
                  "Principes de la B",
                  "Armadillos FC"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "SoccerBee",
            "visitante": "CAFC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Commers",
            "visitante": "La Menor FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Juniors FC",
            "visitante": "Los Krikos",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Capri FC",
            "visitante": "Necali Moms",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "FC Internazionale Milanesa",
            "visitante": "Jaiba Brava",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Kawashima Wanders",
            "visitante": "Los Demas FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Montenova",
        "sede": "Campus Montenova",
        "horario": "7:30 PM, 8:30 PM y 9:30 PM",
        "descanso": [
          "Imperio FC",
          "Centuriones",
          "Nova United",
          "Guerreros",
          "Montenova FC",
          "Cumbres FC",
          "Apaches",
          "Rayos Montenova"
        ],
        "juegos": [
          {
            "hora": "19:30",
            "local": "Canarios FC",
            "visitante": "Real Nova",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "20:30",
            "local": "Tiburones",
            "visitante": "Venados FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "21:30",
            "local": "Sparta Nova",
            "visitante": "Reales SL",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      }
    ]
  },
  {
    "jornada": "Jornada 8",
    "fecha": "Sábado 28 de septiembre",
    "campus": [
      {
        "campus": "Campus Valle",
        "sede": "Euro Campus Valle",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
          "Dragones FC",
          "Jaguares Valle"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "Halcones Valle",
            "visitante": "Toros FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Coyotes",
            "visitante": "Rangers SL",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Black Wolves",
            "visitante": "Valle Spartans",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Atlético Valle",
            "visitante": "Real Cumbres",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Titanes FC",
            "visitante": "Spartanos FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Gladiadores",
            "visitante": "Leones FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Campestre",
        "sede": "Euro Campus Campestre",
        "horario": "8:00 AM a 1:00 PM",
        "descanso": [
                  "Juniors FC",
                  "CAFC"
        ],
        "juegos": [
          {
            "hora": "08:00",
            "local": "SoccerBee",
            "visitante": "Armadillos FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Jaiba Brava",
            "visitante": "Commers",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Los Krikos",
            "visitante": "Principes de la B",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Kawashima Wanders",
            "visitante": "Capri FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Los Demas FC",
            "visitante": "FC Internazionale Milanesa",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Necali Moms",
            "visitante": "La Menor FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Montenova",
        "sede": "Campus Montenova",
        "horario": "7:30 PM, 8:30 PM y 9:30 PM",
        "descanso": [
          "Imperio FC",
          "Centuriones",
          "Nova United",
          "Guerreros",
          "Canarios FC",
          "Real Nova",
          "Tiburones",
          "Rayos Montenova"
        ],
        "juegos": [
          {
            "hora": "19:30",
            "local": "Venados FC",
            "visitante": "Sparta Nova",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "20:30",
            "local": "Reales SL",
            "visitante": "Montenova FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "21:30",
            "local": "Cumbres FC",
            "visitante": "Apaches",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      }
    ]
  },
  {
    "jornada": "Jornada 9",
    "fecha": "Sábado 5 de octubre",
    "campus": [
      {
        "campus": "Campus Valle",
        "sede": "Euro Campus Valle",
        "horario": "8:00 AM a 2:00 PM",
        "descanso": [],
        "juegos": [
          {
            "hora": "08:00",
            "local": "Toros FC",
            "visitante": "Coyotes",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Rangers SL",
            "visitante": "Black Wolves",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "Dragones FC",
            "visitante": "Jaguares Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "Valle Spartans",
            "visitante": "Atlético Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Real Cumbres",
            "visitante": "Titanes FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Spartanos FC",
            "visitante": "Gladiadores",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "14:00",
            "local": "Leones FC",
            "visitante": "Halcones Valle",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      },
      {
        "campus": "Campus Campestre",
        "sede": "Euro Campus Campestre",
        "horario": "8:00 AM a 2:00 PM",
        "descanso": [],
        "juegos": [
          {
            "hora": "08:00",
            "local": "SoccerBee",
            "visitante": "Necali Moms",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "09:00",
            "local": "Commers",
            "visitante": "Kawashima Wanders",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "10:00",
            "local": "La Menor FC",
            "visitante": "Principes de la B",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "11:00",
            "local": "CAFC",
            "visitante": "Jaiba Brava",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "12:00",
            "local": "Armadillos FC",
            "visitante": "FC Internazionale Milanesa",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "13:00",
            "local": "Juniors FC",
            "visitante": "Los Demas FC",
            "marcador": "Por jugar",
            "estado": "Programado"
          },
          {
            "hora": "14:00",
            "local": "Capri FC",
            "visitante": "Los Krikos",
            "marcador": "Por jugar",
            "estado": "Programado"
          }
        ]
      }
    ]
  }
];

// Alias para mantener compatibilidad con partes anteriores del sitio.
export const partidos = partidosPorJornada;

export const estadisticasPorCampus = [
  {
    campus: "Campus Valle",
    sede: "Euro Campus Valle",
    tablaPosiciones: [
      { equipo: "Valle Spartans", pj: 1, g: 1, e: 0, p: 0, gf: 4, gc: 1, dg: 3, pts: 3 },
      { equipo: "Atlético Valle", pj: 1, g: 1, e: 0, p: 0, gf: 3, gc: 1, dg: 2, pts: 3 },
      { equipo: "Real Cumbres", pj: 1, g: 1, e: 0, p: 0, gf: 2, gc: 0, dg: 2, pts: 3 },
      { equipo: "Titanes FC", pj: 1, g: 1, e: 0, p: 0, gf: 2, gc: 1, dg: 1, pts: 3 },
      { equipo: "Spartanos FC", pj: 1, g: 0, e: 1, p: 0, gf: 2, gc: 2, dg: 0, pts: 1 },
      { equipo: "Gladiadores", pj: 1, g: 0, e: 1, p: 0, gf: 2, gc: 2, dg: 0, pts: 1 },
      { equipo: "Leones FC", pj: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { equipo: "Halcones Valle", pj: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { equipo: "Toros FC", pj: 1, g: 0, e: 0, p: 1, gf: 1, gc: 2, dg: -1, pts: 0 },
      { equipo: "Coyotes", pj: 1, g: 0, e: 0, p: 1, gf: 1, gc: 3, dg: -2, pts: 0 },
      { equipo: "Rangers SL", pj: 1, g: 0, e: 0, p: 1, gf: 0, gc: 2, dg: -2, pts: 0 },
      { equipo: "Black Wolves", pj: 1, g: 0, e: 0, p: 1, gf: 1, gc: 4, dg: -3, pts: 0 },
      { equipo: "Dragones FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Jaguares Valle", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
    ],
    goleadores: [
      { jugador: "Carlos R.", equipo: "Valle Spartans", goles: 3 },
      { jugador: "Diego M.", equipo: "Atlético Valle", goles: 2 },
      { jugador: "Santiago L.", equipo: "Real Cumbres", goles: 2 },
      { jugador: "Emilio G.", equipo: "Titanes FC", goles: 2 },
      { jugador: "Andrés V.", equipo: "Spartanos FC", goles: 2 },
      { jugador: "Luis P.", equipo: "Gladiadores", goles: 1 },
      { jugador: "Mateo A.", equipo: "Leones FC", goles: 1 },
      { jugador: "Jorge C.", equipo: "Halcones Valle", goles: 1 },
    ],
  },
  {
    campus: "Campus Campestre",
    sede: "Euro Campus Campestre",
    tablaPosiciones: [
      { equipo: "SoccerBee", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Kawashima Wanders", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Principes de la B", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Commers", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Los Demas FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Armadillos FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Jaiba Brava", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "La Menor FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "FC Internazionale Milanesa", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Juniors FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Capri FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "CAFC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Los Krikos", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Necali Moms", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
    ],
    goleadores: [],
  },
  {
    campus: "Campus Montenova",
    sede: "Campus Montenova",
    tablaPosiciones: [
      { equipo: "Montenova FC", pj: 1, g: 1, e: 0, p: 0, gf: 4, gc: 0, dg: 4, pts: 3 },
      { equipo: "Cumbres FC", pj: 1, g: 1, e: 0, p: 0, gf: 3, gc: 1, dg: 2, pts: 3 },
      { equipo: "Apaches", pj: 1, g: 1, e: 0, p: 0, gf: 2, gc: 0, dg: 2, pts: 3 },
      { equipo: "Rayos Montenova", pj: 1, g: 1, e: 0, p: 0, gf: 2, gc: 1, dg: 1, pts: 3 },
      { equipo: "Imperio FC", pj: 1, g: 0, e: 1, p: 0, gf: 3, gc: 3, dg: 0, pts: 1 },
      { equipo: "Centuriones", pj: 1, g: 0, e: 1, p: 0, gf: 3, gc: 3, dg: 0, pts: 1 },
      { equipo: "Nova United", pj: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { equipo: "Guerreros", pj: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { equipo: "Canarios FC", pj: 1, g: 0, e: 0, p: 1, gf: 1, gc: 2, dg: -1, pts: 0 },
      { equipo: "Real Nova", pj: 1, g: 0, e: 0, p: 1, gf: 1, gc: 3, dg: -2, pts: 0 },
      { equipo: "Tiburones", pj: 1, g: 0, e: 0, p: 1, gf: 0, gc: 2, dg: -2, pts: 0 },
      { equipo: "Venados FC", pj: 1, g: 0, e: 0, p: 1, gf: 0, gc: 4, dg: -4, pts: 0 },
      { equipo: "Sparta Nova", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Reales SL", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
    ],
    goleadores: [
      { jugador: "Eduardo M.", equipo: "Montenova FC", goles: 3 },
      { jugador: "Ángel P.", equipo: "Cumbres FC", goles: 2 },
      { jugador: "Sebastián R.", equipo: "Imperio FC", goles: 2 },
      { jugador: "Rodrigo S.", equipo: "Centuriones", goles: 2 },
      { jugador: "Gael L.", equipo: "Apaches", goles: 2 },
      { jugador: "Daniel T.", equipo: "Rayos Montenova", goles: 2 },
      { jugador: "Omar V.", equipo: "Nova United", goles: 1 },
      { jugador: "Fabián C.", equipo: "Guerreros", goles: 1 },
    ],
  },
];

// Estas dos líneas se usan para mostrar un resumen rápido en el inicio.
// Si quieres que el inicio muestre otro campus, cambia el número [0] por [1] o [2].
export const tablaPosiciones = estadisticasPorCampus[0].tablaPosiciones;
export const goleadores = estadisticasPorCampus[0].goleadores;
