import s from "./styles.module.css"
import { formatDate } from "../../helpers/formatDate"

const Header = () => {

    return (
        <header className={s.header}>
            <h1 className={s.title}>news react</h1>
            <p className={s.date}>{formatDate(new Date())}</p>
        </header>
    )
}

export default Header