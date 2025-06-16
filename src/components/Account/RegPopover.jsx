import "./RegPopover.module.css"
import s from "./RegPopover.module.css"
import close from "./../../images/icons/close.png"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './AuthContext';

const RegPopover = ({ onClose, SwitchToLog }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { register, authError, setAuthError } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setAuthError(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (register(formData)) {
            onClose();
        }
    };
    return (
        <div className={s.popOver}>
            <div className={s.wrapper}>
                <img src={close} alt="" className={s.closeBtn} onClick={onClose} />
                <h1>Регистрация</h1>
                {authError && <div className={s.error}>{authError}</div>}
                <form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.item}>
                        <h3>Имя</h3>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="имя"
                            required
                        />
                    </div>
                    <div className={s.item}>
                        <h3>E-mail</h3>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>
                    <div className={s.item}>
                        <h3>Пароль</h3>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="пароль"
                            required
                        />
                    </div>
                    <button type="submit" onClick={onClose} className={s.button}>Зарегистрироваться</button>
                </form >
                <div className={s.texBox}>
                    <p onClick={SwitchToLog}>Уже зарегистрированы? Войти</p>
                </div>
            </div>
        </div>
    )
}

export default RegPopover;