"use client";

import { useMemo, useState } from "react";
import { estadisticasPorCampus } from "@/data/leagueData";

function toNumber(value) {
  return Number(value) || 0;
}

function getDiferenciaGoles(fila) {
  if (fila.dg !== undefined && fila.dg !== null) {
    return toNumber(fila.dg);
  }

  return toNumber(fila.gf) - toNumber(fila.gc);
}

function ordenarTablaPosiciones(tabla) {
  return [...tabla].sort((a, b) => {
    const puntos = toNumber(b.pts) - toNumber(a.pts);
    if (puntos !== 0) return puntos;

    const diferencia = getDiferenciaGoles(b) - getDiferenciaGoles(a);
    if (diferencia !== 0) return diferencia;

    const golesFavor = toNumber(b.gf) - toNumber(a.gf);
    if (golesFavor !== 0) return golesFavor;

    const golesContra = toNumber(a.gc) - toNumber(b.gc);
    if (golesContra !== 0) return golesContra;

    return a.equipo.localeCompare(b.equipo, "es");
  });
}

function ordenarGoleadores(goleadores) {
  return [...goleadores].sort((a, b) => {
    const goles = toNumber(b.goles) - toNumber(a.goles);
    if (goles !== 0) return goles;

    const equipo = a.equipo.localeCompare(b.equipo, "es");
    if (equipo !== 0) return equipo;

    return a.jugador.localeCompare(b.jugador, "es");
  });
}

export default function CampusStatsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const campusActivo = estadisticasPorCampus[activeIndex];

  const tablaOrdenada = useMemo(
    () => ordenarTablaPosiciones(campusActivo.tablaPosiciones),
    [campusActivo.tablaPosiciones]
  );

  const goleadoresOrdenados = useMemo(
    () => ordenarGoleadores(campusActivo.goleadores),
    [campusActivo.goleadores]
  );

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
              {tablaOrdenada.map((fila, index) => (
                <tr key={`${campusActivo.campus}-${fila.equipo}`}>
                  <td>{index + 1}</td>
                  <td><strong>{fila.equipo}</strong></td>
                  <td>{fila.pj}</td>
                  <td>{fila.g}</td>
                  <td>{fila.e}</td>
                  <td>{fila.p}</td>
                  <td>{fila.gf}</td>
                  <td>{fila.gc}</td>
                  <td>{getDiferenciaGoles(fila)}</td>
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
              {goleadoresOrdenados.length > 0 ? (
                goleadoresOrdenados.map((jugador, index) => (
                  <tr key={`${campusActivo.campus}-${jugador.jugador}-${jugador.equipo}`}>
                    <td>{index + 1}</td>
                    <td><strong>{jugador.jugador}</strong></td>
                    <td>{jugador.equipo}</td>
                    <td><strong>{jugador.goles}</strong></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Aún no hay goleadores registrados para este campus.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
