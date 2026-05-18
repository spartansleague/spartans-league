# Archivos para subir a GitHub

Sube estos archivos a tu repositorio `spartansleague/spartans-league` respetando exactamente las mismas rutas:

- `.npmrc`
- `package.json`
- `package-lock.json`
- `app/page.js`
- `app/torneos/page.js`
- `components/CampusStatsTabs.js`
- `data/leagueData.js`

El archivo principal con los datos de los Excel es:

`data/leagueData.js`

## Que contiene esta actualizacion

- Campus Valle: Jornada 1 cargada con 6 partidos finalizados.
- Revo FC y Leñadores aparecen como descanso en Jornada 1, con 0 partidos jugados.
- Campus Campestre: Jornadas 1 y 2 cargadas con 13 partidos finalizados.
- Tabla de posiciones actualizada desde los Excel.
- Goleadores actualizados desde los Excel.
- La pagina de inicio queda con 28 equipos.
- La pagina de inicio muestra lider de tabla y lider de goleo separados por campus.
- La pagina de inicio muestra 184 partidos maximos: 56 de Valle, 56 de Campestre y 72 de capacidad maxima para el campus pendiente.
- La pagina de torneos muestra equipos, horarios, resultados y goleadores por campus.
- Campus Montenova queda sin resultados ni goleadores porque todavia no arranca.

## Como cambiar el numero de partidos de Inicio

1. En GitHub abre `app/page.js`.
2. Busca esta linea:

`const totalPartidosTemporada = 56 + 56 + 72;`

3. Cambia esos numeros por los que necesites.
4. Guarda el archivo con `Commit changes`.

Ejemplo: si quieres contar solo Valle y Campestre, cambia la linea a:

`const totalPartidosTemporada = 56 + 56;`

## Nota importante de Campus Valle

En el Excel, los resultados y la tabla indican estos ultimos dos partidos de Jornada 1:

- TruzAzul 4 - 5 Roger FC
- Seleçao Canarinha 7 - 2 Arrestados FC

Use esos cruces porque son los que cuadran con los resultados y la tabla de posiciones.
