export default function TimedItem({item}: {item: any}) {
    console.log(item)
    return <div className="timed-item">
        <time className="date">{item.date}</time>
        <h4 className="title">{item.title}</h4>
    </div>
}
