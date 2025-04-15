'use client'
import Link from "next/link";
import Image from "next/image";
import SortIcon from '@mui/icons-material/Sort';
import {useEffect, useRef, useState} from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import {Backdrop} from "@mui/material";
import {useI18n, useScopedI18n, useCurrentLocale, useChangeLocale} from '@/locales/client'
import {tData} from "@/lib/getData";

export default  function NavBar(params: any) {
    const data: Record<any, any> = params.data;
    const locale = useCurrentLocale();
    const localesList: string[] = ['fr', 'en'];
    const [menuOpen, setMenuOpen] = useState(false);
    const menuTogglerRef = useRef<HTMLButtonElement>(null);
    const t =  useI18n()
    const changeLocale = useChangeLocale();

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

    const nextLocale = localesList.filter((name: string) => locale != name).at(0) || 'fr';

    return (
        <>
            <header id="main-header">
                <Image alt="" src={'/images/header.jpg'} width="200" height="130"/>
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

                <button id="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)} ref={menuTogglerRef}>
                    <SortIcon fontSize="large">Menu</SortIcon>
                </button>
                <ul>
                    <li><Link className="link" href="/about">{t('about')}</Link></li>
                    <li><Link className="link" href="/projects">{t('navbar.projects.web')}</Link></li>
                    <li><Link className="link" href="/projects?category=audio">{t('navbar.projects.audio')}</Link></li>
                    <li><Link className="link" href="/skills">{t('skills')}</Link></li>
                    <li><Link className="link" href="/contact">{t('contact')}</Link></li>
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