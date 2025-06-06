import './MainNav.module.css';
import logo from './../../../images/logo.png'
import Search from './../../../images/search.png'
import Account from './../../../images/icons/account.png'
import Cart from './../../../images/icons/cart.png'
import s from './MainNav.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import LogPopover from './../../Account/LogPopover';
import RegPopover from './../../Account/RegPopover';
import PasswordPopover from '../../Account/PasswordPopover';



const MainNav = () => {

    const [activePopover , setActivePopover] = useState(null);
    const logOpen = () => {setActivePopover("login")}
    const regOpen = () => {setActivePopover("reg")}
    const pasOpen = () => {setActivePopover("pas")}
    const closePopover =() =>{setActivePopover(null)}

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
                <img className={s.acc} src={Account} alt="Account" onClick={logOpen}/>
                <NavLink to="/cart" ><img src={Cart} alt="Cart" /></NavLink>
                <h3>0 ₽</h3>
            </div>
            {activePopover === "login" && (
                <div>
                    <LogPopover onClose={closePopover} SwitchToReg={regOpen} SwitchToPass={pasOpen}/>
                </div>
            )}
            {activePopover === "reg" && (
                <div>
                    <RegPopover onClose={closePopover} SwitchToLog={logOpen}/>
                </div>
            )}
            {activePopover === "pas" && (
                <div>
                    <PasswordPopover onClose={closePopover} SwitchToReg={regOpen}/>
                </div>
            )}
        </div>
    )
};

export default MainNav;