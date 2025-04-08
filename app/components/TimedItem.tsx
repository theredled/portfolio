export default function TimedItem({item}) {
    console.log(item)
    return <div className="timed-item">
        <time>{item.date}</time>
        <h4>{item.title}</h4>
    </div>
}
