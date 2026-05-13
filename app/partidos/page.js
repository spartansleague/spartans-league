import { partidosPorJornada } from "@/data/leagueData";

export const metadata = {
  title: "Partidos | Spartans League",
};

export default function PartidosPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-head compact-section-head">
          <p className="eyebrow">Partidos y resultados</p>
          <h1>Jornadas</h1>
          <p className="lead">
            Consulta cada jornada por campus, horarios, equipos, marcadores y descansos.
          </p>
        </div>

        <div className="jornadas-list">
          {partidosPorJornada.map((jornada) => (
            <section className="jornada-group" key={jornada.jornada}>
              <div className="jornada-header">
                <div>
                  <h2>{jornada.jornada}</h2>
                  <p className="note">{jornada.fecha}</p>
                </div>
                <span className="badge">{jornada.campus.length} campus</span>
              </div>

              <div className="campus-match-grid">
                {jornada.campus.map((campus) => (
                  <article className="campus-match-card" key={`${jornada.jornada}-${campus.campus}`}>
                    <div className="campus-match-head">
                      <div>
                        <p className="eyebrow small-eyebrow">{campus.sede}</p>
                        <h3>{jornada.jornada} de {campus.campus}</h3>
                      </div>
                      <span className="mini-badge">{campus.horario}</span>
                    </div>

                    <div className="bye-box">
                      <strong>Descanso:</strong>{" "}
                      {campus.descanso.length > 0 ? campus.descanso.join(", ") : "Sin descanso"}
                    </div>

                    <div className="table-wrap compact-table-wrap">
                      <table className="compact-table">
                        <thead>
                          <tr>
                            <th>Hora</th>
                            <th>Local</th>
                            <th>Visitante</th>
                            <th>Marcador</th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          {campus.juegos.map((juego) => (
                            <tr key={`${jornada.jornada}-${campus.campus}-${juego.hora}-${juego.local}`}>
                              <td>{juego.hora}</td>
                              <td>{juego.local}</td>
                              <td>{juego.visitante}</td>
                              <td><strong>{juego.marcador}</strong></td>
                              <td><span className="status compact-status">{juego.estado}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
