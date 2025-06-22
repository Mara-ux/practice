import "./Footer.module.css"
import s from "./Footer.module.css"
import InfoColon from './InfoColons/InfoColon';

const Footer = () => {
    return (
        <section className={s.footer}>
            <InfoColon title="Информация"
                link1='/about' link2='/shipment' link3='/catalog' link4='/contacts'
                linkName1="О нас" linkName2="Доставка и оплата" linkName3="Каталог" linkName4="Контакты" />
            <InfoColon title="Личный кабинет"
                link1='/account' link2='/cart' link3='/' link4='/'
                linkName1="Личный кабинет" linkName2="Карзина"/>
            <InfoColon title="Мы в соц сетях"
                link1='/' link2='/' link3='/' link4='/'
                linkName1="ВКонтакте" linkName2="Телеграм" linkName3="" linkName4="" />
        </section>
    )
}

export default Footer;