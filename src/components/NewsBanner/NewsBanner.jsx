import s from "./styles.module.css"
import { formayTimeAgo } from "../../helpers/formatTimeAgo"
import NewsImage from "../NewsImage/NewsImage"

const NewsBanner = ({ item }) => {

    return (
        <div className={s.banner}>
            <NewsImage image={item?.image} />
            <h3 className={s.title}>{item.title}</h3>
            <p className={s.extra}>{formayTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}

export default NewsBanner