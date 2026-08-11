import PartidosCampusTabs from "@/components/PartidosCampusTabs";

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

        <PartidosCampusTabs />
      </div>
    </section>
  );
}
