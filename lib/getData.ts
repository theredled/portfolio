import {micromark} from 'micromark'
import { promises as fs } from 'fs';


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

export async function getDocumentContent(name: string) {
    const fileContent: string = await fs.readFile(process.cwd() + '/data/' + name + ".md", 'utf8') ;
    //const fileContent: string = await req.text() ;
    const html: string = micromark(fileContent);
    return html;
}