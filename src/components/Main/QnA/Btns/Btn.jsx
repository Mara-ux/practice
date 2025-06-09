import "./Btn.module.css"
import s from "./Btn.module.css"

const Btn = ({name, onMouseEnter, onMouseLeave, onClick, isActive}) => {
    return (
        <div>
            <p className={`${s.btn} ${isActive ? s.active : ""}`} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >{name}</p>
        </div>
    )
}

export default Btn;