"use client";

import { useState } from "react";
import { estadisticasPorCampus } from "@/data/leagueData";

function numero(valor) {
  return Number(valor) || 0;
}

function ordenarTabla(tabla) {
  return [...tabla].sort((a, b) => {
    if (numero(b.pts) !== numero(a.pts)) return numero(b.pts) - numero(a.pts);
    if (numero(b.dg) !== numero(a.dg)) return numero(b.dg) - numero(a.dg);
    if (numero(b.gf) !== numero(a.gf)) return numero(b.gf) - numero(a.gf);
    return a.equipo.localeCompare(b.equipo, "es");
  });
}

function ordenarGoleadores(lista) {
  return [...lista].sort((a, b) => {
    if (numero(b.goles) !== numero(a.goles)) return numero(b.goles) - numero(a.goles);
    return a.jugador.localeCompare(b.jugador, "es");
  });
}

export default function CampusStatsTabs() {
  const [indice, setIndice] = useState(0);
  const campus = estadisticasPorCampus[indice];
  const tabla = ordenarTabla(campus.tablaPosiciones);
  const goleadores = ordenarGoleadores(campus.goleadores);

  return (
    <div>
      <div className="campus-tabs">
        {estadisticasPorCampus.map((item, i) => (
          <button
            key={item.campus}
            className={`campus-tab ${i === indice ? "active" : ""}`}
            onClick={() => setIndice(i)}
            type="button"
          >
            {item.campus}
          </button>
        ))}
      </div>

      <div className="campus-summary">
        <div>
          <span className="badge">{campus.campus}</span>
          <h2>{campus.sede}</h2>
          <p className="lead">Tabla de posiciones y líderes de goleo.</p>
        </div>
        <div className="campus-counts">
          <div className="stat-box small-stat">
            <strong>{tabla.length}</strong>
            <span>Equipos</span>
          </div>
          <div className="stat-box small-stat">
            <strong>{goleadores.length}</strong>
            <span>Goleadores</span>
          </div>
        </div>
      </div>

      <div className="matchday">
        <div className="matchday-title">
          <h2>Tabla de posiciones</h2>
          <span className="badge">{campus.campus}</span>
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
              {tabla.length === 0 ? (
                <tr><td colSpan="10">Tabla por confirmar.</td></tr>
              ) : (
                tabla.map((equipo, i) => (
                  <tr key={equipo.equipo}>
                    <td>{i + 1}</td>
                    <td><strong>{equipo.equipo}</strong></td>
                    <td>{equipo.pj}</td>
                    <td>{equipo.g}</td>
                    <td>{equipo.e}</td>
                    <td>{equipo.p}</td>
                    <td>{equipo.gf}</td>
                    <td>{equipo.gc}</td>
                    <td>{equipo.dg}</td>
                    <td><strong>{equipo.pts}</strong></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="matchday">
        <div className="matchday-title">
          <h2>Líderes de goleo</h2>
          <span className="badge">{campus.campus}</span>
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
              {goleadores.length === 0 ? (
                <tr><td colSpan="4">Goleadores por confirmar.</td></tr>
              ) : (
                goleadores.map((jugador, i) => (
                  <tr key={`${jugador.jugador}-${jugador.equipo}`}>
                    <td>{i + 1}</td>
                    <td><strong>{jugador.jugador}</strong></td>
                    <td>{jugador.equipo}</td>
                    <td><strong>{jugador.goles}</strong></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
