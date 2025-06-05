import "./RegPopover.module.css"
import s from "./RegPopover.module.css"
import close from "./../../images/icons/close.png"


const RegPopover = ({ onClose, SwitchToLog}) => {
    return (
        <div className={s.popOver}>
            <div className={s.wrapper}>
                <img src={close} alt="" className={s.closeBtn} onClick={onClose} />
                <h1>Регистрация</h1>
                <div className={s.form}>
                    <div className={s.item}>
                        <h3>Имя</h3>
                        <input type="text" placeholder="имя" />
                    </div>
                    <div className={s.item}>
                        <h3>E-mail</h3>
                        <input type="email" placeholder="example@gmail.com" />
                    </div>
                    <div className={s.item}>
                        <h3>Пароль</h3>
                        <input type="password" placeholder="пароль" />
                    </div>
                    <button type="submit" >Зарегистрироваться</button>
                </div>
                <div className={s.texBox}>
                    <p onClick={SwitchToLog}>Уже зарегистрированы? Войти</p>
                </div>
            </div>
        </div>
    )
}

export default RegPopover;