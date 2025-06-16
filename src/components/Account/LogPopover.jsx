import "./LogPopover.module.css"
import s from "./LogPopover.module.css"
import close from "./../../images/icons/close.png"
import { useState } from 'react';
import { useAuth } from './AuthContext';

const LogPopover = ({onClose, SwitchToReg, SwitchToPass}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, authError, setAuthError } = useAuth();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            onClose()
        }
    }


    return (
        <div className={s.popOver}>
            <div className={s.wrapper}>
                <img src={close} alt="" className={s.closeBtn} onClick={onClose}/>
            <h1>вход</h1>
            {authError && <div className={s.error}>{authError}</div>}
            <form  className={s.form} onSubmit={handleSubmit}>
                <div className={s.item}>
                    <h3>E-mail</h3>
                    <input 
                        type="email" 
                        placeholder="example@gmail.com"
                        value={email}
                        required
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setAuthError(null)
                        }}
                    />
                </div>
                <div className={s.item}>
                    <h3>Пароль</h3>
                    <input 
                        type="password" 
                        placeholder="пароль"
                        value={password}
                        required
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setAuthError(null)
                        }}
                    />
                </div>
                <button type="submit" >ВОЙТИ</button>
            </form >
            <div className={s.texBox}>
                <p onClick={SwitchToPass}>Забыли пароль?</p>
                <p onClick={SwitchToReg}>Нет аккаунта? Зарегистрироваться</p>
            </div>
            </div>
        </div>
    )
}

export default LogPopover;