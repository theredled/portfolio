import {tData} from "@/lib/getServerData";

export default async function TimedItem({item}: {item: any}) {
    let tDate = await tData(item.date);
    if (tDate.at(0) == '*') {
        return null;
    }

    return <li className="timed-item">
        <time className="date">{tData(item.date)}</time>
        <h4 className="title">{tData(item.title)}</h4>
    </li>
}
