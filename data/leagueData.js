// IMPORTANTE:
// Este archivo es donde vas a cambiar manualmente la información de la liga.
// Puedes editar equipos, sedes, torneos, partidos, tabla de posiciones y goleadores.

export const contact = {
  whatsapp: "8122512214",
  whatsappLink:
    "https://wa.me/528122512214?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20inscribir%20un%20equipo%20en%20Spartans%20League.",
  instagram: "@sprtns_league",
  instagramLink: "https://www.instagram.com/sprtns_league/",
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
  "Spartanos FC",
  "Titanes FC",
  "Gladiadores",
  "Leones FC",
  "Real Cumbres",
  "Atlético Valle",
  "Montenova FC",
  "Campestre United",
  "Halcones",
  "Dragones FC",
  "Toros FC",
  "Coyotes",
  "Black Wolves",
  "Rangers SL",
];

export const partidos = [
  {
    jornada: "Jornada 1",
    fecha: "Sábado 10 de agosto",
    juegos: [
      { hora: "08:00", sede: "Euro Campus Valle", local: "Spartanos FC", visitante: "Titanes FC", marcador: "3 - 1", estado: "Finalizado" },
      { hora: "08:50", sede: "Euro Campus Valle", local: "Gladiadores", visitante: "Leones FC", marcador: "2 - 2", estado: "Finalizado" },
      { hora: "09:40", sede: "Euro Campus Campestre", local: "Real Cumbres", visitante: "Atlético Valle", marcador: "1 - 0", estado: "Finalizado" },
      { hora: "10:30", sede: "Euro Campus Campestre", local: "Montenova FC", visitante: "Campestre United", marcador: "4 - 2", estado: "Finalizado" },
      { hora: "11:20", sede: "Campus Montenova", local: "Halcones", visitante: "Dragones FC", marcador: "0 - 2", estado: "Finalizado" },
      { hora: "12:10", sede: "Campus Montenova", local: "Toros FC", visitante: "Coyotes", marcador: "1 - 1", estado: "Finalizado" },
      { hora: "13:00", sede: "Campus Montenova", local: "Black Wolves", visitante: "Rangers SL", marcador: "2 - 3", estado: "Finalizado" },
    ],
  },
  {
    jornada: "Jornada 2",
    fecha: "Sábado 17 de agosto",
    juegos: [
      { hora: "08:00", sede: "Euro Campus Valle", local: "Spartanos FC", visitante: "Gladiadores", marcador: "Por jugar", estado: "Programado" },
      { hora: "08:50", sede: "Euro Campus Valle", local: "Titanes FC", visitante: "Real Cumbres", marcador: "Por jugar", estado: "Programado" },
      { hora: "09:40", sede: "Euro Campus Campestre", local: "Leones FC", visitante: "Montenova FC", marcador: "Por jugar", estado: "Programado" },
      { hora: "10:30", sede: "Euro Campus Campestre", local: "Atlético Valle", visitante: "Halcones", marcador: "Por jugar", estado: "Programado" },
      { hora: "11:20", sede: "Campus Montenova", local: "Campestre United", visitante: "Toros FC", marcador: "Por jugar", estado: "Programado" },
      { hora: "12:10", sede: "Campus Montenova", local: "Dragones FC", visitante: "Black Wolves", marcador: "Por jugar", estado: "Programado" },
      { hora: "13:00", sede: "Campus Montenova", local: "Coyotes", visitante: "Rangers SL", marcador: "Por jugar", estado: "Programado" },
    ],
  },
  {
    jornada: "Jornada 3",
    fecha: "Sábado 24 de agosto",
    juegos: [
      { hora: "08:00", sede: "Euro Campus Valle", local: "Real Cumbres", visitante: "Spartanos FC", marcador: "Por jugar", estado: "Programado" },
      { hora: "08:50", sede: "Euro Campus Valle", local: "Montenova FC", visitante: "Titanes FC", marcador: "Por jugar", estado: "Programado" },
      { hora: "09:40", sede: "Euro Campus Campestre", local: "Halcones", visitante: "Gladiadores", marcador: "Por jugar", estado: "Programado" },
      { hora: "10:30", sede: "Euro Campus Campestre", local: "Toros FC", visitante: "Leones FC", marcador: "Por jugar", estado: "Programado" },
      { hora: "11:20", sede: "Campus Montenova", local: "Black Wolves", visitante: "Atlético Valle", marcador: "Por jugar", estado: "Programado" },
      { hora: "12:10", sede: "Campus Montenova", local: "Rangers SL", visitante: "Campestre United", marcador: "Por jugar", estado: "Programado" },
      { hora: "13:00", sede: "Campus Montenova", local: "Coyotes", visitante: "Dragones FC", marcador: "Por jugar", estado: "Programado" },
    ],
  },
];

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
      { equipo: "Campestre United", pj: 1, g: 1, e: 0, p: 0, gf: 5, gc: 2, dg: 3, pts: 3 },
      { equipo: "Real Campestre", pj: 1, g: 1, e: 0, p: 0, gf: 3, gc: 0, dg: 3, pts: 3 },
      { equipo: "San Agustín FC", pj: 1, g: 1, e: 0, p: 0, gf: 3, gc: 1, dg: 2, pts: 3 },
      { equipo: "Panteras FC", pj: 1, g: 1, e: 0, p: 0, gf: 2, gc: 1, dg: 1, pts: 3 },
      { equipo: "Halcones", pj: 1, g: 0, e: 1, p: 0, gf: 2, gc: 2, dg: 0, pts: 1 },
      { equipo: "Dragones FC", pj: 1, g: 0, e: 1, p: 0, gf: 2, gc: 2, dg: 0, pts: 1 },
      { equipo: "Lobos Campestre", pj: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { equipo: "Norte FC", pj: 1, g: 0, e: 1, p: 0, gf: 1, gc: 1, dg: 0, pts: 1 },
      { equipo: "Leones Negros", pj: 1, g: 0, e: 0, p: 1, gf: 1, gc: 2, dg: -1, pts: 0 },
      { equipo: "Furia FC", pj: 1, g: 0, e: 0, p: 1, gf: 1, gc: 3, dg: -2, pts: 0 },
      { equipo: "Tormenta FC", pj: 1, g: 0, e: 0, p: 1, gf: 0, gc: 3, dg: -3, pts: 0 },
      { equipo: "Búfalos", pj: 1, g: 0, e: 0, p: 1, gf: 2, gc: 5, dg: -3, pts: 0 },
      { equipo: "Rojinegros", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
      { equipo: "Golden FC", pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
    ],
    goleadores: [
      { jugador: "Iván B.", equipo: "Campestre United", goles: 3 },
      { jugador: "Pablo S.", equipo: "Real Campestre", goles: 2 },
      { jugador: "Raúl T.", equipo: "San Agustín FC", goles: 2 },
      { jugador: "Héctor F.", equipo: "Panteras FC", goles: 2 },
      { jugador: "Mario N.", equipo: "Dragones FC", goles: 2 },
      { jugador: "Alan R.", equipo: "Búfalos", goles: 2 },
      { jugador: "Bruno G.", equipo: "Halcones", goles: 1 },
      { jugador: "Nicolás C.", equipo: "Lobos Campestre", goles: 1 },
    ],
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
