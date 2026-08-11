"use client";

import { useState } from "react";
import { partidosPorJornada } from "@/data/leagueData";

const ordenCampus = ["Campus Valle", "Campus Campestre", "Campus Montenova"];

function getJornadasPorCampus(nombreCampus) {
  return partidosPorJornada
    .map((jornada) => {
      const campus = jornada.campus.find((item) => item.campus === nombreCampus);
      if (!campus) return null;
      return { ...campus, jornada: jornada.jornada, fecha: jornada.fecha };
    })
    .filter(Boolean);
}

export default function PartidosCampusTabs() {
  const [indice, setIndice] = useState(0);
  const campusNombre = ordenCampus[indice];
  const jornadas = getJornadasPorCampus(campusNombre);
  const totalPartidos = jornadas.reduce((total, jornada) => total + jornada.juegos.length, 0);

  return (
    <div>
      <div className="campus-tabs">
        {ordenCampus.map((campus, i) => (
          <button
            key={campus}
            type="button"
            className={`campus-tab ${i === indice ? "active" : ""}`}
            onClick={() => setIndice(i)}
          >
            {campus}
          </button>
        ))}
      </div>

      <div className="campus-summary partidos-summary">
        <div>
          <span className="badge">{campusNombre}</span>
          <h2>Partidos por jornada</h2>
          <p className="lead">Horarios, descansos, marcadores y fases finales.</p>
        </div>
        <div className="campus-counts">
          <div className="stat-box small-stat">
            <strong>{jornadas.length}</strong>
            <span>Secciones</span>
          </div>
          <div className="stat-box small-stat">
            <strong>{totalPartidos}</strong>
            <span>Partidos</span>
          </div>
        </div>
      </div>

      <div className="jornadas-list">
        {jornadas.map((jornada) => (
          <section className="jornada-group" key={`${campusNombre}-${jornada.jornada}`}>
            <div className="jornada-header">
              <div>
                <h2>{jornada.jornada} de {campusNombre}</h2>
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
                  {jornada.juegos.length === 0 ? (
                    <tr><td colSpan="5">Partidos por confirmar.</td></tr>
                  ) : (
                    jornada.juegos.map((juego, i) => (
                      <tr key={`${jornada.jornada}-${i}`}>
                        <td>{juego.hora}</td>
                        <td>{juego.local}</td>
                        <td>{juego.visitante}</td>
                        <td><strong>{juego.marcador}</strong></td>
                        <td><span className="status compact-status">{juego.estado}</span></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
