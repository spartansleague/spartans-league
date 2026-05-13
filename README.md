# Spartans League Web

Proyecto web para Spartans League hecho con Next.js para publicarse en Vercel.

## Cómo editar la información

La información de ejemplo está en:

`data/leagueData.js`

Ahí puedes cambiar:

- WhatsApp
- Instagram
- sedes
- torneos
- equipos
- partidos
- resultados
- tabla de posiciones
- líderes de goleo

## Cómo correrlo en tu computadora

1. Instala Node.js desde https://nodejs.org/
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Abre la terminal y escribe:

```bash
npm install
npm run dev
```

4. Abre http://localhost:3000 en tu navegador.

## Cómo publicar en Vercel

1. Sube este proyecto a GitHub.
2. Entra a https://vercel.com/.
3. Crea cuenta e inicia sesión.
4. Elige Add New Project.
5. Importa el repositorio de GitHub.
6. Presiona Deploy.

Vercel generará una liga temporal tipo `nombre.vercel.app`. Después puedes conectar `spartansleague.com` desde Settings > Domains.


Actualización: horarios por campus agregados. Valle y Campestre: jornadas 1 y 9 de 8:00 AM a 2:00 PM; jornadas 2 a 8 de 8:00 AM a 1:00 PM. Montenova: 8 jornadas con horarios 7:30 PM, 8:30 PM y 9:30 PM.


## YouTube
El canal oficial se puede editar en `data/leagueData.js`, dentro de `youtubeLink`.
