import CampusStatsTabs from "@/components/CampusStatsTabs";

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
            Consulta la tabla de posiciones y los líderes de goleo por campus.
          </p>
        </div>

        <CampusStatsTabs />
      </div>
    </section>
  );
}
