import "./AdwentColon.module.css"
import s from "./AdwentColon.module.css"

const AdwentColon = (props) => {
    return(
        <div className={s.colon}>
            <img src={props.img} alt="icon" />
            <h2>{props.text}</h2>
        </div>
    )
}

export default AdwentColon;