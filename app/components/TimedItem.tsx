import {tData} from "@/lib/getServerData";

export default function TimedItem({item}: {item: any}) {
    return <div className="timed-item">
        <time className="date">{tData(item.date)}</time>
        <h4 className="title">{tData(item.title)}</h4>
    </div>
}
