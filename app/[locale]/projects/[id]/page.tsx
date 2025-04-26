import {getAllData} from "@/src/lib/getData";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import Gallery from "@/src/components/Gallery";
import {tData} from "@/src/lib/getServerData";
import {getI18n} from "@/src/locales/server";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from "@mui/icons-material/GitHub";
import {BreadcrumbsSetter} from "@/src/context/BreadcrumbsSetter";
import {IPotentialI18nData} from "@/src/types/I18n";
import {IProjectData} from "@/src/types";

export default async function Project({params}: { params: any }) {
    const paramsList = await params;
    const id = paramsList.id;
    const data = getAllData();
    const t = await getI18n();


    const project: IProjectData = data.projets.filter((p: IProjectData) => p.id.toString() == id).at(0);

    const projectCat = project.category.at(0);
    if (!projectCat)
        throw new Error('No category for project ' + id);

    const categoryName = tData(data.categories[projectCat]);

    return (
        <>
            <BreadcrumbsSetter list={[
                {label: t('projects')},
                {label: categoryName, url: '/projects/?category=' + projectCat},
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
                        <ul>{project.tech.map((name: IPotentialI18nData) => <li>{tData(name)}</li>)}</ul>
                    </section>
                }
                {project.features &&
                    <section className="features">
                        <h3>{t('features')}</h3>

                        <ul className="section-content">{project.features.map((name: IPotentialI18nData) =>
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