import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import TimedItem from "@/app/components/TimedItem";
import {Metadata} from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const data = getAllData();
const pageTitle = 'À propos';
export const metadata: Metadata = {
  title: pageTitle
}

export default function About() {

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: pageTitle}
            ]}></Breadcrumbs>
            <h1>{pageTitle}</h1>
            <section>
                <div className="section-content">
                    <p>{data.a_propos.presentation}</p>
                    <p>{data.a_propos.profil}</p>
                </div>
            </section>
            <section className="tech important">
                <h2>Expertises principales</h2>
                <ul className="section-content">
                    {data.a_propos.competences_techniques.map((name, i) => <li key={i}>{name}</li>)}
                </ul>
            </section>
            <section className="tech important">
                <h2>Appétence pour</h2>
                <ul className="section-content">
                    {data.a_propos.learning.map((name, i) => <li key={i}>{name}</li>)}
                </ul>
            </section>

            <h2>Parcours</h2>
            <ul className="section-content">
                {data.parcours.map(job => <li>
                    <TimedItem item={job} />
                </li>)}
            </ul>
        </div>
    );
}