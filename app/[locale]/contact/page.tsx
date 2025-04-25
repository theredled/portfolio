import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/src/lib/getData";
import TimedItem from "@/src/components/TimedItem";
import {Metadata} from "next";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlbumIcon from '@mui/icons-material/Album';
import {getI18n} from "@/locales/server";
import {BreadcrumbsSetter} from "@/src/context/BreadcrumbsSetter";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
      title: t('contact.me')
    }
}

export default async function Contact() {
    const data = getAllData();
    const t = await getI18n();

    return (
        <>
            <BreadcrumbsSetter list={[
                {label: t('contact')},
            ]}></BreadcrumbsSetter>

            <h1>{t('contact.me')}</h1>
            <div className="section-content">
                <p className="text-with-icon"><EmailIcon>Email :</EmailIcon> benoit.guchet<b className="hidden">baokdkkd</b>@gmail.com</p>
                <p className="text-with-icon"><CallIcon>Téléphone :</CallIcon> (+33)671<b className="hidden">985</b>093314</p>
            </div>
            <section>
                <h2>{t('reseaux')}</h2>
                <div className="section-content">
                    <p className="text-with-icon"><GitHubIcon></GitHubIcon>
                        <a href="https://github.com/theredled">Github</a></p>
                    <p className="text-with-icon"><LinkedInIcon></LinkedInIcon>
                        <a href="https://www.linkedin.com/in/benoitguchet/">Linkedin</a></p>
                    <p className="text-with-icon"><LinkIcon></LinkIcon>
                        <a href="https://www.linkedin.com/in/benoitguchet/">Stack Overflow</a></p>
                </div>
            </section>
            <section className="music-section">
                <h2>{t('musique')}</h2>
                <div className="section-content">
                    <ul>
                        <li className="text-with-icon"><MusicVideoIcon></MusicVideoIcon>
                            <a href="https://linktr.ee/fairytalesinyoghourt">Fairy Tales in Yoghourt</a></li>
                        <li className="text-with-icon"><SkipNextIcon></SkipNextIcon>
                            <a href="https://linktr.ee/benoitguchet">Benoît Guchet</a></li>
                        <li className="text-with-icon"><AlbumIcon></AlbumIcon>
                            <a href="https://lnk.bio/dearmarch">Dear March</a></li>
                        <li className="text-with-icon"><MusicNoteIcon></MusicNoteIcon>
                            <a href="https://linktr.ee/Vain_balles">Vain</a></li>
                        <li className="text-with-icon"><MusicVideoIcon></MusicVideoIcon>
                            <a href="https://www.instagram.com/karaoklm.band/">Karaoklm</a></li>
                    </ul>
                </div>
            </section>
        </>
    );
}