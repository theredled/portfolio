import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import TimedItem from "@/app/components/TimedItem";
import {Metadata} from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: 'Compétences',
  description: 'Portfolio de Benoît Guchet - compétences',
}

export default function Skills() {
    const data = getAllData();
    const techList = data.competences.tech;

    const catLabels = {
        expertise: "Expertise",
        bon_niveau: "Bon niveau",
        bases: "Intérêt",
        outils_annexes: "Outils annexes",
        langages: "Langages",
        frameworks: "Frameworks",
        cms: "CMS",
        domaines: "Domaines",
        os: "OS",
        outils: "Outils",
        ides: "IDEs",
        divers: "Divers"
    }

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: 'Compétences'},
            ]}></Breadcrumbs>

            <h1>Compétences</h1>
            <p>{data.competences.conception_methodologie}</p>
            <ul className="skills-list">
            {['expertise', 'bon_niveau', 'bases', 'outils_annexes'].map((levelName) => (
                <li key={levelName} className={'level-section level-' + levelName}>
                    <h2>{catLabels[levelName]}</h2>
                    <ul className="section-content">
                        {Object.entries(techList[levelName]).map(([catName, list], i) =>
                            <li key={catName}>
                                <section className="tech">
                                    <strong>{catLabels[catName]}</strong>
                                    <ul className="section-content">
                                        {list.filter(name => name.charAt(0) != '*').map(name => <li>{name}</li>)}
                                    </ul>
                                </section>
                            </li>)}
                    </ul>
                </li>
            ))}
            </ul>

            <h1>Formations / Certifications</h1>
            <ul className="section-content">
                {data.misc.formation_distinctions.map(item => <li><TimedItem item={item} /></li>)}
            </ul>

            <h1>Langues</h1>
            <ul className="section-content">
                {data.misc.langues.map(({name, level}) => <li><strong>{name}</strong> : {level}</li>)}
            </ul>

        </div>
    );
}