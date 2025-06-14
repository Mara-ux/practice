import "./PopCard.module.css"
import s from "./PopCard.module.css"
import close from "./../../images/icons/close.png"
import SmolBtn from './../Main/CardRows/Card/SmolBtn';
import { useCart } from "../Cart/CartContext";

const PopCard = ({ card, onClose}) => {
    const {addToCart} = useCart()
    const handleAddToCart = () => {
        addToCart(card.id)
    }
    if (!card) return null;
    return (
        <div>
            <div className={s.pop}>
                <div className={s.flexWrapper}>
                    <img src={close} alt="" className={s.closeBtn} onClick={onClose} />
                    <div className={s.sliderWrapper}>
                        <img src={card.img} alt="" className={s.pic} />
                    </div>
                    <div className={s.mainInfo}>
                        <div className={s.name}>
                            <h4>{card.name}</h4>
                            <h5>{card.version}</h5>
                            <h5>{card.group}</h5>
                        </div>
                        <div className={s.btnwrapper}>
                            <p className={s.verBtn}>{card.inerVersions[0]}</p>
                            <p className={s.verBtn}>{card.inerVersions[1]}</p>
                            <p className={s.verBtn}>{card.inerVersions[2]}</p>
                        </div>
                        <div className={s.block}>
                            <h5>{card.price}</h5>
                            <button className={s.btn} onClick={handleAddToCart}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
                <div className={s.otherInfo}>
                    <div className={s.colon}>
                        <h6>Наполнение</h6>
                        <p className={s.info}>{card.contents}</p>
                    </div>
                    <div className={`${s.colon} ${s.pobs}`}>
                        <h6>подарки за предзаказ</h6>
                        <p className={s.pobsText}>За альбом:</p>
                        <ul>
                            <li>{card.gifts.album}</li>
                        </ul>
                        <p className={s.pobsText}>За сет:</p>
                        <ul>
                            <li>{card.gifts.set}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.backdrop}></div>
        </div>
    )
}

export default PopCard;