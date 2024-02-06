import s from "./styles.module.css"
import { formayTimeAgo } from "../../helpers/formatTimeAgo"


const NewsItem = ({ item }) => {

    return (
        <li className={s.item}>
            <div className={s.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className={s.info}>
                <h3 className={s.title}>{item.title}</h3>
                <p className={s.extra}>{formayTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    )
}

export default NewsItem