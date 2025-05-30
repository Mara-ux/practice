import './MainNav.module.css';
import logo from './../../../images/logo.png'
import Search from './../../../images/search.png'
import Account from './../../../images/icons/account.png'
import Cart from './../../../images/icons/cart.png'
import s from './MainNav.module.css'

const MainNav = () => {
    return (
        <div className={s.mainNav}>
            <div className={s.wrapper}>
                <a href="#"><img src={logo} alt="logo" id={s.logo} /></a>
                <div className={s.flex_wrapper}>
                    <div className={s.row}>
                        <a href="#">О нас</a>
                        <a href="#">Доставка и оплата</a>
                    </div>
                    <div className={s.row}>
                        <a href="#">Каталог</a>
                        <a href="#">Контакты</a>
                    </div>
                </div>
            </div>
            <div className={s.input_bar}>
                <input type="text" />
                <img src={Search} alt="search" />
            </div>
            <div className={s.icons}>
                <img className={s.acc} src={Account} alt="Account" />
                <a href="#"><img src={Cart} alt="Cart" /></a>
                <h3>0 ₽</h3>
            </div>
        </div>
    )
};

export default MainNav;