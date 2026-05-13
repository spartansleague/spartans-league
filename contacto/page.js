import { contact, sedes } from "@/data/leagueData";

export const metadata = {
  title: "Contacto | Spartans League",
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="contact-icon-svg">
      <path d="M16.02 4C9.4 4 4.02 9.38 4.02 16c0 2.12.56 4.2 1.62 6.02L4 28l6.12-1.6A11.9 11.9 0 0 0 16.02 28c6.62 0 12-5.38 12-12s-5.38-12-12-12Zm0 21.94c-1.8 0-3.56-.49-5.1-1.42l-.37-.22-3.63.95.97-3.54-.24-.36A9.9 9.9 0 0 1 6.08 16c0-5.48 4.46-9.94 9.94-9.94s9.94 4.46 9.94 9.94-4.46 9.94-9.94 9.94Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="contact-icon-svg">
      <path d="M21.7 4H10.3A6.31 6.31 0 0 0 4 10.3v11.4A6.31 6.31 0 0 0 10.3 28h11.4a6.31 6.31 0 0 0 6.3-6.3V10.3A6.31 6.31 0 0 0 21.7 4Zm4.03 17.7a4.04 4.04 0 0 1-4.03 4.03H10.3a4.04 4.04 0 0 1-4.03-4.03V10.3a4.04 4.04 0 0 1 4.03-4.03h11.4a4.04 4.04 0 0 1 4.03 4.03v11.4ZM16 9.84A6.16 6.16 0 1 0 16 22.16 6.16 6.16 0 0 0 16 9.84Zm0 10.05A3.89 3.89 0 1 1 16 12.1a3.89 3.89 0 0 1 0 7.78Zm7.93-10.31a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="contact-icon-svg">
      <path d="M29.3 9.7a3.4 3.4 0 0 0-2.39-2.4C24.8 6.73 16.36 6.73 16 6.73s-8.8 0-10.91.57A3.4 3.4 0 0 0 2.7 9.7C2.13 11.81 2.13 16 2.13 16s0 4.19.57 6.3a3.4 3.4 0 0 0 2.39 2.4c2.11.57 10.55.57 10.91.57s8.8 0 10.91-.57a3.4 3.4 0 0 0 2.39-2.4c.57-2.11.57-6.3.57-6.3s0-4.19-.57-6.3ZM13.24 20.03v-8.06L20.55 16l-7.31 4.03Z" />
    </svg>
  );
}

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
          <div className="card contact-card highlight contact-card-with-icon">
            <div className="contact-icon">
              <WhatsAppIcon />
            </div>
            <span className="badge">WhatsApp</span>
            <h3>{contact.whatsapp}</h3>
            <p>Usa este contacto para pedir información de la liga o de próximos torneos.</p>
            <a className="secondary-btn" href={contact.whatsappLink} target="_blank" rel="noreferrer">
              Abrir WhatsApp
            </a>
          </div>
          <div className="card contact-card contact-card-with-icon">
            <div className="contact-icon">
              <InstagramIcon />
            </div>
            <span className="badge">Instagram</span>
            <h3>{contact.instagram}</h3>
            <p>Consulta publicaciones, historias, fotos, videos y anuncios de Spartans League.</p>
            <a className="secondary-btn" href={contact.instagramLink} target="_blank" rel="noreferrer">
              Abrir Instagram
            </a>
          </div>
          <div className="card contact-card contact-card-with-icon">
            <div className="contact-icon">
              <YouTubeIcon />
            </div>
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
