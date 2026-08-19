# Archivos para subir a GitHub

Sube el contenido de esta carpeta a tu repositorio `spartansleague/spartans-league`, respetando las mismas rutas.

Importante: si usas el ZIP marcado como `subir-directo`, al descomprimirlo deben aparecer `app`, `components`, `data`, `public`, `package.json` y los demas archivos directamente. No subas una carpeta extra encima de esos archivos.

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

- Campus Valle actualizado desde el link de Drive el 19 de agosto de 2026:
  - 14 equipos
  - 41 partidos finalizados
  - 14 equipos en tabla
  - 113 goleadores
  - Lider de tabla: Roger FC con 19 puntos
  - Lider de goleo: Mauricio Santos con 11 goles
- Campus Campestre actualizado desde el link de Drive el 19 de agosto de 2026:
  - 14 equipos
  - 14 partidos finalizados
  - 14 equipos en tabla
  - 49 goleadores
  - Lider de tabla: Kawashima Wonders con 6 puntos
  - Lider de goleo: Diego Aguirre con 3 goles
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
