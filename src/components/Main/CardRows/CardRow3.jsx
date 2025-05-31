import './CardRow2.module.css'
import s from "./CardRow2.module.css"
import Card from "./Card/Card"
import card_1 from "../../../images/cards/image-2.png"
import card_2 from "../../../images/cards/image-6.png"
import card_3 from "../../../images/cards/image-7.png"
import card_4 from "../../../images/cards/image-8.png"



const CardRow3 = (props) => {
    return (
        <section className={s.hitsection}>
            <h2>{props.title}</h2>
            <div className={s.cardRow}>
                <Card img={card_1} name="SKZHOP HIPTAPE '合 (HOP)'" version="HIPTAPE" group="Stray Kids" price="2 300 р" />
                <Card img={card_2} name="SKZHOP HIPTAPE '合 (HOP)'" version="SKZHOP" group="Stray Kids" price="2 500 р" />
                <Card img={card_3} name="BETWEEN 1&2" version="STANDART" group="TWICE" price="2 550 р" />
                <Card img={card_4} name="Jack In The Box" version="Weverse" group="j-hope " price="1 000 р" />
            </div>
        </section>
    );
}

export default CardRow3;