import './CardRow1.module.css'
import s from "./CardRow1.module.css"
import Card from "./Card/Card"
import card_1 from "../../images/cards/def.png"
import card_2 from "../../images/cards/image-1.png"
import card_3 from "../../images/cards/image-2.png"
import card_4 from "../../images/cards/image-3.png"



const CardRow1 = (props) => {
    return (
        <section className={s.hitsection}>
            <h2>{props.title}</h2>
            <div className={s.cardRow}>
                <Card img={card_1} name="DESIRE : UNLEASH" version="STANDART" group="ENHYPEN" price="От 1 900 р" />
                <Card img={card_2} name="BUTTER" version="" group="BTS" price="От 2 250 р" />
                <Card img={card_3} name="THE WORLD EP.FIN: WILL" version="STANDART" group="ATEEZ" price="От 2 400 р" />
                <Card img={card_4} name="SKZHOP HIPTAPE '合 (HOP)'" version="HIPTAPE" group="Stray Kids" price="2 300 р" />
            </div>
        </section>
    );
}

export default CardRow1;