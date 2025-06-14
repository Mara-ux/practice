import "./CartCard.module.css"
import s from "./CartCard.module.css"
import trash from "./../../images/icons/trash.png"
import { useCart } from "./CartContext"


const CartCard = ({ item }) => {
    const { removeFromCart, updateQuantity } = useCart()

    const handleIncrease = () => {
        updateQuantity(item.id, item.quantity + 1)
    }
    const handleDecrease = () => {
        updateQuantity(item.id, item.quantity - 1)
    }
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    return (
        <div>
            <div className={s.flexwrapper}>
                <img className={s.cardimg} src={item.img} alt={item.name} />
                <div className={s.infowrapper}>
                    <div className={s.info}>
                        <div className={s.text}>
                            <h4>{item.name}</h4>
                            <h5>{item.version}</h5>
                            <h5>{item.group}</h5>
                        </div>
                        <div className={s.delit} onClick={() => removeFromCart(item.id)}>
                            <img src={trash} alt="" />
                            <p>Удалить</p>
                        </div>
                    </div>
                    <div className={s.price}>
                        <h4>{formatPrice(item.price * item.quantity)} ₽</h4>
                        <div className={s.pricebtn}>
                            <p className={s.btnmin} onClick={handleDecrease}>-</p>
                            <p>{item.quantity}</p>
                            <p className={s.btn} onClick={handleIncrease}>+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard;