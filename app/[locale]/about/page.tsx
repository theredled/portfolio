
import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import TimedItem from "@/app/components/TimedItem";
import {Metadata} from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { Markup, Interweave } from 'interweave';
import { polyfill } from 'interweave-ssr';
import {getDocumentContent} from "@/lib/getServerData";


const data = getAllData();
const pageTitle = 'À propos';
export const metadata: Metadata = {
  title: pageTitle
}


export default async function About() {
    polyfill();


    const presentation: string = await getDocumentContent("presentation");

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: pageTitle}
            ]}></Breadcrumbs>
            <main id="main">
                <h1>{pageTitle}</h1>
                <section>
                    <div className="section-content">
                        <div><Interweave disableFilters={true} content={presentation} /></div>
                    </div>
                </section>
                <section className="tech important">
                    <h2>Expertises principales</h2>
                    <ul className="section-content">
                        {data.a_propos.competences_techniques.map((name: string, i: number) => <li key={i}>{name}</li>)}
                    </ul>
                </section>
                <section className="tech important">
                    <h2>Appétence pour</h2>
                    <ul className="section-content">
                        {data.a_propos.learning.map((name: string, i: number) => <li key={i}>{name}</li>)}
                    </ul>
                </section>

                <h2>Parcours</h2>
                <ul className="section-content">
                    {data.parcours.map((job: string) => <li>
                        <TimedItem item={job} />
                    </li>)}
                </ul>
            </main>
        </div>
    );
}