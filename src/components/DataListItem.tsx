import {tData} from "@/src/lib/getServerData";

export async function DataListItem({name}: {name: string | object}) {
    let bigger = false;

    let translatedName = await tData(name);

    if (!translatedName) return null;
    if (translatedName.at(0) == '*') return null;
    if (translatedName.at(0) == '!') {
        translatedName = translatedName.slice(1);
        bigger = true;
    }

    return (
        <li className={bigger ? 'bigger' : ''}>{tData(translatedName)}</li>
    );
}