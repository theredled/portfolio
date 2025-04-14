import Link from "next/link";
/*import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"*/
import { NavigationMenu } from "radix-ui";
import Image from "next/image";
import {getAllData} from "@/lib/getData";

export default function NavBar() {
    const data = getAllData();
    return (
        <>
            <header id="main-header">
                <Image alt="" src={'/images/header.jpg'} width="200" height="130" />
                <h1>
                    <span className="title">
                        Benoît Guchet
                    </span>
                    <span className="subtitle">
                        {data.title}
                    </span>
                </h1>
            </header>
            <nav id="navbar">
              <ul>
                  <li><Link href="/about">À propos</Link></li>
                  <li><Link href="/projects">Web</Link></li>
                  <li><Link href="/projects?category=audio">MIDI/Audio</Link></li>
                  <li><Link href="/skills">Compétences</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
              </ul>
          </nav>
            {/*<NavigationMenu.Root className="NavigationMenuRoot">
                <NavigationMenu.List className="NavigationMenuList">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="/about">
                            À propos
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="/projects">
                            Développement Web
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="/projects?category=audio">
                            Développement MIDI/Audio
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="/skills">
                            Compétences
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>*/}
        </>
    );

    /*return (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        À propos
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
              <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Développement Web
                      </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <Link href="/projects?category=audio" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Développement MIDI/Audio
                      </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <Link href="/skills" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Compétences
                      </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    );*/
}
/*
              <nav id="navbar">
                        <ul>
                            <li><Link href="/about">À propos</Link></li>
                            <li><Link href="/projects">Développement Web</Link></li>
                            <li><Link href="/projects?category=audio">Développement MIDI/Audio</Link></li>
                            <li><Link href="/skills">Compétences</Link></li>
                        </ul>
                    </nav>
        */