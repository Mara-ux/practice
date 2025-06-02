import InfoL from "./../Info/InfoL"
import "./About.module.css"
import s from "./About.module.css"
import AdwentColon from './AdwentColon/AdwentColon';
import i1 from "./../../images/icons/AdwentIcon01.png"
import i2 from "./../../images/icons/AdwentIcon02.png"
import i3 from "./../../images/icons/AdwentIcon03.png"
import i4 from "./../../images/icons/AdwentIcon04.png"

let AdwantInfo =[
    {img: i1, text: "Оригинальные альбомы и мерч из Кореи, Японии и Китая"},
    {img: i2, text: "Работаем с поставщиками со всей азии"},
    {img: i3, text: "Доставка по всей России и снг"},
    {img: i4, text: "Предзаказ под каждый запрос — никаких залежавшихся остатков"}
]

let AdwentColonItem = AdwantInfo.map(a => <AdwentColon img={a.img} text={a.text}/>)

const About = () => {
    return (
        <section className={s.about}>
            <InfoL
                direction="left"
                name="О нас"
                text1="Карнавал — это онлайн-магазин, где каждый поклонник корейской, японской и китайской культуры может заказать любимые альбомы и мерч напрямую из Азии."
                text2="Мы специализируемся на предзаказе оригинальной продукции из Кореи — все альбомы поступают к нам напрямую от официальных поставщиков. Также мы принимаем заказы на эксклюзивные товары из Японии и Китая."
                text3="У нас нет складских остатков и физических точек продаж — каждая позиция заказывается индивидуально под клиента, поэтому вы получаете новый, нераспакованный товар, доставленный специально для вас."
            />
            <h1 className={s.why}>Почему Карнавал?</h1>
            <div className={s.adw_wrapper}>  
                {AdwentColonItem}
            </div>
        </section>
    )
}

export default About;