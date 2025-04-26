import type {Metadata, ResolvingMetadata} from 'next'

import {getAllData, tData} from "@/src/lib/getServerData";
import TimedItem from "@/src/components/TimedItem";
import {Interweave} from 'interweave';
import {polyfill} from 'interweave-ssr';
import {getDocumentContent} from "@/src/lib/getServerData";
import {getI18n} from "@/src/locales/server";
import CardsScroller from "@/src/components/CardsScroller";
import {DataListItem} from "@/src/components/DataListItem";
import Link from "next/link";
import FastForwardIcon from '@mui/icons-material/FastForward';
import {BreadcrumbsSetter} from "@/src/context/BreadcrumbsSetter";
import {ITimedItemData} from "@/src/types";
import {IPotentialI18nData} from "@/src/types/I18n";
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
                {data.a_propos.competences_techniques.map((name: IPotentialI18nData, i: number) =>
                    <DataListItem key={i} name={name}></DataListItem>
                )}
            </ul>
        </section>
        <section className="tech important secondary-skills">
            <h2>{t('appetence.pour')}</h2>
            <ul>
                {data.a_propos.learning.map((name: IPotentialI18nData, i: number) =>
                    <DataListItem key={i} name={name}></DataListItem>
                )}
                <li className="see-more"><Link href={'/skills'}>
                    {t('see.more')}<FastForwardIcon></FastForwardIcon>
                    <FastForwardIcon></FastForwardIcon>
                    <FastForwardIcon></FastForwardIcon>
                </Link></li>
            </ul>

        </section>
        </>;

    return (
        <>
            <BreadcrumbsSetter list={[{label: t('about')}]} ></BreadcrumbsSetter>

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
                        {data.parcours.map((job: ITimedItemData) =>
                            <TimedItem item={job}/>
                       )}
                    </ul>
                </div>
            </CardsScroller>
        </>
    );
}