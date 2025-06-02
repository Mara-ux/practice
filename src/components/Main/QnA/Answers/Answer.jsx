import "./Answer.module.css"
import s from "./Answer.module.css"

const Answer = ({text, vis}) => {
    return(
        <div className={`${s.answer} ${vis ? s.visible : ''}`}>
            {text}
        </div>
    )
}

export default Answer;