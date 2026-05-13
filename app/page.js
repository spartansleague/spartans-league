import Image from "next/image";
import Link from "next/link";
import { contact, equipos, partidosPorJornada, sedes, tablaPosiciones, goleadores } from "@/data/leagueData";

export default function HomePage() {
  const totalPartidos = partidosPorJornada.reduce((total, jornada) => total + jornada.campus.reduce((campusTotal, campus) => campusTotal + campus.juegos.length, 0), 0);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Spartans League Fut 7</p>
            <h1>Spartans League</h1>
            <p className="lead">
              Consulta jornadas, resultados, tabla de posiciones, líderes de goleo, sedes y datos generales de la liga.
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
            <div className="stat-box"><strong>{partidosPorJornada.length}</strong><span>Jornadas</span></div>
            <div className="stat-box"><strong>{totalPartidos}</strong><span>Partidos</span></div>
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
              <p>Consulta los partidos programados, horarios, sedes y marcadores.</p>
            </Link>
            <Link className="card" href="/estadisticas">
              <span className="badge">Estadísticas</span>
              <h3>Tabla y goleo</h3>
              <p>Consulta la tabla de posiciones y los líderes de goleo del torneo.</p>
            </Link>
            <Link className="card" href="/contacto">
              <span className="badge">Contacto</span>
              <h3>WhatsApp e Instagram</h3>
              <p>Contacta a Spartans League para información de torneos y sedes.</p>
            </Link>
            <a className="card highlight" href={contact.youtubeLink} target="_blank" rel="noreferrer">
              <span className="badge">YouTube</span>
              <h3>Videos de partidos</h3>
              <p>Abre el canal donde se suben los videos de los partidos.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container grid grid-2">
          <div className="card">
            <span className="badge">Tabla</span>
            <h3>Líder actual</h3>
            <p>{tablaPosiciones[0].equipo} aparece primero en la tabla de posiciones con {tablaPosiciones[0].pts} puntos.</p>
            <Link className="secondary-btn" href="/estadisticas">Ver estadísticas</Link>
          </div>
          <div className="card">
            <span className="badge">Goleo</span>
            <h3>Líder de goleo</h3>
            <p>{goleadores[0].jugador} de {goleadores[0].equipo} aparece como líder de goleo con {goleadores[0].goles} goles.</p>
            <Link className="secondary-btn" href="/estadisticas">Ver líderes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
