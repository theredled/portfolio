// /lib/getData.ts
let cache = null;

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