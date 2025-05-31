import "./Card.module.css"
import s from "./Card.module.css"
import SmolBtn from './SmolBtn';

const Card = (props) => {
    return (
        <div className={s.card}>
            <div className={s.mainInfo}>
                <img src={props.img} alt="" />
                <h4>{props.name}</h4>
                <h5>{props.version}</h5>
                <h5>{props.group}</h5>
            </div>
            <div className={s.price}>
                <h4>{props.price}</h4>
                <SmolBtn />
            </div>
        </div>
    );
}

export default Card;