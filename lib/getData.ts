import {micromark} from 'micromark'
import { useI18n, useScopedI18n, useCurrentLocale } from '@/locales/client'

// /lib/getData.ts
let cache: object | null = null;

import data from '@/data/portfolio.json'

export function getAllData() {
    if (cache) return cache;
    /*const res = await fetch('https://api.example.com/data');
    const json = await res.json();*/
    const json = data;
    cache = json;
    console.log('data', data)

    return json;
}

export function tData(i18nData: object): string {
    const locale = useCurrentLocale();
    const t: string = i18nData[locale] || Object.values(i18nData).at(0);
    return t;
}