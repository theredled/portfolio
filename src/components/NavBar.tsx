'use client'
import Link from "next/link";
import Image from "next/image";
import SortIcon from '@mui/icons-material/Sort';
import {useEffect, useRef, useState} from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import {Backdrop} from "@mui/material";
import {useI18n, useScopedI18n, useCurrentLocale, useChangeLocale} from '@/locales/client'
import {tData} from "@/src/lib/getData";
import {usePathname} from "next/navigation";

export default  function NavBar(params: any) {
    const data: Record<any, any> = params.data;
    const locale = useCurrentLocale();
    const currentPathName = usePathname();
    const localesList: string[] = ['fr', 'en'];
    const [menuOpen, setMenuOpen] = useState(false);
    const menuTogglerRef = useRef<HTMLButtonElement>(null);
    const t =  useI18n()
    const changeLocale = useChangeLocale();

    //-- menu mobile
    useEffect(() => {
        const listener = (e: Event) => {

            if (!(e.currentTarget instanceof Node))
                return;
            const isOpeningMenu = e.currentTarget == menuTogglerRef.current
                || menuTogglerRef.current?.contains(e.currentTarget)
            ;

            if (menuOpen && !isOpeningMenu)
                setMenuOpen(false);
        };

        document.addEventListener("click", listener);
        return () => {
            document.removeEventListener("click", listener);
        };
    }, [menuOpen, setMenuOpen, menuTogglerRef]);

    const nextLocale: any = localesList.filter((name: string) => locale != name).at(0) || 'fr';

    const navLinks = [
        {label: t('about'), url: '/about'},
        //{label: t('navbar.projects.web'), url: '/projects'},
        //{label: t('navbar.projects.audio'), url: '/projects-category/audio'},
        {label: t('projects'), url: '/projects'},
        {label: t('skills'), url: '/skills'},
        {label: t('contact'), url: '/contact'}
    ];

    return (
        <>
            <header id="main-header">
                <Link href="/portfolio/public"><Image alt="" src={'/images/header.jpg'} width="150" height="100"/></Link>
                <h1>
                    <span className="title">
                        Benoît Guchet
                    </span>
                    <span className="subtitle">
                        {tData(data.title)}
                    </span>
                </h1>
            </header>

            <Backdrop open={menuOpen}></Backdrop>
            <nav id="navbar" className={menuOpen ? 'open' : ''} >

                <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)} ref={menuTogglerRef}>
                    <SortIcon fontSize="large">Menu</SortIcon>
                </button>
                <ul>
                    {navLinks.map(({label, url}: {label: string, url: string}, i: number) => {
                        const isActive = (currentPathName === `/${locale}${url}`);
                        return (
                            <li><Link className={"link" + (isActive ? " active" : '')} href={url}>
                                <span>{label}</span>
                            </Link></li>
                        )
                    })}
                    <li id="locale-menu">
                        <button className="link" onClick={(e: any) => changeLocale(nextLocale)}>
                            {nextLocale}
                        </button>
                    </li>
                </ul>
            </nav>

        </>
    );
}