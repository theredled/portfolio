import { useI18n, useScopedI18n, useCurrentLocale } from '@/locales/client'

// /lib/getData.ts
let cache: object | null = null;

import data from '@/data/portfolio.json'

export function getAllData(): Record<any, any> {
    if (cache) return cache;

    const json = data;
    cache = json;

    return json;
}

export function tData(i18nData: any): string {
    const locale = useCurrentLocale();

    if (typeof i18nData === 'string')
        return i18nData;

    const t: string = i18nData[locale] || Object.values(i18nData).at(0);
    return t;
}