import "./Btn.module.css"
import s from "./Btn.module.css"

const Btn = (props) => {
    return (
        <div>
            <p className={s.btn}>{props.name}</p>
        </div>
    )
}

export default Btn;