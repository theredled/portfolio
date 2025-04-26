import {getAllData} from "@/src/lib/getData";
import { Metadata } from 'next'
import {tData} from "@/src/lib/getServerData";
import {getI18n} from "@/src/locales/server";
import CardsScroller from "@/src/components/CardsScroller";
import ProjectsList from "@/src/components/ProjectsList";
import {BreadcrumbsSetter} from "@/src/context/BreadcrumbsSetter";

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

    return (
        <>
            <BreadcrumbsSetter list={[{label: t('projects')}, ]}></BreadcrumbsSetter>
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
        </>
    );
}