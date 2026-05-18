Archivos para subir a GitHub

Sube estos archivos al repositorio spartansleague/spartans-league respetando las mismas carpetas:

- .npmrc
- package.json
- package-lock.json
- app/page.js
- app/torneos/page.js
- components/CampusStatsTabs.js
- data/leagueData.js

Que corrige:

- La pagina de inicio muestra 28 equipos.
- Torneos muestra Campus Valle con sus 14 equipos.
- Torneos muestra horarios por campus.
- Partidos muestra los horarios y equipos de Campus Valle desde data/leagueData.js.
- La pagina ya no falla si Campus Valle todavia no tiene goleadores.
- Vercel usa el registry publico de npm y versiones fijas de Next/React.

Despues de subirlos a GitHub, Vercel deberia iniciar un deploy automaticamente.
