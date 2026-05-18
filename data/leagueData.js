// IMPORTANTE:
// Este archivo fue generado desde los Excel de Spartans League.
// Puedes editar contacto, equipos, partidos, tabla y goleadores manualmente si hace falta.

export const contact = {
  whatsapp: "8122512214",
  whatsappLink: "https://wa.me/528122512214?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20inscribir%20un%20equipo%20en%20Spartans%20League.",
  instagram: "@sprtns_league",
  instagramLink: "https://www.instagram.com/sprtns_league/",
  youtube: "Spartans League",
  youtubeLink: "https://www.youtube.com/@SpartansLeague-euro"
};

export const sedes = [
  {
    nombre: "Euro Campus Valle",
    estado: "Sede activa",
    liga: "Spartans League Fut 7",
    detalle: "Jornadas 1, 2 y 9 de 8:00 AM a 2:00 PM; jornadas 3 a 8 de 8:00 AM a 1:00 PM."
  },
  {
    nombre: "Euro Campus Campestre",
    estado: "Sede activa",
    liga: "Spartans League Fut 7",
    detalle: "Jornadas 1 y 9 de 8:00 AM a 2:00 PM; jornadas 2 a 8 de 8:00 AM a 1:00 PM."
  },
  {
    nombre: "Campus Montenova",
    estado: "Sede disponible",
    liga: "Spartans League Fut 7",
    detalle: "Información de torneos y horarios por confirmar."
  }
];

export const torneos = [
  {
    nombre: "Spartans League Fut 7",
    categoria: "Libre",
    equipos: 28,
    estado: "Torneo actual",
    sedes: "Euro Campus Valle, Euro Campus Campestre y Campus Montenova",
    inicio: "Fecha por confirmar"
  }
];

export const equipos = ["Rolando City", "Lobos FC", "Formadores FC", "La Banca FC", "Las Mopas", "Perros", "Atlético de Timbuktu", "La Puerquisa", "TruzAzul", "Arrestados FC", "Seleçao Canarinha", "Roger FC", "Leñadores", "Revo FC", "SoccerBee", "Kawashima Wanders", "Principes de la B", "Commers", "Los Demas FC", "Armadillos FC", "Jaiba Brava", "La Menor FC", "FC Internazionale Milanesa", "Juniors FC", "Capri FC", "CAFC", "Los Krikos", "Necali Moms"];

export const totalEquipos = equipos.length;

export const equiposPorCampus = [
  {
    campus: "Campus Valle",
    sede: "Euro Campus Valle",
    horario: "Jornadas 1, 2 y 9: 8:00 AM a 2:00 PM; jornadas 3 a 8: 8:00 AM a 1:00 PM",
    equipos: ["Rolando City", "Lobos FC", "Formadores FC", "La Banca FC", "Las Mopas", "Perros", "Atlético de Timbuktu", "La Puerquisa", "TruzAzul", "Arrestados FC", "Seleçao Canarinha", "Roger FC", "Leñadores", "Revo FC"]
  },
  {
    campus: "Campus Campestre",
    sede: "Euro Campus Campestre",
    horario: "Jornadas 1 y 9: 8:00 AM a 2:00 PM; jornadas 2 a 8: 8:00 AM a 1:00 PM",
    equipos: ["SoccerBee", "Kawashima Wanders", "Principes de la B", "Commers", "Los Demas FC", "Armadillos FC", "Jaiba Brava", "La Menor FC", "FC Internazionale Milanesa", "Juniors FC", "Capri FC", "CAFC", "Los Krikos", "Necali Moms"]
  },
  {
    campus: "Campus Montenova",
    sede: "Campus Montenova",
    horario: "7:30 PM, 8:30 PM y 9:30 PM",
    equipos: []
  }
];

