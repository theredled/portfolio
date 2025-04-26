import {tData} from "@/src/lib/getServerData";
import {ITimedItemData} from "@/src/types";

export default async function TimedItem({item}: {item: ITimedItemData}) {
    let tDate = await tData(item.date);
    if (tDate.at(0) == '*') {
        return null;
    }

    return <li className="timed-item">
        <time className="date">{tData(item.date)}</time>
        <h4 className="title">{tData(item.title)}</h4>
    </li>
}
