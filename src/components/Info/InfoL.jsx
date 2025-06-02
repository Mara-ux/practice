import "./InfoL.module.css"
import s from "./InfoL.module.css"

const InfoL = (props) => {
    return(
        <div className={`${s.info} ${s[props.direction]}`}>
            <h1>{props.name}</h1>
            <p>{props.text1}</p>
            <ul className={s.list}>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
                <li>{props.li4}</li>
                <li>{props.li5}</li>
            </ul>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
        </div>
    )
}

export default InfoL;