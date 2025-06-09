import "./Answer.module.css"
import s from "./Answer.module.css"

const Answer = ({text, vis, isMobile}) => {
    return(
        <div className={`${s.answer} ${vis ? s.visible : ''} ${isMobile ? s.mobile : ''}`}>
            {text}
        </div>
    )
}

export default Answer;