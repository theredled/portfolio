import {II18nData, IPotentialI18nData} from "@/src/types/I18n";

export interface IProjectData {
    readonly id: string,
    readonly titre: string | II18nData,
    readonly github: string | undefined,
    readonly url: string | undefined,
    readonly description: IPotentialI18nData,
    readonly tech: IPotentialI18nData[],
    readonly image: string | undefined,
    readonly date: string,
    readonly category: string[],
    readonly features: IPotentialI18nData[]
    readonly gallery: []
}

export interface IBreadcrumb {
    readonly label: string,
    readonly url: string
}

export interface ITimedItemData {
    readonly date: string | II18nData,
    readonly title: string | II18nData,
}