export const partidosPorJornada = [
  {
    jornada: "Jornada 1",
    fecha: "Sábado 10 de agosto",
    campus: [
      {
        campus: "Campus Valle",
        sede: "Euro Campus Valle",
        horario: "8:00 AM a 2:00 PM",
        descanso: ["Leñadores", "Revo FC"],
        juegos: [
          {             hora: "08:00",             local: "Rolando City",             visitante: "Lobos FC",             marcador: "7 - 2",             estado: "Finalizado"           },
          {             hora: "09:00",             local: "Formadores FC",             visitante: "La Banca FC",             marcador: "5 - 2",             estado: "Finalizado"           },
          {             hora: "10:00",             local: "Las Mopas",             visitante: "Perros",             marcador: "8 - 1",             estado: "Finalizado"           },
          {             hora: "11:00",             local: "Atlético de Timbuktu",             visitante: "La Puerquisa",             marcador: "3 - 3",             estado: "Finalizado"           },
          {             hora: "12:00",             local: "TruzAzul",             visitante: "Roger FC",             marcador: "4 - 5",             estado: "Finalizado"           },
          {             hora: "13:00",             local: "Seleçao Canarinha",             visitante: "Arrestados FC",             marcador: "7 - 2",             estado: "Finalizado"           }
        ]
      },
      {
        campus: "Campus Campestre",
        sede: "Euro Campus Campestre",
        horario: "8:00 AM a 2:00 PM",
        descanso: [],
        juegos: [
          {             hora: "08:00",             local: "SoccerBee",             visitante: "Kawashima Wanders",             marcador: "0 - 3",             estado: "Finalizado"           },
          {             hora: "09:00",             local: "Principes de la B",             visitante: "Commers",             marcador: "3 - 11",             estado: "Finalizado"           },
          {             hora: "10:00",             local: "Los Demas FC",             visitante: "Armadillos FC",             marcador: "9 - 1",             estado: "Finalizado"           },
          {             hora: "11:00",             local: "Jaiba Brava",             visitante: "La Menor FC",             marcador: "2 - 2",             estado: "Finalizado"           },
          {             hora: "12:00",             local: "FC Internazionale Milanesa",             visitante: "Juniors FC",             marcador: "1 - 4",             estado: "Finalizado"           },
          {             hora: "13:00",             local: "Capri FC",             visitante: "CAFC",             marcador: "1 - 1",             estado: "Finalizado"           },
          {             hora: "14:00",             local: "Los Krikos",             visitante: "Necali Moms",             marcador: "3 - 6",             estado: "Finalizado"           }
        ]
      },
      {
        campus: "Campus Montenova",
        sede: "Campus Montenova",
        horario: "7:30 PM, 8:30 PM y 9:30 PM",
        descanso: ["Tiburones", "Venados FC", "Sparta Nova", "Reales SL", "Montenova FC", "Cumbres FC", "Apaches", "Rayos Montenova"],
        juegos: [
          {             hora: "19:30",             local: "Imperio FC",             visitante: "Centuriones",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "20:30",             local: "Nova United",             visitante: "Guerreros",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "21:30",             local: "Canarios FC",             visitante: "Real Nova",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      }
    ]
  },
  {
    jornada: "Jornada 2",
    fecha: "Sábado 17 de agosto",
    campus: [
      {
        campus: "Campus Valle",
        sede: "Euro Campus Valle",
        horario: "8:00 AM a 2:00 PM",
        descanso: [],
        juegos: [
          {             hora: "08:00",             local: "Rolando City",             visitante: "Atlético de Timbuktu",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "La Puerquisa",             visitante: "Las Mopas",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Revo FC",             visitante: "Leñadores",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "TruzAzul",             visitante: "La Banca FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Lobos FC",             visitante: "Formadores FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Arrestados FC",             visitante: "Roger FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "14:00",             local: "Perros",             visitante: "Seleçao Canarinha",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Campestre",
        sede: "Euro Campus Campestre",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["Necali Moms", "Los Demas FC"],
        juegos: [
          {             hora: "08:00",             local: "La Menor FC",             visitante: "SoccerBee",             marcador: "2 - 3",             estado: "Finalizado"           },
          {             hora: "09:00",             local: "CAFC",             visitante: "Commers",             marcador: "4 - 2",             estado: "Finalizado"           },
          {             hora: "10:00",             local: "Kawashima Wanders",             visitante: "Los Krikos",             marcador: "11 - 1",             estado: "Finalizado"           },
          {             hora: "11:00",             local: "Armadillos FC",             visitante: "Juniors FC",             marcador: "3 - 5",             estado: "Finalizado"           },
          {             hora: "12:00",             local: "FC Internazionale Milanesa",             visitante: "Principes de la B",             marcador: "1 - 2",             estado: "Finalizado"           },
          {             hora: "13:00",             local: "Jaiba Brava",             visitante: "Capri FC",             marcador: "1 - 3",             estado: "Finalizado"           }
        ]
      },
      {
        campus: "Campus Montenova",
        sede: "Campus Montenova",
        horario: "7:30 PM, 8:30 PM y 9:30 PM",
        descanso: ["Imperio FC", "Centuriones", "Nova United", "Reales SL", "Montenova FC", "Cumbres FC", "Apaches", "Rayos Montenova"],
        juegos: [
          {             hora: "19:30",             local: "Guerreros",             visitante: "Canarios FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "20:30",             local: "Real Nova",             visitante: "Tiburones",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "21:30",             local: "Venados FC",             visitante: "Sparta Nova",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      }
    ]
  },
  {
    jornada: "Jornada 3",
    fecha: "Sábado 24 de agosto",
    campus: [
      {
        campus: "Campus Valle",
        sede: "Euro Campus Valle",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["Rolando City", "Lobos FC"],
        juegos: [
          {             hora: "08:00",             local: "Arrestados FC",             visitante: "La Banca FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "TruzAzul",             visitante: "Las Mopas",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Revo FC",             visitante: "La Puerquisa",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Roger FC",             visitante: "Perros",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Atlético de Timbuktu",             visitante: "Seleçao Canarinha",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Formadores FC",             visitante: "Leñadores",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Campestre",
        sede: "Euro Campus Campestre",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["SoccerBee", "Kawashima Wanders"],
        juegos: [
          {             hora: "08:00",             local: "CAFC",             visitante: "Armadillos FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Commers",             visitante: "Necali Moms",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Capri FC",             visitante: "Los Demas FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Juniors FC",             visitante: "La Menor FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Los Krikos",             visitante: "FC Internazionale Milanesa",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Principes de la B",             visitante: "Jaiba Brava",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Montenova",
        sede: "Campus Montenova",
        horario: "7:30 PM, 8:30 PM y 9:30 PM",
        descanso: ["Imperio FC", "Centuriones", "Nova United", "Guerreros", "Canarios FC", "Real Nova", "Apaches", "Rayos Montenova"],
        juegos: [
          {             hora: "19:30",             local: "Tiburones",             visitante: "Venados FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "20:30",             local: "Sparta Nova",             visitante: "Reales SL",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "21:30",             local: "Montenova FC",             visitante: "Cumbres FC",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      }
    ]
  },
  {
    jornada: "Jornada 4",
    fecha: "Sábado 31 de agosto",
    campus: [
      {
        campus: "Campus Valle",
        sede: "Euro Campus Valle",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["Perros", "Seleçao Canarinha"],
        juegos: [
          {             hora: "08:00",             local: "Rolando City",             visitante: "TruzAzul",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Atlético de Timbuktu",             visitante: "Arrestados FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "La Banca FC",             visitante: "Revo FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Lobos FC",             visitante: "La Puerquisa",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Las Mopas",             visitante: "Formadores FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Leñadores",             visitante: "Roger FC",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Campestre",
        sede: "Euro Campus Campestre",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["La Menor FC", "Los Krikos"],
        juegos: [
          {             hora: "08:00",             local: "SoccerBee",             visitante: "Capri FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Armadillos FC",             visitante: "Commers",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Los Demas FC",             visitante: "Principes de la B",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Kawashima Wanders",             visitante: "Necali Moms",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "FC Internazionale Milanesa",             visitante: "CAFC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Jaiba Brava",             visitante: "Juniors FC",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Montenova",
        sede: "Campus Montenova",
        horario: "7:30 PM, 8:30 PM y 9:30 PM",
        descanso: ["Centuriones", "Nova United", "Guerreros", "Canarios FC", "Real Nova", "Tiburones", "Venados FC", "Sparta Nova"],
        juegos: [
          {             hora: "19:30",             local: "Reales SL",             visitante: "Montenova FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "20:30",             local: "Cumbres FC",             visitante: "Apaches",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "21:30",             local: "Rayos Montenova",             visitante: "Imperio FC",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      }
    ]
  },
  {
    jornada: "Jornada 5",
    fecha: "Sábado 7 de septiembre",
    campus: [
      {
        campus: "Campus Valle",
        sede: "Euro Campus Valle",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["La Puerquisa", "Las Mopas"],
        juegos: [
          {             hora: "08:00",             local: "Perros",             visitante: "Rolando City",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Lobos FC",             visitante: "Atlético de Timbuktu",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Arrestados FC",             visitante: "Revo FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "La Banca FC",             visitante: "Roger FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Seleçao Canarinha",             visitante: "Formadores FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Leñadores",             visitante: "TruzAzul",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Campestre",
        sede: "Euro Campus Campestre",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["Commers", "Jaiba Brava"],
        juegos: [
          {             hora: "08:00",             local: "SoccerBee",             visitante: "Los Krikos",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Kawashima Wanders",             visitante: "Principes de la B",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Capri FC",             visitante: "Armadillos FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Necali Moms",             visitante: "Los Demas FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "La Menor FC",             visitante: "FC Internazionale Milanesa",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "CAFC",             visitante: "Juniors FC",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Montenova",
        sede: "Campus Montenova",
        horario: "7:30 PM, 8:30 PM y 9:30 PM",
        descanso: ["Canarios FC", "Real Nova", "Tiburones", "Venados FC", "Sparta Nova", "Reales SL", "Montenova FC", "Cumbres FC"],
        juegos: [
          {             hora: "19:30",             local: "Apaches",             visitante: "Rayos Montenova",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "20:30",             local: "Imperio FC",             visitante: "Centuriones",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "21:30",             local: "Nova United",             visitante: "Guerreros",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      }
    ]
  },
  {
    jornada: "Jornada 6",
    fecha: "Sábado 14 de septiembre",
    campus: [
      {
        campus: "Campus Valle",
        sede: "Euro Campus Valle",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["TruzAzul", "Atlético de Timbuktu"],
        juegos: [
          {             hora: "08:00",             local: "Rolando City",             visitante: "Roger FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "La Puerquisa",             visitante: "La Banca FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Formadores FC",             visitante: "Revo FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Leñadores",             visitante: "Seleçao Canarinha",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Las Mopas",             visitante: "Arrestados FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Perros",             visitante: "Lobos FC",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Campestre",
        sede: "Euro Campus Campestre",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["Capri FC", "FC Internazionale Milanesa"],
        juegos: [
          {             hora: "08:00",             local: "SoccerBee",             visitante: "Juniors FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Principes de la B",             visitante: "Commers",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "La Menor FC",             visitante: "Kawashima Wanders",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Jaiba Brava",             visitante: "Los Krikos",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Los Demas FC",             visitante: "CAFC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Necali Moms",             visitante: "Armadillos FC",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Montenova",
        sede: "Campus Montenova",
        horario: "7:30 PM, 8:30 PM y 9:30 PM",
        descanso: ["Imperio FC", "Venados FC", "Sparta Nova", "Reales SL", "Montenova FC", "Cumbres FC", "Apaches", "Rayos Montenova"],
        juegos: [
          {             hora: "19:30",             local: "Centuriones",             visitante: "Nova United",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "20:30",             local: "Guerreros",             visitante: "Canarios FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "21:30",             local: "Real Nova",             visitante: "Tiburones",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      }
    ]
  },
  {
    jornada: "Jornada 7",
    fecha: "Sábado 21 de septiembre",
    campus: [
      {
        campus: "Campus Valle",
        sede: "Euro Campus Valle",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["Formadores FC", "La Banca FC"],
        juegos: [
          {             hora: "08:00",             local: "Rolando City",             visitante: "Arrestados FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Roger FC",             visitante: "Atlético de Timbuktu",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Revo FC",             visitante: "Leñadores",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Seleçao Canarinha",             visitante: "La Puerquisa",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "TruzAzul",             visitante: "Perros",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Lobos FC",             visitante: "Las Mopas",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Campestre",
        sede: "Euro Campus Campestre",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["Principes de la B", "Armadillos FC"],
        juegos: [
          {             hora: "08:00",             local: "SoccerBee",             visitante: "CAFC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Commers",             visitante: "La Menor FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Juniors FC",             visitante: "Los Krikos",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Capri FC",             visitante: "Necali Moms",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "FC Internazionale Milanesa",             visitante: "Jaiba Brava",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Kawashima Wanders",             visitante: "Los Demas FC",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Montenova",
        sede: "Campus Montenova",
        horario: "7:30 PM, 8:30 PM y 9:30 PM",
        descanso: ["Imperio FC", "Centuriones", "Nova United", "Guerreros", "Montenova FC", "Cumbres FC", "Apaches", "Rayos Montenova"],
        juegos: [
          {             hora: "19:30",             local: "Canarios FC",             visitante: "Real Nova",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "20:30",             local: "Tiburones",             visitante: "Venados FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "21:30",             local: "Sparta Nova",             visitante: "Reales SL",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      }
    ]
  },
  {
    jornada: "Jornada 8",
    fecha: "Sábado 28 de septiembre",
    campus: [
      {
        campus: "Campus Valle",
        sede: "Euro Campus Valle",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["Roger FC", "Arrestados FC"],
        juegos: [
          {             hora: "08:00",             local: "Rolando City",             visitante: "La Banca FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "La Puerquisa",             visitante: "Perros",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "TruzAzul",             visitante: "Revo FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Lobos FC",             visitante: "Leñadores",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Atlético de Timbuktu",             visitante: "Formadores FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Las Mopas",             visitante: "Seleçao Canarinha",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Campestre",
        sede: "Euro Campus Campestre",
        horario: "8:00 AM a 1:00 PM",
        descanso: ["Juniors FC", "CAFC"],
        juegos: [
          {             hora: "08:00",             local: "SoccerBee",             visitante: "Armadillos FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Jaiba Brava",             visitante: "Commers",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Los Krikos",             visitante: "Principes de la B",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Kawashima Wanders",             visitante: "Capri FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Los Demas FC",             visitante: "FC Internazionale Milanesa",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Necali Moms",             visitante: "La Menor FC",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Montenova",
        sede: "Campus Montenova",
        horario: "7:30 PM, 8:30 PM y 9:30 PM",
        descanso: ["Imperio FC", "Centuriones", "Nova United", "Guerreros", "Canarios FC", "Real Nova", "Tiburones", "Rayos Montenova"],
        juegos: [
          {             hora: "19:30",             local: "Venados FC",             visitante: "Sparta Nova",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "20:30",             local: "Reales SL",             visitante: "Montenova FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "21:30",             local: "Cumbres FC",             visitante: "Apaches",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      }
    ]
  },
  {
    jornada: "Jornada 9",
    fecha: "Sábado 5 de octubre",
    campus: [
      {
        campus: "Campus Valle",
        sede: "Euro Campus Valle",
        horario: "8:00 AM a 2:00 PM",
        descanso: [],
        juegos: [
          {             hora: "08:00",             local: "Rolando City",             visitante: "La Puerquisa",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "La Banca FC",             visitante: "Seleçao Canarinha",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "Revo FC",             visitante: "Lobos FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "Arrestados FC",             visitante: "Leñadores",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Perros",             visitante: "Formadores FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Roger FC",             visitante: "Las Mopas",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "14:00",             local: "TruzAzul",             visitante: "Atlético de Timbuktu",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      },
      {
        campus: "Campus Campestre",
        sede: "Euro Campus Campestre",
        horario: "8:00 AM a 2:00 PM",
        descanso: [],
        juegos: [
          {             hora: "08:00",             local: "SoccerBee",             visitante: "Necali Moms",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "09:00",             local: "Commers",             visitante: "Kawashima Wanders",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "10:00",             local: "La Menor FC",             visitante: "Principes de la B",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "11:00",             local: "CAFC",             visitante: "Jaiba Brava",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "12:00",             local: "Armadillos FC",             visitante: "FC Internazionale Milanesa",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "13:00",             local: "Juniors FC",             visitante: "Los Demas FC",             marcador: "Por jugar",             estado: "Programado"           },
          {             hora: "14:00",             local: "Capri FC",             visitante: "Los Krikos",             marcador: "Por jugar",             estado: "Programado"           }
        ]
      }
    ]
  }
];

export const partidos = partidosPorJornada;

export const estadisticasPorCampus = [
  {
    campus: "Campus Valle",
    sede: "Euro Campus Valle",
    tablaPosiciones: [
      {         equipo: "Las Mopas",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 8,         gc: 1,         dg: 7,         pts: 3       },
      {         equipo: "Rolando City",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 7,         gc: 2,         dg: 5,         pts: 3       },
      {         equipo: "Seleçao Canarinha",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 7,         gc: 2,         dg: 5,         pts: 3       },
      {         equipo: "Formadores FC",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 5,         gc: 2,         dg: 3,         pts: 3       },
      {         equipo: "Roger FC",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 5,         gc: 4,         dg: 1,         pts: 3       },
      {         equipo: "La Puerquisa",         pj: 1,         g: 0,         e: 1,         p: 0,         gf: 3,         gc: 3,         dg: 0,         pts: 2       },
      {         equipo: "Atlético de Timbuktu",         pj: 1,         g: 0,         e: 1,         p: 0,         gf: 3,         gc: 3,         dg: 0,         pts: 1       },
      {         equipo: "Leñadores",         pj: 0,         g: 0,         e: 0,         p: 0,         gf: 0,         gc: 0,         dg: 0,         pts: 0       },
      {         equipo: "Revo FC",         pj: 0,         g: 0,         e: 0,         p: 0,         gf: 0,         gc: 0,         dg: 0,         pts: 0       },
      {         equipo: "TruzAzul",         pj: 1,         g: 0,         e: 0,         p: 1,         gf: 4,         gc: 5,         dg: -1,         pts: 0       },
      {         equipo: "La Banca FC",         pj: 1,         g: 0,         e: 0,         p: 1,         gf: 2,         gc: 5,         dg: -3,         pts: 0       },
      {         equipo: "Arrestados FC",         pj: 1,         g: 0,         e: 0,         p: 1,         gf: 2,         gc: 7,         dg: -5,         pts: 0       },
      {         equipo: "Lobos FC",         pj: 1,         g: 0,         e: 0,         p: 1,         gf: 2,         gc: 7,         dg: -5,         pts: 0       },
      {         equipo: "Perros",         pj: 1,         g: 0,         e: 0,         p: 1,         gf: 1,         gc: 8,         dg: -7,         pts: 0       }
    ],
    goleadores: [
      {         jugador: "Iker Melendez",         equipo: "Las Mopas",         goles: 4       },
      {         jugador: "Braulio Brenes",         equipo: "Rolando City",         goles: 3       },
      {         jugador: "Donato Uribe",         equipo: "Atlético de Timbuktu",         goles: 2       },
      {         jugador: "Jesús Zambrano",         equipo: "Formadores FC",         goles: 2       },
      {         jugador: "Gregorio Garza",         equipo: "Lobos FC",         goles: 2       },
      {         jugador: "Emilio Franco",         equipo: "Puerquisa",         goles: 2       },
      {         jugador: "Fernando Sierra",         equipo: "Roger FC",         goles: 2       },
      {         jugador: "Alejandro Almana",         equipo: "Rolando City",         goles: 2       },
      {         jugador: "Sebastian Brenes",         equipo: "Rolando City",         goles: 2       },
      {         jugador: "Gerardo Pozas",         equipo: "Selecao",         goles: 2       },
      {         jugador: "Leonardo Gutierrez",         equipo: "Selecao",         goles: 2       },
      {         jugador: "Juan",         equipo: "TruzAzul",         goles: 2       },
      {         jugador: "Tadeo Contreras",         equipo: "TruzAzul",         goles: 2       },
      {         jugador: "Francisco Valdez",         equipo: "Arrestados",         goles: 1       },
      {         jugador: "Gabriel",         equipo: "Arrestados",         goles: 1       },
      {         jugador: "Pablo Mendez",         equipo: "Atlético de Timbuktu",         goles: 1       },
      {         jugador: "Amilio Arari",         equipo: "Formadores FC",         goles: 1       },
      {         jugador: "Luis Velazquez",         equipo: "Formadores FC",         goles: 1       },
      {         jugador: "Mauricio Ramirez",         equipo: "Formadores FC",         goles: 1       },
      {         jugador: "Daniel Velez",         equipo: "La Banca",         goles: 1       },
      {         jugador: "David Castillo",         equipo: "La Banca",         goles: 1       },
      {         jugador: "Andres Marroquin",         equipo: "Las Mopas",         goles: 1       },
      {         jugador: "Andrés Santiesteban",         equipo: "Las Mopas",         goles: 1       },
      {         jugador: "Christian de Lima",         equipo: "Las Mopas",         goles: 1       },
      {         jugador: "Patricio Santiestteban",         equipo: "Las Mopas",         goles: 1       },
      {         jugador: "Aldo Tijerina",         equipo: "Perros",         goles: 1       },
      {         jugador: "Javier Ceja",         equipo: "Puerquisa",         goles: 1       },
      {         jugador: "Diego Manzanarez",         equipo: "Roger FC",         goles: 1       },
      {         jugador: "Diego del Rio",         equipo: "Roger FC",         goles: 1       },
      {         jugador: "Leonardo Rivas",         equipo: "Roger FC",         goles: 1       },
      {         jugador: "Juan Angers",         equipo: "Selecao",         goles: 1       },
      {         jugador: "Roy Gomez",         equipo: "Selecao",         goles: 1       },
      {         jugador: "Sergio Soto",         equipo: "Selecao",         goles: 1       }
    ]
  },
  {
    campus: "Campus Campestre",
    sede: "Euro Campus Campestre",
    tablaPosiciones: [
      {         equipo: "Kawashima Wanders",         pj: 2,         g: 2,         e: 0,         p: 0,         gf: 14,         gc: 1,         dg: 13,         pts: 6       },
      {         equipo: "Juniors FC",         pj: 2,         g: 2,         e: 0,         p: 0,         gf: 9,         gc: 4,         dg: 5,         pts: 6       },
      {         equipo: "Capri FC",         pj: 2,         g: 1,         e: 1,         p: 0,         gf: 4,         gc: 2,         dg: 2,         pts: 5       },
      {         equipo: "CAFC",         pj: 2,         g: 1,         e: 1,         p: 0,         gf: 5,         gc: 3,         dg: 2,         pts: 4       },
      {         equipo: "Los Demas FC",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 9,         gc: 1,         dg: 8,         pts: 3       },
      {         equipo: "Commers",         pj: 2,         g: 1,         e: 0,         p: 1,         gf: 13,         gc: 7,         dg: 6,         pts: 3       },
      {         equipo: "Necali Moms",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 6,         gc: 3,         dg: 3,         pts: 3       },
      {         equipo: "SoccerBee",         pj: 2,         g: 1,         e: 0,         p: 1,         gf: 3,         gc: 5,         dg: -2,         pts: 3       },
      {         equipo: "Principes de la B",         pj: 2,         g: 1,         e: 0,         p: 1,         gf: 5,         gc: 12,         dg: -7,         pts: 3       },
      {         equipo: "La Menor FC",         pj: 2,         g: 0,         e: 1,         p: 1,         gf: 4,         gc: 5,         dg: -1,         pts: 2       },
      {         equipo: "Jaiba Brava",         pj: 2,         g: 0,         e: 1,         p: 1,         gf: 3,         gc: 5,         dg: -2,         pts: 1       },
      {         equipo: "FC Internazionale Milanesa",         pj: 2,         g: 0,         e: 0,         p: 2,         gf: 2,         gc: 6,         dg: -4,         pts: 0       },
      {         equipo: "Armadillos FC",         pj: 2,         g: 0,         e: 0,         p: 2,         gf: 4,         gc: 14,         dg: -10,         pts: 0       },
      {         equipo: "Los Krikos",         pj: 2,         g: 0,         e: 0,         p: 2,         gf: 4,         gc: 17,         dg: -13,         pts: 0       }
    ],
    goleadores: [
      {         jugador: "Guillermo Lozano",         equipo: "Commers",         goles: 5       },
      {         jugador: "David Garza",         equipo: "Juniors FC",         goles: 5       },
      {         jugador: "Gilberto Treviño",         equipo: "Kawashima Wanders",         goles: 4       },
      {         jugador: "Mauricio Gigi",         equipo: "Los Demas FC",         goles: 4       },
      {         jugador: "Eugenio Bortoni",         equipo: "CAFC",         goles: 3       },
      {         jugador: "Abel Cepeda",         equipo: "Kawashima Wanders",         goles: 3       },
      {         jugador: "Marcelo Benavides",         equipo: "Necali Moms",         goles: 3       },
      {         jugador: "Ricardo Porras",         equipo: "Capri FC",         goles: 2       },
      {         jugador: "Diego Garza",         equipo: "Commers",         goles: 2       },
      {         jugador: "Juan Sanchez",         equipo: "Commers",         goles: 2       },
      {         jugador: "Santiago Castillo",         equipo: "Commers",         goles: 2       },
      {         jugador: "Alex Castillo",         equipo: "Juniors FC",         goles: 2       },
      {         jugador: "Fernando Yarto",         equipo: "Kawashima Wanders",         goles: 2       },
      {         jugador: "Gerardo García",         equipo: "Kawashima Wanders",         goles: 2       },
      {         jugador: "Pablo Montaño",         equipo: "La Menor FC",         goles: 2       },
      {         jugador: "Andrés Rodriguez",         equipo: "Los Demas FC",         goles: 2       },
      {         jugador: "Pedro Popa",         equipo: "Los Krikos",         goles: 2       },
      {         jugador: "Gerino Ramirez",         equipo: "Príncipes",         goles: 2       },
      {         jugador: "Adrián Elizondo",         equipo: "SoccerBee",         goles: 2       },
      {         jugador: "Armando Cueto",         equipo: "Armadillos FC",         goles: 1       },
      {         jugador: "Mauricio Hernandez",         equipo: "Armadillos FC",         goles: 1       },
      {         jugador: "Raul Marquez",         equipo: "Armadillos FC",         goles: 1       },
      {         jugador: "Raúl Quintero",         equipo: "Armadillos FC",         goles: 1       },
      {         jugador: "Adrián Lozano",         equipo: "CAFC",         goles: 1       },
      {         jugador: "Marcelo Chapa",         equipo: "CAFC",         goles: 1       },
      {         jugador: "Mauricio Flores",         equipo: "Capri FC",         goles: 1       },
      {         jugador: "Raul Marquez",         equipo: "Capri FC",         goles: 1       },
      {         jugador: "Gonzalo Vargas",         equipo: "Commers",         goles: 1       },
      {         jugador: "Javier Molina",         equipo: "Commers",         goles: 1       },
      {         jugador: "Diego Mijares",         equipo: "FC Milanesa",         goles: 1       },
      {         jugador: "Gerardo Contreras",         equipo: "FC Milanesa",         goles: 1       },
      {         jugador: "Emilio Sanchez",         equipo: "Jaiba Brava",         goles: 1       },
      {         jugador: "Ramon",         equipo: "Jaiba Brava",         goles: 1       },
      {         jugador: "Albino Ramos",         equipo: "Juniors FC",         goles: 1       },
      {         jugador: "Rodrigo García",         equipo: "Juniors FC",         goles: 1       },
      {         jugador: "Jorge Furber",         equipo: "La Menor FC",         goles: 1       },
      {         jugador: "Ricardo Garza",         equipo: "La Menor FC",         goles: 1       },
      {         jugador: "Franco Torres",         equipo: "Los Demas FC",         goles: 1       },
      {         jugador: "Gil Villarreal",         equipo: "Los Demas FC",         goles: 1       },
      {         jugador: "Santiago Ganem",         equipo: "Los Demas FC",         goles: 1       },
      {         jugador: "Andrés Villarreal",         equipo: "Los Krikos",         goles: 1       },
      {         jugador: "Pablo Castillo",         equipo: "Los Krikos",         goles: 1       },
      {         jugador: "Ruben Canales",         equipo: "Necali Moms",         goles: 1       },
      {         jugador: "Sebastian Rosas",         equipo: "Necali Moms",         goles: 1       },
      {         jugador: "Claudio Pizano",         equipo: "Príncipes",         goles: 1       },
      {         jugador: "Marcelo Arce",         equipo: "Príncipes",         goles: 1       },
      {         jugador: "Patricio Sada",         equipo: "Príncipes",         goles: 1       },
      {         jugador: "Fernando Chapa",         equipo: "SoccerBee",         goles: 1       }
    ]
  },
  {
    campus: "Campus Montenova",
    sede: "Campus Montenova",
    tablaPosiciones: [
      {         equipo: "Montenova FC",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 4,         gc: 0,         dg: 4,         pts: 3       },
      {         equipo: "Cumbres FC",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 3,         gc: 1,         dg: 2,         pts: 3       },
      {         equipo: "Apaches",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 2,         gc: 0,         dg: 2,         pts: 3       },
      {         equipo: "Rayos Montenova",         pj: 1,         g: 1,         e: 0,         p: 0,         gf: 2,         gc: 1,         dg: 1,         pts: 3       },
      {         equipo: "Imperio FC",         pj: 1,         g: 0,         e: 1,         p: 0,         gf: 3,         gc: 3,         dg: 0,         pts: 1       },
      {         equipo: "Centuriones",         pj: 1,         g: 0,         e: 1,         p: 0,         gf: 3,         gc: 3,         dg: 0,         pts: 1       },
      {         equipo: "Nova United",         pj: 1,         g: 0,         e: 1,         p: 0,         gf: 1,         gc: 1,         dg: 0,         pts: 1       },
      {         equipo: "Guerreros",         pj: 1,         g: 0,         e: 1,         p: 0,         gf: 1,         gc: 1,         dg: 0,         pts: 1       },
      {         equipo: "Canarios FC",         pj: 1,         g: 0,         e: 0,         p: 1,         gf: 1,         gc: 2,         dg: -1,         pts: 0       },
      {         equipo: "Real Nova",         pj: 1,         g: 0,         e: 0,         p: 1,         gf: 1,         gc: 3,         dg: -2,         pts: 0       },
      {         equipo: "Tiburones",         pj: 1,         g: 0,         e: 0,         p: 1,         gf: 0,         gc: 2,         dg: -2,         pts: 0       },
      {         equipo: "Venados FC",         pj: 1,         g: 0,         e: 0,         p: 1,         gf: 0,         gc: 4,         dg: -4,         pts: 0       },
      {         equipo: "Sparta Nova",         pj: 0,         g: 0,         e: 0,         p: 0,         gf: 0,         gc: 0,         dg: 0,         pts: 0       },
      {         equipo: "Reales SL",         pj: 0,         g: 0,         e: 0,         p: 0,         gf: 0,         gc: 0,         dg: 0,         pts: 0       }
    ],
    goleadores: [
      {         jugador: "Eduardo M.",         equipo: "Montenova FC",         goles: 3       },
      {         jugador: "Ángel P.",         equipo: "Cumbres FC",         goles: 2       },
      {         jugador: "Sebastián R.",         equipo: "Imperio FC",         goles: 2       },
      {         jugador: "Rodrigo S.",         equipo: "Centuriones",         goles: 2       },
      {         jugador: "Gael L.",         equipo: "Apaches",         goles: 2       },
      {         jugador: "Daniel T.",         equipo: "Rayos Montenova",         goles: 2       },
      {         jugador: "Omar V.",         equipo: "Nova United",         goles: 1       },
      {         jugador: "Fabián C.",         equipo: "Guerreros",         goles: 1       }
    ]
  }
];

export const tablaPosiciones = estadisticasPorCampus[0].tablaPosiciones;
export const goleadores = estadisticasPorCampus[0].goleadores;
