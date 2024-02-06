import s from "./styles.module.css"
import NewsItem from "../NewsItem/NewsItem"

const NewsList = ({ news }) => {
    return (
        <ul className={s.list}>
            {news.map(item => <NewsItem key={item.id} item={item} />)}
        </ul>
    )
}

export default NewsList