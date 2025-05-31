import "./InfoL.madule.css"
import s from "./InfoL.madule.css"

const InfoL = (props) => {
    return(
        <div className={s.info}>
            <h1>{props.name}</h1>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
        </div>
    )
}

export default InfoL;