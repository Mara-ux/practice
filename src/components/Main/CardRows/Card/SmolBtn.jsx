import "./SmolBtn.module.css"
import s from "./SmolBtn.module.css"

const SmolBtn = ({onClick}) => {
    return(
        <button className={s.btn} onClick={onClick}>
            Добавить в корзину
        </button>
    )
}

export default SmolBtn;