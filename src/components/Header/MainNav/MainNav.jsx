import './MainNav.module.css';
import logo from './../../../images/logo.png'
import Search from './../../../images/search.png'
import Account from './../../../images/icons/account.png'
import Cart from './../../../images/icons/cart.png'
import s from './MainNav.module.css'
import { NavLink } from 'react-router-dom';

const MainNav = () => {
    return (
        <div className={s.mainNav}>
            <div className={s.wrapper}>
                <NavLink to="/main"><img src={logo} alt="logo" id={s.logo} /></NavLink>
                <div className={s.flex_wrapper}>
                    <div className={s.row}>
                        <NavLink to="/about">О нас</NavLink>
                        <NavLink to="/shipment" >Доставка и оплата</NavLink>
                    </div>
                    <div className={s.row}>
                        <NavLink to="/catalog" >Каталог</NavLink>
                        <NavLink to="/contacts" >Контакты</NavLink>
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