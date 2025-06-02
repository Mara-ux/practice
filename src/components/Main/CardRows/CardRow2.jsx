import './CardRow2.module.css'
import s from "./CardRow2.module.css"
import Card from "./Card/Card"
import card_1 from "../../../images/cards/def.png"
import card_2 from "../../../images/cards/image-3.png"
import card_3 from "../../../images/cards/image-4.png"
import card_4 from "../../../images/cards/image-5.png"

let cardInfo = [
    {img: card_1, name: "DESIRE : UNLEASH", version: "STANDART", group: "ENHYPEN", price: "От 1 900 р"},
    {img: card_2, name: "DESIRE : UNLEASH", version: "ENGENE", group: "ENHYPEN", price: "От 1 350 р"},
    {img: card_3, name: "DESIRE : UNLEASH", version: "Weverse", group: "ENHYPEN", price: "900 р"},
    {img: card_4, name: "BEEP", version: "(QR Album Ver.)", group: "izna", price: "3 500 р"},
]

let cardElements = cardInfo.map( c => <Card img={c.img} name={c.name} version={c.version} group={c.group} price={c.price} />)


const CardRow2 = (props) => {
    return (
        <section className={s.hitsection}>
            <h2>{props.title}</h2>
            <div className={s.cardRow}>
                {cardElements}
            </div>
        </section>
    );
}

export default CardRow2;