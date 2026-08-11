# Archivos para subir a GitHub

Sube el contenido de esta carpeta a tu repositorio `spartansleague/spartans-league`, respetando las mismas rutas.

## Carpetas que debes subir

- `app`
- `components`
- `data`
- `public`

## Archivos que debes subir

- `package.json`
- `package-lock.json`
- `jsconfig.json`
- `resumen_conversion.json`

Si GitHub pregunta si quieres reemplazar archivos existentes, acepta el reemplazo.

## Que contiene esta actualizacion

- Campus Valle actualizado desde Google Sheets:
  - 14 equipos
  - 38 partidos finalizados
  - 14 equipos en tabla
  - 103 goleadores
  - Lider de tabla: Roger FC con 17 puntos
  - Lider de goleo: Mauricio Santos con 11 goles
- Campus Campestre actualizado desde Google Sheets:
  - 14 equipos
  - 6 partidos finalizados
  - 14 equipos en tabla
  - 28 goleadores
  - Lider de tabla: Caguameros FC con 3 puntos
  - Lider de goleo: Horacio Perez con 3 goles
- Campus Montenova sigue sin datos.
- Todos los campus tienen 12 secciones en Partidos:
  - Jornada 1 a Jornada 9
  - Cuartos de final
  - Semifinal
  - Final

## Nota de revision

El conversor solo marca como finalizados los partidos que tienen marcador en la hoja `Equipos (Back-End)`.
Si un partido ya afecta tabla/goleadores pero su marcador no esta en esa matriz, puede quedar listado como pendiente en `resumen_conversion.json`.

## Donde editar despues

Para cambiar equipos, partidos, tablas o goleadores, abre:

`data/leagueData.js`

Busca el campus que quieras editar:

- `Campus Valle`
- `Campus Campestre`
- `Campus Montenova`

Cada campus tiene estas partes:

- `equipos`
- `tabla`
- `goleadores`
- `jornadas`
