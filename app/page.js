import Image from "next/image";
import Link from "next/link";
import { contact, equipos, estadisticasPorCampus, partidosPorJornada, sedes } from "@/data/leagueData";

function ordenarTablaPosiciones(tabla) {
  return [...tabla].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.equipo.localeCompare(b.equipo);
  });
}

function ordenarGoleadores(goleadores) {
  return [...goleadores].sort((a, b) => {
    if (b.goles !== a.goles) return b.goles - a.goles;
    return a.jugador.localeCompare(b.jugador);
  });
}

function formatearLideresGoleo(goleadores) {
  if (goleadores.length === 0) {
    return null;
  }

  const maxGoles = goleadores[0].goles;
  const lideres = goleadores.filter((jugador) => jugador.goles === maxGoles);
  const nombres = lideres.map((jugador) => `${jugador.jugador} de ${jugador.equipo}`);

  if (nombres.length === 1) {
    return `${nombres[0]}, ${maxGoles} goles.`;
  }

  return `${nombres.slice(0, -1).join(", ")} y ${nombres[nombres.length - 1]}, ${maxGoles} goles.`;
}

export default function HomePage() {
  const totalPartidosTemporada = 56 + 56;
  const resumenCampus = estadisticasPorCampus.map((campus) => {
    const tablaOrdenada = ordenarTablaPosiciones(campus.tablaPosiciones);
    const goleadoresOrdenados = ordenarGoleadores(campus.goleadores);
    const liderTabla = tablaOrdenada.find((equipo) => equipo.pj > 0);
    const lideresGoleo = formatearLideresGoleo(goleadoresOrdenados);

    return {
      ...campus,
      liderTabla,
      lideresGoleo,
    };
  });

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
            <div className="stat-box"><strong>{totalPartidosTemporada}</strong><span>Partidos</span></div>
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
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Líderes por campus</p>
            <h2>Tablas separadas por liga</h2>
          </div>
          <div className="grid grid-3">
            {resumenCampus.map((campus) => (
              <div className="card" key={campus.campus}>
                <span className="badge">{campus.campus}</span>
                <h3>{campus.liderTabla ? campus.liderTabla.equipo : "Por iniciar"}</h3>
                <p>
                  {campus.liderTabla
                    ? `Líder de tabla con ${campus.liderTabla.pts} puntos, ${campus.liderTabla.gf} goles a favor y diferencia de ${campus.liderTabla.dg}.`
                    : "La tabla se activará cuando se registre el primer resultado de este campus."}
                </p>
                <p>
                  {campus.lideresGoleo
                    ? `Goleo: ${campus.lideresGoleo}`
                    : "Aún no hay goleadores registrados."}
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
