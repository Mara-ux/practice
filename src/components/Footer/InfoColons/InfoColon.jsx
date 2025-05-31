import "./InfoColon.module.css"
import s from "./InfoColon.module.css"

const InfoColon = (props) =>{
    return(
        <div className={s.colon}>
            <h6>{props.title}</h6>
            <a href="#">{props.link1}</a>
            <a href="#">{props.link2}</a>
            <a href="#">{props.link3}</a>
            <a href="#">{props.link4}</a>
        </div>
    )
}

export default InfoColon;