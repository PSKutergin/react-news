import s from "./Sceleton.module.css"

const Sceleton = ({ count = 1, type = 'banner' }) => {
    return (
        <>
            {count > 1 ? (
                <ul className={s.list}>
                    {[...Array(count)].map((_, i) => (
                        <li key={i} className={type === 'banner' ? s.banner : s.item}>

                        </li>
                    ))}
                </ul>
            ) :
                <li className={type === 'banner' ? s.banner : s.item}></li>}
        </>
    )
}

export default Sceleton