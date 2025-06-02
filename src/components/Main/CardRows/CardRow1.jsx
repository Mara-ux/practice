import './CardRow1.module.css'
import s from "./CardRow1.module.css"
import Card from "./Card/Card"
import card_1 from "../../../images/cards/def.png"
import card_2 from "../../../images/cards/image.png"
import card_3 from "../../../images/cards/image-1.png"
import card_4 from "../../../images/cards/image-2.png"
import PopCard from './../../PopCard/PopCard';

            
let cardInfo = [
    {img: card_1, id: "c1", name: "DESIRE : UNLEASH", version: "STANDART", group: "ENHYPEN", price: "От 1 900 р"},
    {img: card_2, id: "c2", name: "BUTTER", version: "", group: "BTS", price: "От 2 250 р"},
    {img: card_3, id: "c3", name: "THE WORLD EP.FIN: WILL", version: "STANDART", group: "ATEEZ", price: "От 2 400 р"},
    {img: card_4, id: "c4", name: "SKZHOP HIPTAPE '合 (HOP)'", version: "HIPTAPE", group: "STRAY KIDS", price: "2 300 р"},
]

let cardElements = cardInfo.map( c => <Card popoverid={c.id} img={c.img} name={c.name} version={c.version} group={c.group} price={c.price} />)

const CardRow1 = (props) => {
    return (
        <section className={s.hitsection}>
            <h2>{props.title}</h2>
            <div className={s.cardRow}>
                {cardElements}
            </div>
            <PopCard />
        </section>
    );
}

export default CardRow1;