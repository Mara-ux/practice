import "./Answer.module.css"
import s from "./Answer.module.css"

const Answer = (props) => {
    return(
        <div>
            <p className={s.answer}>{props.text}</p>
        </div>
    )
}

export default Answer;