import "./Cart.module.css"
import s from "./Cart.module.css"
import CartCard from './CartCard';
import { useCart } from './CartContext';

const Cart = () => {
    const { cartItem, totalPrice, itemsCount, clearCart } = useCart();

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    const handleCheckout = () => {
        alert(`Заказ оформлен! Сумма: ${formatPrice(totalPrice)} ₽`);
        clearCart();
    };

    return (
        <section className={s.sect}>
            <h1 className={s.title}>Корзина</h1>
            <div className={s.flexWrapper}>
                <div className={s.cardWrapper}>
                    {cartItem.length > 0 ? (
                        cartItem.map(item => (
                            <CartCard key={item.id} item={item} />
                        ))
                    ) : (
                        <p>Корзина пуста</p>
                    )}
                </div>
                <div className={s.bar}>
                    <div className={s.text}>
                        <h5>В корзине</h5>
                        <p>Товаров: {itemsCount}</p>
                    </div>
                    <div className={s.box}>
                        <h4>{formatPrice(totalPrice)} ₽</h4>
                        <div
                            className={s.btn}
                            onClick={handleCheckout}
                            style={{ cursor: cartItem.length === 0 ? 'not-allowed' : 'pointer' }}
                        >
                            Оформить</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;