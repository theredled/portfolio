import {micromark} from 'micromark'
import { promises as fs } from 'fs';
//import {useCurrentLocale} from "@/locales/client";
import { getI18n, getScopedI18n, getCurrentLocale } from '@/locales/server'

export async function getDocumentContent(name: string) {
    const locale = await getCurrentLocale();

    const fileContent: string = await fs.readFile(`${process.cwd()}/data/${name}-${locale}.md`, 'utf8') ;
    //const fileContent: string = await req.text() ;
    const html: string = micromark(fileContent);
    return html;
}

import data from '@/data/portfolio.json'

let cache: object | null = null;

export function getAllData(): Record<any, any> {
    if (cache) return cache;

    const json = data;
    cache = json;

    return json;
}

export async function tData(i18nData: any): Promise<string> {
    const locale = await getCurrentLocale();

    if (typeof i18nData === 'string')
        return i18nData;

    const t: string = i18nData[locale] || Object.values(i18nData).at(0);
    return t;
}