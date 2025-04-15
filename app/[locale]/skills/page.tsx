import Image from "next/image";
import Head from "next/head";
//import {getAllData} from "@/lib/getData";
import TimedItem from "@/app/components/TimedItem";
import {Metadata} from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import {getI18n} from "@/locales/server";
import {tData, getAllData} from "@/lib/getServerData";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
      title: t('skills')
    }
}
export default async function Skills() {
    const data = getAllData();
    const t = await getI18n();
    const techList = data.competences.tech;

    /*const catLabels: Record<any, any> = {
        expertise: "Expertise",
        bon_niveau: "Pratique régulière",
        bases: "Pratique ponctuelle",
        outils_annexes: "Outils annexes",
        langages: "Langages",
        frameworks: "Frameworks",
        cms: "CMS",
        domaines: "Domaines",
        os: "OS",
        outils: "Outils",
        ides: "IDEs",
        divers: "Divers"
    }*/

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: t('skills')},
            ]}></Breadcrumbs>

            <h1>{t('skills')}</h1>
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

            <h1>{t('formations')}</h1>
            <ul className="section-content">
                {data.misc.formation_distinctions.map((item: Record<any, any>) => <li><TimedItem item={item} /></li>)}
            </ul>

            <h1>{t('languages')}</h1>
            <ul className="section-content">
                {data.misc.langues.map(({name, level}: {name: string, level: string}) => <li><strong>{tData(name)}</strong> : {tData(level)}</li>)}
            </ul>

        </div>
    );
}