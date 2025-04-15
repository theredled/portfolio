import {getAllData} from "@/lib/getData";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Gallery from "@/app/components/Gallery";

export default async function Project({params}: {params: any}) {
    const paramsList =  await params;
    const id = paramsList.id;
    const data = getAllData();

    const project = data.projets.filter((p: Record<any, any>) => p.id.toString() == id).at(0);
    const categoryName = data.categories[project.category];
    project.gallery = project.gallery || project.image && [project.image];

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: 'Projets'},
                {label: categoryName, url: '/projects/?category=' + project.category},
                {label: project.titre}
            ]}></Breadcrumbs>

            <main id="main" className="project single-project">

                <h1 className="title"><span>{project.titre}</span>
                    {project.date &&
                        <time className="side-infos"> ({ project.date })</time>
                    }
                </h1>
                <p className="category">{categoryName}</p>

                {project.description &&
                    <p>{project.description}</p>
                }
                {project.features &&
                    <section className="features">
                        <h3>Fonctionnalités :</h3>

                        <ul className="section-content">{project.features.map((name:string) => <li>{name}</li>)}</ul>
                    </section>
                }
                {project.tech &&
                    <section className="tech">
                        <h3>Stack :</h3>
                        <ul className="section-content">{project.tech.map((name: string) => <li>{name}</li>)}</ul>
                    </section>
                }

                {project.gallery &&
                    <Gallery project={project}/>
                }
            </main>
        </div>
    );
}