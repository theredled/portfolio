import Image from "next/image";
import Head from "next/head";
import {getAllData} from "@/lib/getData";
import Link from "next/link";
import { Metadata } from 'next'
import WrapLink from "@/app/bg/WrapLink";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import {tData} from "@/lib/getServerData";
import {getI18n} from "@/locales/server";
import CardsScroller from "@/app/components/CardsScroller";
import ProjectsList from "@/app/components/ProjectsList";
//import {useRouter} from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
      title: t('projects')
    }
}

export default async function Projects(params: any) {
    //const query =  await params.searchParams;
    const category = params.category || null;

    const t = await getI18n();

    const data = getAllData();

    //const pageTitle = categoryName;

    //const projectsList = data.projets.filter((project: Record<any, any>) => project.category == category);
    console.log('cats', data.categories, Object.keys(data.categories));

    return (
        <div>
            <Breadcrumbs breadcrumbsList={[
                {label: t('projects')},
                //{label: pageTitle}
            ]}></Breadcrumbs>
            <main id="main">
                <CardsScroller>
                {
                    Object.keys(data.categories).map((catToken: string, i:number) => {
                        const projectsList = data.projets.filter((project: Record<any, any>) => project.category == catToken);
                        const categoryName = tData(data.categories[catToken]);
                        const HeaderTag = i == 0 ? 'h1' : 'h2';

                        return (
                                <div className="card">
                                    <HeaderTag className="card-title page-title">
                                        {categoryName}
                                        <span className="weak"> – {t('category.selection')}</span>
                                    </HeaderTag>
                                    <ProjectsList projects={projectsList}></ProjectsList>
                                </div>
                        );
                    })
                }
                </CardsScroller>
            </main>
        </div>
    );
}