import "./Account.module.css"
import s from "./Account.module.css"
import Img from "./../../images/av.png"
import { useState } from 'react';
import { useAuth } from './AuthContext';

const Account = () => {

    const { currentUser, updateProfile, logout } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: currentUser?.name || '',
        middleName: currentUser?.middleName || '',
        lastName: currentUser?.lastName || '',
        phone: currentUser?.phone || '',
        email: currentUser?.email || '',
        address: {
            region: currentUser?.address?.region || '',
            city: currentUser?.address?.city || '',
            street: currentUser?.address?.street || '',
            house: currentUser?.address?.house || '',
            apartment: currentUser?.address?.apartment || '',
            zip: currentUser?.address?.zip || ''
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name.includes("address.")) {
            const field = name.split(".")[1]
            setFormData(prev => ({ ...prev, address: { ...prev.address, [field]: value } }))
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(formData)
        setIsEditing(false)
    }

    if (!currentUser) {
        return <div className={s.error}>Пожалуйста, войдите в систему</div>
    }
    return (
        <div className={s.MainWrapper}>
            <div className={s.bar}>
                <img src={Img} alt="Аватар" />
                <ul>
                    <li>{currentUser.name}</li>
                    <button className={s.btn} onClick={logout}>Выйти</button>

                </ul>
            </div>
            <div className={s.ifo}>
                <h2>Личный кабинет</h2>
                {isEditing ? (
                    <form onSubmit={handleSubmit}>
                        <div className={s.wrapper}>
                            <div className={s.info_box}>
                                <h4>Личная информация</h4>
                                <input placeholder="Имя" name="name" value={formData.name} onChange={handleChange} />
                                <input placeholder="Отчество" name="middleName" value={formData.middleName} onChange={handleChange} />
                                <input placeholder="Фамилия" name="lastName" value={formData.lastName} onChange={handleChange} />
                                <input placeholder="Номер" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                                <input placeholder="E-mail" type="email" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={s.wrapper}>
                            <div className={s.info_box}>
                                <h4>Адрес</h4>
                                <input placeholder="Область" name="address.region" value={formData.address.region} onChange={handleChange} />
                                <input placeholder="Город" name="address.city" value={formData.address.city} onChange={handleChange} />
                                <input placeholder="Улица" name="address.street" value={formData.address.street} onChange={handleChange} />
                                <input placeholder="Дом" name="address.house" value={formData.address.house} onChange={handleChange} />
                                <input placeholder="Квартира" name="address.apartment" value={formData.address.apartment} onChange={handleChange} />
                                <input placeholder="Индекс" name="address.zip" value={formData.address.zip} onChange={handleChange} />
                            </div>
                        </div>
                        <button className={s.btn} type="submit">Сохранить</button>
                        <button className={s.btn} type="button" onClick={() => setIsEditing(false)}>Отмена</button>
                    </form>
                ) : (
                    <>
                        <div className={s.wrapper}>
                            <div className={s.info_box}>
                                <h4>Личная информация</h4>
                                <li>Имя: {currentUser.name}</li>
                                <li>Отчество: {currentUser.middleName}</li>
                                <li>Фамилия: {currentUser.lastName}</li>
                                <li>Номер: {currentUser.phone}</li>
                                <li>E-mail: {currentUser.email}</li>
                            </div>
                        </div>
                        <div className={s.wrapper}>
                            <div className={s.info_box}>
                                <h4>Адрес</h4>
                                <li>Область: {currentUser.address.region}</li>
                                <li>Город: {currentUser.address.city}</li>
                                <li>Улица: {currentUser.address.street}</li>
                                <li>Дом: {currentUser.address.house}</li>
                                <li>Квартира: {currentUser.address.apartment}</li>
                                <li>Индекс: {currentUser.address.zip}</li>
                            </div>
                        </div>
                        <button className={s.btn} onClick={() => setIsEditing(true)}>Редактировать</button>
                    </>
                )}
            </div >
        </div >
    )
}

export default Account;