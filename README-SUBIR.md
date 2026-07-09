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

Si GitHub te pregunta si quieres reemplazar archivos existentes, acepta el reemplazo.

## Que contiene esta actualizacion

- Campus Campestre queda limpio para nueva temporada:
  - 0 equipos
  - 0 partidos/resultados viejos
  - 0 tabla de posiciones
  - 0 goleadores
- Campus Valle conserva sus datos actuales:
  - 14 equipos
  - 14 equipos en tabla
  - 66 goleadores
- Campus Montenova queda sin estadisticas porque no tiene temporada activa.
- Todos los campus tienen 12 secciones en Partidos:
  - Jornada 1 a Jornada 9
  - Cuartos de final
  - Semifinal
  - Final
- La pagina de inicio agrega una seccion de campeon:
  - Krikos FC
  - Campeon de la Spartans League Campus Campestre Abril - Julio 2026
- El codigo se dejo mas sencillo para editar:
  - Los datos principales estan en `data/leagueData.js`.
  - Las paginas usan listas simples.
  - Las tablas y goleadores se ordenan automaticamente desde los datos.

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

Cuando agregues resultados nuevos, la pagina de Estadisticas ordena la tabla por puntos, diferencia de goles y goles a favor. Tambien ordena goleadores de mayor a menor.
