import { sedes } from "@/data/leagueData";

export const metadata = {
  title: "Quiénes somos | Spartans League",
};

export default function QuienesSomosPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Quiénes somos</p>
          <h1>Spartans League</h1>
          <p className="lead">
            Spartans League Fut 7 es una liga deportiva enfocada en organizar torneos, jornadas, resultados y estadísticas para equipos participantes.
          </p>
        </div>

        <div className="grid grid-2">
          <div className="card highlight">
            <h3>Información de la liga</h3>
            <p>
              En esta página se pueden consultar partidos, resultados, tabla de posiciones, líderes de goleo y sedes disponibles. La información se actualiza manualmente según el avance de cada jornada.
            </p>
          </div>
          <div className="card">
            <h3>Uso de la página</h3>
            <p>
              La página es informativa. Los equipos pueden revisar lo que pasa en la liga y contactar a Spartans League por WhatsApp o Instagram.
            </p>
          </div>
        </div>

        <div className="page-section">
          <div className="section-head">
            <p className="eyebrow">Sedes</p>
            <h2>Campus disponibles</h2>
          </div>
          <div className="grid grid-3">
            {sedes.map((sede) => (
              <div className="card" key={sede.nombre}>
                <span className="badge">{sede.estado}</span>
                <h3>{sede.nombre}</h3>
                <p>{sede.liga}</p>
                <p>{sede.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
