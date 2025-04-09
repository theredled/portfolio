import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import TimedItem from "@/app/components/TimedItem";
import {Metadata} from "next";

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
            <Head>
                <title>Compétences</title>
            </Head>
            <h1>Compétences</h1>
            <p>{data.competences.conception_methodologie}</p>
            <ul className="skills-list">
            {['expertise', 'bon_niveau', 'bases', 'outils_annexes'].map((levelName) => (
                <li key={levelName}>
                    <h2>{catLabels[levelName]}</h2>
                    <ul>
                        {Object.entries(techList[levelName]).map(([catName, list], i) =>
                            <li key={catName}>
                                <section className="tech">
                                    <strong>{catLabels[catName]}</strong>
                                    <ul>
                                        {list.map(name => <li>{name}</li>)}
                                    </ul>
                                </section>
                            </li>)}
                    </ul>
                </li>
            ))}
            </ul>

            <h2>Formations / Distinctions</h2>
            <ul>
                {data.misc.formation_distinctions.map(item => <li><TimedItem item={item} /></li>)}
            </ul>

            <h2>Langues</h2>
            <ul>
                {data.misc.langues.map(({name, level}) => <li><strong>{name}</strong> : {level}</li>)}
            </ul>

        </div>
    );
}