import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import Breadcrumbs from "@/app/components/Breadcrumbs";


export default async function Project({params, searchParams}) {
    const paramsList =  await params;
    const id = paramsList.id;
    const data = getAllData();

    const project = data.projets.filter(p => p.id.toString() == id).at(0);
    const categoryName = data.categories[project.category];

    console.log('data', data, project, paramsList)
    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: 'Projets'},
                {label: categoryName, url: '/projects/?category=' + project.category},
                {label: project.titre}
            ]}></Breadcrumbs>
            <Head>
                <title>{project.titre}</title>
            </Head>
            <h1>{project.titre}</h1>
            <p className="category">{categoryName}</p>

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