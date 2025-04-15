'use client'
import Link from "next/link";
import Image from "next/image";
import SortIcon from '@mui/icons-material/Sort';
import {useEffect, useRef, useState} from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import {Backdrop} from "@mui/material";
import { useI18n, useScopedI18n, useCurrentLocale } from '@/locales/client'
import {tData} from "@/lib/getData";

export default  function NavBar(params: object) {
    const data: object = params.data;
    const locale = useCurrentLocale();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuTogglerRef = useRef<HTMLButtonElement>(null);
    const t =  useI18n()

    useEffect(() => {
        const listener = (e: Event) => {
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
                    <li><Link href="/about">{t('about')}</Link></li>
                    <li><Link href="/projects">Projets Web</Link></li>
                    <li><Link href="/projects?category=audio">Projets MIDI/Audio</Link></li>
                    <li><Link href="/skills">Compétences</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

        </>
    );
}