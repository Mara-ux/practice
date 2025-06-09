import "./CartCard.module.css"
import s from "./CartCard.module.css"
import trash from "./../../images/icons/trash.png"
import img from "./../../images/cards/def.png"

const CartCard = ({ }) => {
    return (
        <div>
            <div className={s.flexwrapper}>
                <img className={s.cardimg} src={img} alt="" />
                <div className={s.infowrapper}>
                    <div className={s.info}>
                        <div className={s.text}>
                            <h4>DESIRE : UNLEASH</h4>
                            <h5>STANDART</h5>
                            <h5>ENHYPEN</h5>
                        </div>
                        <div className={s.delit}>
                            <img src={trash} alt="" />
                            <p>Удалить</p>
                        </div>
                    </div>
                    <div className={s.price}>
                        <h4>1 900 ₽</h4>
                        <div className={s.pricebtn}>
                            <p className={s.btnmin}>-</p>
                            <p>1</p>
                            <p className={s.btn}>+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard;