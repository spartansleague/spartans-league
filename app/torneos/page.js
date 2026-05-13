import { torneos, equipos, contact } from "@/data/leagueData";

export const metadata = {
  title: "Torneos | Spartans League",
};

export default function TorneosPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Torneos</p>
          <h1>Spartans League Fut 7</h1>
          <p className="lead">
            Consulta la información general del torneo, sedes disponibles y equipos cargados como ejemplo.
          </p>
        </div>

        <div className="grid grid-2">
          {torneos.map((torneo) => (
            <div className="card highlight" key={torneo.nombre}>
              <span className="badge">{torneo.estado}</span>
              <h3>{torneo.nombre}</h3>
              <p><strong>Categoría:</strong> {torneo.categoria}</p>
              <p><strong>Equipos:</strong> {torneo.equipos}</p>
              <p><strong>Sedes:</strong> {torneo.sedes}</p>
              <p><strong>Inicio:</strong> {torneo.inicio}</p>
              <div className="actions-row">
                <a className="primary-btn" href={contact.whatsappLink} target="_blank" rel="noreferrer">Inscribir equipo</a>
              </div>
            </div>
          ))}
          <div className="card">
            <h3>Equipos cargados</h3>
            <p>Estos equipos son datos de ejemplo. Puedes cambiarlos manualmente en el archivo de datos.</p>
            <div className="team-list">
              {equipos.map((equipo) => (
                <div className="team-pill" key={equipo}>{equipo}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
