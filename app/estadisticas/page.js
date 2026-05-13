import { tablaPosiciones, goleadores } from "@/data/leagueData";

export const metadata = {
  title: "Estadísticas | Spartans League",
};

export default function EstadisticasPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Estadísticas</p>
          <h1>Tabla y goleo</h1>
          <p className="lead">
            Consulta la tabla de posiciones y los líderes de goleo. Los datos actuales son de ejemplo.
          </p>
        </div>

        <div className="matchday">
          <div className="matchday-title">
            <h2>Tabla de posiciones</h2>
            <span className="badge">14 equipos</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Equipo</th>
                  <th>PJ</th>
                  <th>G</th>
                  <th>E</th>
                  <th>P</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>DG</th>
                  <th>PTS</th>
                </tr>
              </thead>
              <tbody>
                {tablaPosiciones.map((fila, index) => (
                  <tr key={fila.equipo}>
                    <td>{index + 1}</td>
                    <td><strong>{fila.equipo}</strong></td>
                    <td>{fila.pj}</td>
                    <td>{fila.g}</td>
                    <td>{fila.e}</td>
                    <td>{fila.p}</td>
                    <td>{fila.gf}</td>
                    <td>{fila.gc}</td>
                    <td>{fila.dg}</td>
                    <td><strong>{fila.pts}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="matchday">
          <div className="matchday-title">
            <h2>Líderes de goleo</h2>
            <span className="badge">Datos de ejemplo</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Jugador</th>
                  <th>Equipo</th>
                  <th>Goles</th>
                </tr>
              </thead>
              <tbody>
                {goleadores.map((jugador, index) => (
                  <tr key={`${jugador.jugador}-${jugador.equipo}`}>
                    <td>{index + 1}</td>
                    <td><strong>{jugador.jugador}</strong></td>
                    <td>{jugador.equipo}</td>
                    <td><strong>{jugador.goles}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
