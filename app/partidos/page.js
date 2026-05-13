import { partidos } from "@/data/leagueData";

export const metadata = {
  title: "Partidos | Spartans League",
};

export default function PartidosPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Partidos y resultados</p>
          <h1>Jornadas</h1>
          <p className="lead">
            Aquí se muestran jornadas, horarios, sedes, equipos y marcadores.
          </p>
        </div>

        {partidos.map((jornada) => (
          <div className="matchday" key={jornada.jornada}>
            <div className="matchday-title">
              <div>
                <h2>{jornada.jornada}</h2>
                <p className="note">{jornada.fecha}</p>
              </div>
              <span className="badge">{jornada.juegos.length} partidos</span>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Hora</th>
                    <th>Sede</th>
                    <th>Local</th>
                    <th>Visitante</th>
                    <th>Marcador</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {jornada.juegos.map((juego) => (
                    <tr key={`${jornada.jornada}-${juego.hora}-${juego.local}`}>
                      <td>{juego.hora}</td>
                      <td>{juego.sede}</td>
                      <td>{juego.local}</td>
                      <td>{juego.visitante}</td>
                      <td><strong>{juego.marcador}</strong></td>
                      <td><span className="status">{juego.estado}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
