import "./Btn.module.css"
import s from "./Btn.module.css"

const Btn = ({name, onMouseEnter, onMouseLeave}) => {
    return (
        <div>
            <p className={s.btn} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >{name}</p>
        </div>
    )
}

export default Btn;