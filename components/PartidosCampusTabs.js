"use client";

import { useMemo, useState } from "react";
import { partidosPorJornada } from "@/data/leagueData";

export default function PartidosCampusTabs() {
  const campusData = useMemo(() => {
    const ordenCampus = ["Campus Valle", "Campus Campestre", "Campus Montenova"];

    return ordenCampus
      .map((campusNombre) => {
        const jornadas = partidosPorJornada
          .map((jornada) => {
            const campus = jornada.campus.find((item) => item.campus === campusNombre);
            if (!campus) return null;

            return {
              jornada: jornada.jornada,
              fecha: jornada.fecha,
              ...campus,
            };
          })
          .filter(Boolean);

        return {
          campus: campusNombre,
          jornadas,
        };
      })
      .filter((campus) => campus.jornadas.length > 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const campusActivo = campusData[activeIndex];

  const totalPartidos = campusActivo.jornadas.reduce(
    (total, jornada) => total + jornada.juegos.length,
    0
  );

  return (
    <div>
      <div className="campus-tabs" role="tablist" aria-label="Partidos por campus">
        {campusData.map((campus, index) => (
          <button
            key={campus.campus}
            type="button"
            className={`campus-tab ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={activeIndex === index}
          >
            {campus.campus}
          </button>
        ))}
      </div>

      <div className="campus-summary partidos-summary">
        <div>
          <span className="badge">{campusActivo.campus}</span>
          <h2>Partidos por jornada</h2>
          <p className="lead">
            Consulta los horarios, resultados y descansos de este campus.
          </p>
        </div>
        <div className="campus-counts">
          <div className="stat-box small-stat">
            <strong>{campusActivo.jornadas.length}</strong>
            <span>Jornadas</span>
          </div>
          <div className="stat-box small-stat">
            <strong>{totalPartidos}</strong>
            <span>Partidos</span>
          </div>
        </div>
      </div>

      <div className="jornadas-list">
        {campusActivo.jornadas.map((jornada) => (
          <section className="jornada-group" key={`${campusActivo.campus}-${jornada.jornada}`}>
            <div className="jornada-header">
              <div>
                <h2>{jornada.jornada} de {jornada.campus}</h2>
                <p className="note">{jornada.fecha} · {jornada.sede}</p>
              </div>
              <span className="mini-badge">{jornada.horario}</span>
            </div>

            <div className="bye-box">
              <strong>Descanso:</strong>{" "}
              {jornada.descanso.length > 0 ? jornada.descanso.join(", ") : "Sin descanso"}
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
                  {jornada.juegos.map((juego) => (
                    <tr key={`${campusActivo.campus}-${jornada.jornada}-${juego.hora}-${juego.local}`}>
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
          </section>
        ))}
      </div>
    </div>
  );
}
