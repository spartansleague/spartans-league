import { contact, sedes } from "@/data/leagueData";

export const metadata = {
  title: "Contacto | Spartans League",
};

const contactos = [
  {
    nombre: "WhatsApp",
    usuario: contact.whatsapp,
    texto: "Pide información de la liga o de próximos torneos.",
    boton: "Abrir WhatsApp",
    link: contact.whatsappLink,
  },
  {
    nombre: "Instagram",
    usuario: contact.instagram,
    texto: "Consulta publicaciones, historias, fotos, videos y anuncios.",
    boton: "Abrir Instagram",
    link: contact.instagramLink,
  },
  {
    nombre: "YouTube",
    usuario: contact.youtube,
    texto: "Ve videos de partidos publicados por Spartans League.",
    boton: "Abrir YouTube",
    link: contact.youtubeLink,
  },
];

export default function ContactoPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Contacto</p>
          <h1>Contacto</h1>
          <p className="lead">
            Para información de torneos, sedes o equipos, contacta a Spartans League.
          </p>
        </div>

        <div className="grid grid-3">
          {contactos.map((item) => (
            <div className="card contact-card" key={item.nombre}>
              <span className="badge">{item.nombre}</span>
              <h3>{item.usuario}</h3>
              <p>{item.texto}</p>
              <a className="secondary-btn" href={item.link} target="_blank" rel="noreferrer">
                {item.boton}
              </a>
            </div>
          ))}
        </div>

        <div className="page-section">
          <div className="section-head">
            <p className="eyebrow">Sedes</p>
            <h2>Campus</h2>
          </div>
          <div className="grid grid-3">
            {sedes.map((sede) => (
              <div className="card" key={sede.nombre}>
                <h3>{sede.nombre}</h3>
                <p>{sede.estado}</p>
                <p>{sede.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
