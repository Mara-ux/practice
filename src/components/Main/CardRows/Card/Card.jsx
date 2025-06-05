import "./Card.module.css"
import s from "./Card.module.css"
import SmolBtn from './SmolBtn';

const Card = ({ id, img, name, version, group, price, onAddToCart }) => {
    const handleAddClick = () => {
        onAddToCart(id);
    };
    return (
        <div className={s.card}>
            <div className={s.mainInfo}>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <h5>{version}</h5>
                <h5>{group}</h5>
            </div>
            <div className={s.price}>
                <h4>{price}</h4>
                <SmolBtn onClick={handleAddClick}/>
            </div>
        </div>
    );
}

export default Card;