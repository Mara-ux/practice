import "./Footer.module.css"
import s from "./Footer.module.css"
import InfoColon from './InfoColons/InfoColon';

const Footer = () => {
    return(
        <section className={s.footer}>
            <InfoColon title="Информация" link1="О нас" link2="Доставка и оплата" link3="Каталог" link4="Контакты"/>
            <InfoColon title="Личный кабинет" link1="Войти" link2="Регистрация" link3="Забыли пароль?" link4="Карзина"/>
            <InfoColon title="Мы в соц сетях" link1="ВКонтакте" link2="Телеграм" link3="" link4=""/>
        </section>
    )
}

export default Footer;