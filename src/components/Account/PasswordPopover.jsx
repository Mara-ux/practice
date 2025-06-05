import "./PasswordPopover.module.css"
import s from "./PasswordPopover.module.css"
import close from "./../../images/icons/close.png"


const PasswordPopover = ({ onClose, SwitchToReg }) => {
    return (
        <div className={s.popOver}>
            <div className={s.wrapper}>
                <img src={close} alt="" className={s.closeBtn} onClick={onClose} />
                <h1>Сброс пароля</h1>
                <div className={s.form}>
                    <div className={s.item}>
                        <h3>Имя</h3>
                        <input type="text" placeholder="имя" />
                    </div>
                    <div className={s.item}>
                        <h3>E-mail</h3>
                        <input type="email" placeholder="example@gmail.com" />
                    </div>
                    <button type="submit" >СБРОСИТЬ ПАРОЛЬ</button>
                </div>
                <div className={s.texBox}>
                    <p onClick={SwitchToReg}>Нет аккаунта? Зарегистрироваться</p>
                </div>
            </div>
        </div>
    )
}

export default PasswordPopover;