import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import TimedItem from "@/app/components/TimedItem";

export default function About() {
    const data = getAllData();
    return (
        <div>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content="Portfolio de Benoît Guchet - {data.title}"/>
            </Head>
            <h1>A propos</h1>
            <p>{data.a_propos.presentation}</p>
            <p>{data.a_propos.profil}</p>
            <h2>Compétences techniques principales</h2>
            <ul>
                {data.a_propos.competences_techniques.map((name, i) => <li key={i}>{name}</li>)}
            </ul>
            <h2>Parcours</h2>
            <ul>
                {data.parcours.map(job => <li>
                    <TimedItem item={job} />
                </li>)}
            </ul>
        </div>
    );
}