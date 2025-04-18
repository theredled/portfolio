import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import Link from "next/link";
import { Metadata } from 'next'
import WrapLink from "@/app/bg/WrapLink";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import {tData} from "@/lib/getServerData";
import {getI18n} from "@/locales/server";
//import {useRouter} from "next/navigation";



export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
      title: t('projects')
    }
}

export default async function Projects(params: any) {
    //const query =  await params.searchParams;
    const category = params.category || 'web';
    const t = await getI18n();

    const data = getAllData();


    const categoryName = tData(data.categories[category]);
    const pageTitle = categoryName;

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: t('projects')},
                {label: pageTitle}
            ]}></Breadcrumbs>
            <h1 className="page-title">{categoryName} <span className="weak">– {t('category.selection')}</span></h1>
            <ul className="projets-list">
                {data.projets.filter((project: Record<any, any>) => project.category == category)
                    .map((project: Record<any, any>, index: number) => (
                    <li key={index} className="project project-item">
                        <a href={"/projects/" + project.id} className="block-link">
                            <div className="image-container">
                                <Image src={'/images/' + (project.image || 'no-image.jpg')}
                                       alt="" quality={75} className="project-image"
                                       width={500}
                                       height={300}/>
                            </div>
                            <h2 className="title">
                                <span>{tData(project.titre)}</span>
                                {project.date &&
                                    <time className="side-infos"> ({ project.date })</time>
                                }
                            </h2>
                            {project.description &&
                                <p className="description">{tData(project.description)}</p>
                            }
                            {project.tech &&
                                <section className="tech">
                                    <ul>
                                        {project.tech.slice(0, 6).map((name: string) => <li>{tData(name)}</li>)}
                                        {project.tech.length > 6 &&
                                            <li className="etc">...</li>
                                        }
                                    </ul>
                                </section>
                            }
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}