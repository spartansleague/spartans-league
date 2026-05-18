import { torneos, equipos, equiposPorCampus, partidosPorJornada, contact } from "@/data/leagueData";

export const metadata = {
  title: "Torneos | Spartans League",
};

function getHorarioCampus(campusNombre) {
  const horarios = partidosPorJornada
    .map((jornada) => {
      const campus = jornada.campus.find((item) => item.campus === campusNombre);
      return campus ? `${jornada.jornada}: ${campus.horario}` : null;
    })
    .filter(Boolean);

  return horarios.length > 0 ? horarios.join(" · ") : "Horario por confirmar.";
}

export default function TorneosPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Torneos</p>
          <h1>Spartans League Fut 7</h1>
          <p className="lead">
            Consulta la información general del torneo, sedes disponibles y equipos registrados por campus.
          </p>
        </div>

        <div className="grid grid-2">
          {torneos.map((torneo) => (
            <div className="card highlight" key={torneo.nombre}>
              <span className="badge">{torneo.estado}</span>
              <h3>{torneo.nombre}</h3>
              <p><strong>Categoría:</strong> {torneo.categoria}</p>
              <p><strong>Equipos actuales:</strong> {equipos.length}</p>
              <p><strong>Sedes:</strong> {torneo.sedes}</p>
              <p><strong>Inicio:</strong> {torneo.inicio}</p>
              <div className="actions-row">
                <a className="primary-btn" href={contact.whatsappLink} target="_blank" rel="noreferrer">Inscribir equipo</a>
              </div>
            </div>
          ))}

          {equiposPorCampus.map((grupo) => (
            <div className="card" key={grupo.campus}>
              <span className="badge">{grupo.campus}</span>
              <h3>Equipos ({grupo.equipos.length})</h3>
              <p>{grupo.sede}</p>
              <p className="note">{grupo.horario || getHorarioCampus(grupo.campus)}</p>
              {grupo.equipos.length > 0 ? (
                <div className="team-list">
                  {grupo.equipos.map((equipo) => (
                    <div className="team-pill" key={`${grupo.campus}-${equipo}`}>{equipo}</div>
                  ))}
                </div>
              ) : (
                <p className="note">Equipos por confirmar.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
