import Link from "next/link";
import { contact } from "@/data/leagueData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Spartans League</h3>
          <p>Spartans League Fut 7</p>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href={contact.whatsappLink} target="_blank" rel="noreferrer">WhatsApp: {contact.whatsapp}</a>
          <a href={contact.instagramLink} target="_blank" rel="noreferrer">Instagram: {contact.instagram}</a>
          <a href={contact.youtubeLink} target="_blank" rel="noreferrer">YouTube: {contact.youtube}</a>
        </div>
        <div>
          <h4>Secciones</h4>
          <Link href="/partidos">Partidos</Link>
          <Link href="/estadisticas">Estadísticas</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
