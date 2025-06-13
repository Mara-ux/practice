import "./Cart.module.css"
import s from "./Cart.module.css"
import CartCard from './CartCard';

const Cart = () => {
    return (
        <section className={s.sect}>
            <h1 className={s.title}>Корзина</h1>
            <div className={s.flexWrapper}>
                <div className={s.cardWrapper}>
                    <CartCard />
                </div>
                <div className={s.bar}>
                    <div className={s.text}>
                        <h5>В корзине</h5>
                        <p>Товаров: 1</p>
                    </div>
                    <div className={s.box}>
                        <h4>1 900 ₽</h4>
                        <div className={s.btn}>Оформить</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;