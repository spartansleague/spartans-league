import Image from "next/image";
import Link from "next/link";
import { campeones, campus, contact, equipos, partidosPorJornada, sedes } from "@/data/leagueData";

function ordenarTabla(tabla) {
  return [...tabla].sort((a, b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf);
}

function ordenarGoleadores(goleadores) {
  return [...goleadores].sort((a, b) => b.goles - a.goles);
}

function resumenCampus(item) {
  const liderTabla = ordenarTabla(item.tabla).find((equipo) => equipo.pj > 0);
  const liderGoleo = ordenarGoleadores(item.goleadores)[0];

  return {
    nombre: item.nombre,
    liderTabla,
    liderGoleo,
  };
}

export default function HomePage() {
  const totalPartidos = campus.reduce(
    (total, item) => total + item.jornadas.reduce((suma, jornada) => suma + jornada.juegos.length, 0),
    0
  );

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Spartans League Fut 7</p>
            <h1>Spartans League</h1>
            <p className="lead">
              Consulta partidos, resultados, tablas, goleadores, sedes y datos generales de la liga.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href={contact.whatsappLink} target="_blank" rel="noreferrer">
                Inscribir equipo
              </a>
              <Link className="secondary-btn" href="/partidos">
                Ver partidos
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <Image src="/spartans-logo.png" alt="Logo Spartans League" width={420} height={420} priority />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="stats-row">
            <div className="stat-box"><strong>{equipos.length}</strong><span>Equipos</span></div>
            <div className="stat-box"><strong>{sedes.length}</strong><span>Sedes</span></div>
            <div className="stat-box"><strong>{partidosPorJornada.length}</strong><span>Secciones</span></div>
            <div className="stat-box"><strong>{totalPartidos}</strong><span>Partidos</span></div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Campeones</p>
            <h2>Último campeón</h2>
          </div>
          <div className="grid grid-2">
            {campeones.map((campeon) => (
              <div className="card highlight" key={campeon.torneo}>
                <span className="badge">{campeon.campus}</span>
                <h3>{campeon.equipo}</h3>
                <p>Campeón de la {campeon.torneo}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Accesos rápidos</p>
            <h2>Información de la liga</h2>
          </div>
          <div className="grid grid-3">
            <Link className="card highlight" href="/partidos">
              <span className="badge">Partidos</span>
              <h3>Jornadas y resultados</h3>
              <p>Consulta horarios, marcadores, descansos y fases finales.</p>
            </Link>
            <Link className="card" href="/estadisticas">
              <span className="badge">Estadísticas</span>
              <h3>Tabla y goleo</h3>
              <p>Consulta posiciones y líderes de goleo por campus.</p>
            </Link>
            <Link className="card" href="/contacto">
              <span className="badge">Contacto</span>
              <h3>WhatsApp e Instagram</h3>
              <p>Contacta a Spartans League para información de torneos.</p>
            </Link>
            <a className="card" href={contact.youtubeLink} target="_blank" rel="noreferrer">
              <span className="badge">YouTube</span>
              <h3>Canal oficial</h3>
              <p>Ve videos y contenido publicado por Spartans League.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Líderes por campus</p>
            <h2>Tablas separadas por liga</h2>
          </div>
          <div className="grid grid-3">
            {campus.map(resumenCampus).map((item) => (
              <div className="card" key={item.nombre}>
                <span className="badge">{item.nombre}</span>
                <h3>{item.liderTabla ? item.liderTabla.equipo : "Por iniciar"}</h3>
                <p>
                  {item.liderTabla
                    ? `Tabla: ${item.liderTabla.pts} puntos, ${item.liderTabla.gf} GF, ${item.liderTabla.dg} DG.`
                    : "Tabla por confirmar."}
                </p>
                <p>
                  {item.liderGoleo
                    ? `Goleo: ${item.liderGoleo.jugador}, ${item.liderGoleo.goles} goles.`
                    : "Goleadores por confirmar."}
                </p>
                <Link className="secondary-btn" href="/estadisticas">Ver estadísticas</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
