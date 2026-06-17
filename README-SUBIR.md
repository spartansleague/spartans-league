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

- Campus Valle: Jornadas 1, 2 y 3 cargadas con 18 partidos finalizados.
- Revo FC y Leñadores aparecen como descanso en Jornada 1. El partido Revo FC vs Leñadores de Jornada 2 sigue sin resultado en el Google Sheet descargado.
- Campus Valle ahora incluye 66 goleadores. El lider de goleo es Patricio González de TruzAzul con 7 goles.
- Campus Campestre: 49 partidos finalizados cargados.
- En Campus Campestre Jornada 8, Los Krikos vs Principes de la B sigue sin resultado en el Google Sheet descargado.
- En Campus Campestre Jornada 9, solo CAFC vs Los Krikos aparece finalizado; los otros partidos siguen sin resultado en el Google Sheet descargado.
- En Campus Campestre Jornada 3, los cruces Commers vs Capri FC y Los Demas FC vs Necali Moms se tomaron del backend/tabla porque cuadran con goles y posiciones.
- El horario de Campus Campestre se actualizo desde la hoja `Horario` del Google Sheet, incluyendo los cambios de Jornadas 4 a 9.
- Campus Campestre ahora incluye 108 goleadores. El lider de goleo es David Garza de Juniors FC con 11 goles.
- El lider de tabla en Campus Campestre es Necali Moms con 17 puntos.
- Tabla de posiciones actualizada desde los Google Sheets descargados.
- Goleadores actualizados desde los Google Sheets descargados.
- La pagina de inicio queda con 28 equipos.
- La pagina de inicio muestra lider de tabla y lider de goleo separados por campus.
- La pagina de inicio muestra 112 partidos: 56 de Valle y 56 de Campestre. Montenova no se suma hasta que sea oficial.
- La pagina de torneos muestra equipos, horarios, resultados y goleadores por campus.
- Campus Montenova queda sin resultados ni goleadores porque todavia no arranca.

## Como cambiar el numero de partidos de Inicio

1. En GitHub abre `app/page.js`.
2. Busca esta linea:

`const totalPartidosTemporada = 56 + 56;`

3. Cambia esos numeros por los que necesites.
4. Guarda el archivo con `Commit changes`.

Ejemplo: cuando Montenova sea oficial y quieras sumar 72 partidos mas, cambia la linea a:

`const totalPartidosTemporada = 56 + 56 + 72;`

## Nota importante de Campus Valle

En el Excel, los resultados y la tabla indican estos ultimos dos partidos de Jornada 1:

- TruzAzul 4 - 5 Roger FC
- Seleçao Canarinha 7 - 2 Arrestados FC

Use esos cruces porque son los que cuadran con los resultados y la tabla de posiciones.
