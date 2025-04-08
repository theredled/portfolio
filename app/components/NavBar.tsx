import Link from "next/link";

export default function NavBar() {
    return (
      <nav id="navbar">
          <ul>
              <li><Link href="/about">À propos</Link></li>
              <li><Link href="/projects">Développement Web</Link></li>
              <li><Link href="/projects?category=audio">Développement MIDI/Audio</Link></li>
              <li><Link href="/skills">Compétences</Link></li>
          </ul>
      </nav>
    );

}