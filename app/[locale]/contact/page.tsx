import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import TimedItem from "@/app/components/TimedItem";
import {Metadata} from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';


export const metadata: Metadata = {
  title: 'Contact'
}

const pageTitle = "Me contacter";
export default function Contact() {
    const data = getAllData();

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: pageTitle},
            ]}></Breadcrumbs>

            <h1>{pageTitle}</h1>
            <div className="section-content">
                <p><strong>Email</strong> : benoit.guchet<b className="hidden">baokdkkd</b>@gmail.com</p>
                <p><strong>Téléphone</strong> : (+33)671<b className="hidden">985</b>093314</p>
            </div>
            <section>
                <h2>Réseaux</h2>
                <div className="section-content">
                    <p className="text-with-icon"><GitHubIcon></GitHubIcon>
                        <a href="https://github.com/theredled">Github</a></p>
                    <p className="text-with-icon"><LinkedInIcon></LinkedInIcon>
                        <a href="https://www.linkedin.com/in/benoitguchet/">Linkedin</a></p>
                </div>
            </section>            <section>
                <h2>Musique</h2>
                <div className="section-content">
                    <ul>
                        <li className="text-with-icon"><MusicVideoIcon></MusicVideoIcon>
                            <a href="https://linktr.ee/fairytalesinyoghourt">Fairy Tales in Yoghourt</a></li>
                        <li className="text-with-icon"><MusicVideoIcon></MusicVideoIcon>
                            <a href="https://linktr.ee/benoitguchet">Benoît Guchet</a></li>
                        <li className="text-with-icon"><MusicVideoIcon></MusicVideoIcon>
                            <a href="https://lnk.bio/dearmarch">Dear March</a></li>
                        <li className="text-with-icon"><MusicVideoIcon></MusicVideoIcon>
                            <a href="https://linktr.ee/Vain_balles">Vain</a></li>
                        <li className="text-with-icon"><MusicVideoIcon></MusicVideoIcon>
                            <a href="https://www.instagram.com/karaoklm.band/">Karaoklm</a></li>
                    </ul>
                </div>
            </section>

        </div>
    );
}