import "./InfoColon.module.css"
import s from "./InfoColon.module.css"

const InfoColon = (props) =>{
    return(
        <div className={s.colon}>
            <h6>{props.title}</h6>
            <NavLink to={props.link1}>{props.linkName1}</NavLink>
            <NavLink to={props.link2}>{props.linkName2}</NavLink>
            <NavLink to={props.link3}>{props.linkName3}</NavLink>
            <NavLink to={props.link4}>{props.linkName4}</NavLink>
        </div>
    )
}

export default InfoColon;