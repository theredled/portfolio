import {II18nData, IPotentialI18nData} from "@/src/types/I18n";

export interface IProject {
    id: string,
    titre: string | II18nData,
    github: string | undefined,
    url: string | undefined,
    description: IPotentialI18nData,
    tech: IPotentialI18nData[],
    image: string | undefined,
    date: string,
    category: string[],
    features: IPotentialI18nData[]
    gallery: []
}

export interface IBreadcrumb {
    label: string,
    url: string
}

export interface ITimedItem {
    date: string | II18nData,
    title: string | II18nData,
}