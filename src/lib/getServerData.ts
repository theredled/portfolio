import {micromark} from 'micromark'
import { promises as fs } from 'fs';
//import {useCurrentLocale} from "@/locales/client";
import { getI18n, getScopedI18n, getCurrentLocale } from '@/src/locales/server'
import path from 'path';

export async function getDocumentContent(name: string) {
    const locale = await getCurrentLocale();

    const filePath = path.join(process.cwd(), `/data/${name}-${locale}.md`);
    const fileContent: string = await fs.readFile(filePath, 'utf8');
    //const fileContent: string = await req.text() ;
    const html: string = micromark(fileContent);
    return html;
}

import data from '@/data/portfolio.json'
import {IPotentialI18nData} from "@/src/types/I18n";

let cache: object | null = null;

export function getAllData(): Record<any, any> {
    if (cache) return cache;

    const json = data;
    cache = json;

    return json;
}

export async function tData(i18nData: IPotentialI18nData): Promise<string> {
    const locale = await getCurrentLocale();

    if (typeof i18nData === 'string')
        return i18nData;
    if (!i18nData)
        throw new Error('i18nData is empty')

    const t: string = i18nData[locale] || Object.values(i18nData).at(0);
    return t;
}