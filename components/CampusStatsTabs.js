"use client";

import { useState } from "react";
import { estadisticasPorCampus } from "@/data/leagueData";

export default function CampusStatsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const campusActivo = estadisticasPorCampus[activeIndex];

  return (
    <div>
      <div className="campus-tabs" role="tablist" aria-label="Estadísticas por campus">
        {estadisticasPorCampus.map((campus, index) => (
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

      <div className="campus-summary">
        <div>
          <span className="badge">{campusActivo.campus}</span>
          <h2>{campusActivo.sede}</h2>
          <p className="lead">Tabla de posiciones y líderes de goleo de esta liga.</p>
        </div>
        <div className="campus-counts">
          <div className="stat-box small-stat">
            <strong>{campusActivo.tablaPosiciones.length}</strong>
            <span>Equipos</span>
          </div>
          <div className="stat-box small-stat">
            <strong>{campusActivo.goleadores.length}</strong>
            <span>Goleadores</span>
          </div>
        </div>
      </div>

      <div className="matchday">
        <div className="matchday-title">
          <h2>Tabla de posiciones</h2>
          <span className="badge">{campusActivo.campus}</span>
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
              {campusActivo.tablaPosiciones.map((fila, index) => (
                <tr key={`${campusActivo.campus}-${fila.equipo}`}>
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
          <span className="badge">{campusActivo.campus}</span>
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
              {campusActivo.goleadores.map((jugador, index) => (
                <tr key={`${campusActivo.campus}-${jugador.jugador}-${jugador.equipo}`}>
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
  );
}
