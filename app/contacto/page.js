import { contact, sedes } from "@/data/leagueData";

export const metadata = {
  title: "Contacto | Spartans League",
};

export default function ContactoPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Contacto</p>
          <h1>Contacto</h1>
          <p className="lead">
            Para información de torneos, sedes o equipos, contacta a Spartans League por WhatsApp, Instagram o YouTube.
          </p>
        </div>

        <div className="grid grid-3">
          <div className="card contact-card highlight">
            <span className="badge">WhatsApp</span>
            <h3>{contact.whatsapp}</h3>
            <p>Usa este contacto para pedir información de la liga o de próximos torneos.</p>
            <a className="primary-btn" href={contact.whatsappLink} target="_blank" rel="noreferrer">
              Inscribir equipo
            </a>
          </div>
          <div className="card contact-card">
            <span className="badge">Instagram</span>
            <h3>{contact.instagram}</h3>
            <p>Consulta publicaciones, historias, fotos, videos y anuncios de Spartans League.</p>
            <a className="secondary-btn" href={contact.instagramLink} target="_blank" rel="noreferrer">
              Abrir Instagram
            </a>
          </div>
          <div className="card contact-card">
            <span className="badge">YouTube</span>
            <h3>{contact.youtube}</h3>
            <p>Ve los videos de los partidos publicados en el canal oficial de Spartans League.</p>
            <a className="secondary-btn" href={contact.youtubeLink} target="_blank" rel="noreferrer">
              Abrir YouTube
            </a>
          </div>
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
