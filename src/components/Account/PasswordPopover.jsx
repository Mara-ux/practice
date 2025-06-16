import "./PasswordPopover.module.css"
import s from "./PasswordPopover.module.css"
import close from "./../../images/icons/close.png"
import { useState } from 'react';
import { useAuth } from './AuthContext';

const PasswordPopover = ({ onClose, SwitchToReg }) => {

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const { resetPassword, authError, setAuthError } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (resetPassword(email, newPassword)) {
            onClose();
        }
    };

    return (
        <div className={s.popOver}>
            <div className={s.wrapper}>
                <img src={close} alt="" className={s.closeBtn} onClick={onClose} />
                <h1>Сброс пароля</h1>
                {authError && <div className={s.error}>{authError}</div>}
                <form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.item}>
                        <h3>Имя</h3>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setAuthError(null);
                            }}
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>
                    <div className={s.item}>
                        <h3>E-mail</h3>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="новый пароль"
                            required
                        />
                    </div>
                    <button type="submit" >СБРОСИТЬ ПАРОЛЬ</button>
                </form >
                <div className={s.texBox}>
                    <p onClick={SwitchToReg}>Нет аккаунта? Зарегистрироваться</p>
                </div>
            </div>
        </div>
    )
}

export default PasswordPopover;