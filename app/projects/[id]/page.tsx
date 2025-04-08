import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";


export default async function Project({params, searchParams}) {
    const paramsList =  await params;
    const id = paramsList.id;

    const data = getAllData();

    const project = data.projets.filter(p => p.id.toString() == id).at(0);

    console.log('data', data, project, paramsList)
    return (
        <div>
            <Head>
                <title>{project.titre}</title>
            </Head>
            <h1>{project.titre}</h1>
            <p className="category">{data.categories[project.category]}</p>

            {project.description &&
                <p>{project.description}</p>
            }
            {project.features &&
                <section className="features">
                    <h3>Fonctionnalités :</h3>
                    <ul>{project.features.map(name => <li>{name}</li>)}</ul>
                </section>
            }
            {project.tech &&
                <section className="tech">
                    <h3>Stack :</h3>
                    <ul>{project.tech.map(name => <li>{name}</li>)}</ul>
                </section>
            }
        </div>
    );
}