'use client'
import Link from "next/link";
import HouseIcon from '@mui/icons-material/House';
import { useI18n } from '@/locales/client';
import {useContext} from "react";
import {BreadcrumbsContext, useBreadcrumbs} from "@/app/components/BreadcrumbsContext"; // Import de la fonction de traduction

export default function Breadcrumbs({  }: {  }) {
    const t = useI18n(); // Initialisation de la fonction de traduction
    const {breadcrumbsList} = useBreadcrumbs();
    console.log('Breadcrumbs', breadcrumbsList);

    return (
        <ul className="breadcrumbs">
            <li className="home">
                <Link href="/">
                    <HouseIcon sx={{ fontSize: 19 }}>{t('home')}</HouseIcon>
                </Link>
            </li>
            {breadcrumbsList.map(({ label, url }: { label: string, url: string }, i: number, { length }: { length: number }) => (
                <li className={i === length - 1 ? "last" : ''} key={i}>
                    {url ? <Link href={url}>{label}</Link> : <span>{label}</span>}
                </li>
            ))}
        </ul>
    );
}