import {getAllData} from "@/lib/getData";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Gallery from "@/app/components/Gallery";
import {tData} from "@/lib/getServerData";
import {getI18n} from "@/locales/server";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from "@mui/icons-material/GitHub";
import {BreadcrumbsSetter} from "@/app/components/BreadcrumbsSetter";

export default async function Project({params}: { params: any }) {
    const paramsList = await params;
    const id = paramsList.id;
    const data = getAllData();
    const t = await getI18n();

    const project = data.projets.filter((p: Record<any, any>) => p.id.toString() == id).at(0);
    const categoryName = tData(data.categories[project.category]);
    console.log('project.gallery', project.gallery);
    //project.gallery = project.gallery || [];

    return (
        <>
            <BreadcrumbsSetter list={[
                {label: t('projects')},
                {label: categoryName, url: '/projects/?category=' + project.category},
                {label: tData(project.titre)}
            ]}></BreadcrumbsSetter>

            <div className="project single-project">
                <h1 className="title"><span>{tData(project.titre)}</span>
                    {project.date &&
                        <time className="side-infos"> ({project.date})</time>
                    }
                    <span className=" category">{categoryName}</span>
                    {project.url &&
                        <a href={project.url} className="side-infos link">
                            <LinkIcon>{t('visit')}</LinkIcon>
                        </a>
                    }
                    {project.github &&
                        <a href={project.url} className="side-infos link">
                            <GitHubIcon>Github</GitHubIcon>
                        </a>
                    }
                </h1>


                {project.description &&
                    <p>{tData(project.description)}</p>
                }
                {project.tech &&
                    <section className="tech">
                        <h3>Stack :</h3>
                        <ul>{project.tech.map((name: string) => <li>{tData(name)}</li>)}</ul>
                    </section>
                }
                {project.features &&
                    <section className="features">
                        <h3>{t('features')}</h3>

                        <ul className="section-content">{project.features.map((name: string) =>
                            <li>{tData(name)}</li>)}</ul>
                    </section>
                }

                {project.gallery &&
                    <Gallery project={project}/>
                }
            </div>
        </>
    );
}