import type {Metadata, ResolvingMetadata} from 'next'

import Image from "next/image";
import Head from "next/head";
import {getAllData, tData} from "@/lib/getServerData";
import TimedItem from "@/app/components/TimedItem";
//import {Metadata} from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import {Markup, Interweave} from 'interweave';
import {polyfill} from 'interweave-ssr';
import {getDocumentContent} from "@/lib/getServerData";
import {getI18n} from "@/locales/server";
import CardsScroller from "@/app/components/CardsScroller";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: t('about')
    }
}

export default async function About() {
    polyfill();
    const data = getAllData();

    const t = await getI18n();

    const presentation: string = await getDocumentContent("presentation");

    const techSection = <>
        <section className="tech important primary-skills">
            <h2>{t('expertises.principales')}</h2>
            <ul>
                {data.a_propos.competences_techniques.map((name: string, i: number) => <li
                    key={i}>{tData(name)}</li>)}
            </ul>
        </section>
        <section className="tech important secondary-skills">
            <h2>{t('appetence.pour')}</h2>
            <ul>
                {data.a_propos.learning.map((name: string, i: number) => <li
                    key={i}>{tData(name)}</li>)}
            </ul>
        </section>
        </>;

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: t('about')}
            ]}></Breadcrumbs>
            <main id="main">
                <CardsScroller>
                    <div className="card">
                        <h1 className="card-title">{t('about')}</h1>
                        <div className="about-grid">
                            <section className="presentation">
                                <div className="">
                                    <div><Interweave disableFilters={true} content={presentation}/></div>
                                </div>
                            </section>
                            <div className="no-mobile">
                                {techSection}
                            </div>
                        </div>
                    </div>
                    <div className="card mobile-only">
                        <h2 className="card-title mobile-only">{t('Tech')}</h2>
                        {techSection}
                    </div>
                    <div className="card">
                        <h2 className="card-title">{t('parcours')}</h2>
                        <ul className="section-content">
                            {data.parcours.map((job: string) => <li>
                                <TimedItem item={job}/>
                            </li>)}
                        </ul>
                    </div>
                </CardsScroller>
            </main>
        </div>
    );
}