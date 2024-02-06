import s from "./styles.module.css"

const NewsImage = ({ image }) => {
    return (
        <div className={s.wrapper}>
            {image ? <img className={s.image} src={image} alt="news" /> : null}
        </div>
    )
}

export default NewsImage