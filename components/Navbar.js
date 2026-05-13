import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/leagueData";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/torneos", label: "Torneos" },
  { href: "/partidos", label: "Partidos" },
  { href: "/estadisticas", label: "Estadísticas" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link href="/" className="brand" aria-label="Spartans League inicio">
          <Image src="/spartans-logo.png" alt="Spartans League" width={64} height={64} priority />
          <span>Spartans League</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <a className="nav-cta" href={contact.whatsappLink} target="_blank" rel="noreferrer">
          Inscribir equipo
        </a>
      </nav>
    </header>
  );
}
