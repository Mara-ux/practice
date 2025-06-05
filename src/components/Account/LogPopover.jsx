import "./LogPopover.module.css"
import s from "./LogPopover.module.css"
import close from "./../../images/icons/close.png"


const LogPopover = ({onClose, SwitchToReg, SwitchToPass}) => {
    return (
        <div className={s.popOver}>
            <div className={s.wrapper}>
                <img src={close} alt="" className={s.closeBtn} onClick={onClose}/>
            <h1>вход</h1>
            <div className={s.form}>
                <div className={s.item}>
                    <h3>E-mail</h3>
                    <input type="email" placeholder="example@gmail.com" />
                </div>
                <div className={s.item}>
                    <h3>Пароль</h3>
                    <input type="password" placeholder="пароль" />
                </div>
                <button type="submit" >ВОЙТИ</button>
            </div>
            <div className={s.texBox}>
                <p onClick={SwitchToPass}>Забыли пароль?</p>
                <p onClick={SwitchToReg}>Нет аккаунта? Зарегистрироваться</p>
            </div>
            </div>
        </div>
    )
}

export default LogPopover;