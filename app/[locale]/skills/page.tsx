import Image from "next/image";
import Head from "next/head";
//import {getAllData} from "@/lib/getData";
import TimedItem from "@/src/components/TimedItem";
import {Metadata} from "next";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import {getI18n} from "@/src/locales/server";
import {tData, getAllData} from "@/src/lib/getServerData";
import CardsScroller from "@/src/components/CardsScroller";
import {BreadcrumbsSetter} from "@/src/context/BreadcrumbsSetter";
import {ITimedItemData} from "@/src/types";
import {DataListItem} from "@/src/components/DataListItem";
import {IPotentialI18nData} from "@/src/types/I18n";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: t('skills')
    }
}

export default async function Skills() {
    const data = getAllData();
    const t: any = await getI18n();
    const techList: Record<any, any> = data.competences.tech;

    return (
        <>
            <BreadcrumbsSetter list={[{label: t('skills')}]}></BreadcrumbsSetter>

            <CardsScroller>
                <div className="card">
                    <h1 className="card-title">{t('skills')}</h1>
                    <p>{tData(data.competences.conception_methodologie)}</p>
                    <ul className="skills-list">
                        {['expertise', 'bon_niveau', 'bases', 'devops', 'outils_annexes'].map((levelName: string) => (
                            <li key={levelName} className={'level-section level-' + levelName}>
                                <h2>{t(levelName)}</h2>
                                <ul className="section-content">
                                    {Object.keys(techList[levelName])
                                            .filter((catName: string): boolean => catName.charAt(0) != '*')
                                            .map((catName: string) =>
                                        <li key={catName} className="tech-category">
                                            <section className="tech">
                                                <strong>{t(catName)}</strong>
                                                <ul className="">
                                                    {techList[levelName][catName].map((name: IPotentialI18nData) =>
                                                        <DataListItem name={name}></DataListItem>
                                                    )}
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
                        {data.misc.formation_distinctions.map((item: ITimedItemData) =>
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