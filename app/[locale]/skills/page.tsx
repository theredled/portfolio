import Image from "next/image";
import Head from "next/head";
//import {getAllData} from "@/lib/getData";
import TimedItem from "@/app/components/TimedItem";
import {Metadata} from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import {getI18n} from "@/locales/server";
import {tData, getAllData} from "@/lib/getServerData";
import CardsScroller from "@/app/components/CardsScroller";
import {BreadcrumbsSetter} from "@/app/components/BreadcrumbsSetter";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: t('skills')
    }
}

export default async function Skills() {
    const data = getAllData();
    const t: any = await getI18n();
    const techList = data.competences.tech;

    return (
        <>
            <BreadcrumbsSetter list={[{label: t('skills')}]}></BreadcrumbsSetter>

            <CardsScroller>
                <div className="card">
                    <h1 className="card-title">{t('skills')}</h1>
                    <p>{tData(data.competences.conception_methodologie)}</p>
                    <ul className="skills-list">
                        {['expertise', 'bon_niveau', 'bases', 'outils_annexes'].map((levelName: string) => (
                            <li key={levelName} className={'level-section level-' + levelName}>
                                <h2>{t(levelName)}</h2>
                                <ul className="section-content">
                                    {Object.entries(techList[levelName]).map(([catName, list]: any, i: number) =>
                                        <li key={catName} className="tech-category">
                                            <section className="tech">
                                                <strong>{t(catName)}</strong>
                                                <ul className="">
                                                    {list.filter((name: string) => name.charAt(0) != '*')
                                                        .map((name: string) => <li>{name}</li>)}
                                                </ul>
                                            </section>
                                        </li>)}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card">
                    <h2 className="card-title">{t('formations')}</h2>
                    <ul className="section-content">
                        {data.misc.formation_distinctions.map((item: Record<any, any>) =>
                            <TimedItem item={item}/>
                        )}
                    </ul>
                </div>
                <div className="card">

                    <h2 className="card-title">{t('languages')}</h2>
                    <ul className="section-content">
                        {data.misc.langues.map(({name, level}: { name: string, level: string }) => <li>
                            <strong>{tData(name)}</strong> : {tData(level)}</li>)}
                    </ul>
                </div>

            </CardsScroller>
        </>
    );
}