import "./Account.module.css"
import s from "./Account.module.css"
import Img from "./../../images/av.png"

const Account = () => {
    return(
        <div className={s.MainWrapper}>
            <div className={s.bar}>
                <img src={Img} alt="" />
                <ul>
                    <li>Марина</li>
                </ul>
            </div>
            <div className={s.ifo}>
                <h2>Личный кабинет</h2>
                <div className={s.wrapper}>
                    <div className={s.info_box}>
                    <h4>Личная информация</h4>
                    <li>Имя: Марина</li>
                    <li>Отчество: Александровная</li>
                    <li>Фамилия: Казанцева</li>
                    <li>Номер: +7(953)804-31-93</li>
                    <li>E-mail: marina.kazsntseva.2005@gmail.com</li>
                    </div>
                </div>
                <div className={s.wrapper}>
                    <div className={s.info_box}>
                    <h4>Адрес</h4>
                    <li>Область: Новосибирская</li>
                    <li>Город: Новосибирск</li>
                    <li>Улица: Зорге</li>
                    <li>Дом: 17</li>
                    <li>Квартира: 55</li>
                    <li>Индекс: 630088</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;