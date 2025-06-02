import { useState } from 'react';
import Card from './../Main/CardRows/Card/Card';
import "./Catalog.module.css"
import s from "./Catalog.module.css"
import Search from "./../../images/search.png"
import card_1 from "./../../images/cards/def.png"
import card_2 from "./../../images/cards/image.png"
import card_3 from "./../../images/cards/image-1.png"
import card_4 from "./../../images/cards/image-2.png"
import card_5 from "./../../images/cards/image-3.png"
import card_6 from "./../../images/cards/image-4.png"
import card_7 from "./../../images/cards/image-5.png"
import card_8 from "./../../images/cards/image-6.png"
import card_9 from "./../../images/cards/image-7.png"
import card_10 from "./../../images/cards/image-8.png"
import card_11 from "./../../images/cards/image-9.png"
import card_12 from "./../../images/cards/image-10.png"



let cardInfo = [
    { img: card_1, tag: "m", name: "DESIRE : UNLEASH", version: "STANDART", group: "ENHYPEN", price: "От 1 900 р" },
    { img: card_2, tag: "m", name: "BUTTER", version: "", group: "BTS", price: "От 2 250 р" },
    { img: card_3, tag: "m", name: "THE WORLD EP.FIN: WILL", version: "STANDART", group: "ATEEZ", price: "От 2 400 р" },
    { img: card_4, tag: "m", name: "SKZHOP HIPTAPE '合 (HOP)'", version: "HIPTAPE", group: "STRAY KIDS", price: "2 300 р" },
    { img: card_5, tag: "m", name: "DESIRE : UNLEASH", version: "ENGENE", group: "ENHYPEN", price: "От 1 350 р" },
    { img: card_6, tag: "m", name: "DESIRE : UNLEASH", version: "Weverse", group: "ENHYPEN", price: "900 р" },
    { img: card_7, tag: "f", name: "BEEP", version: "(QR Album Ver.)", group: "izna", price: "3 500 р" },
    { img: card_8, tag: "m", name: "SKZHOP HIPTAPE '合 (HOP)'", version: "SKZHOP", group: "STRAY KIDS", price: "2 500 р" },
    { img: card_9, tag: "f", name: "BETWEEN 1&2", version: "STANDART", group: "TWICE", price: "2 550 р" },
    { img: card_10, tag: "s", name: "Jack In The Box", version: "Weverse", group: "j-hope", price: "1 000 р" },
    { img: card_11, tag: "mr", name: "P1ece MEMBERSHIP KIT", version: "С членством", group: "P1Harmony", price: "3 500 р" },
    { img: card_12, tag: "mr", name: "Dreamiez plush", version: "with Line Friends", group: "NCT DREAM", price: "2 100 р" },
]


const Catalog = () => {

    const [activeFilter, setActiveFilter] = useState(null)

    const Filter = (tag) => {
        setActiveFilter(tag);
    }

    const filteredCards = activeFilter ? cardInfo.filter(card => card.tag === activeFilter) : cardInfo;

    let cardElements = filteredCards.map(c => <Card img={c.img} name={c.name} version={c.version} group={c.group} price={c.price} />)


    return (
        <div className={s.mainWrapper}>
            <div className={s.navBar}>
                <h3 onClick={() => Filter("m")}>Мужские группы</h3>
                <h3 onClick={() => Filter("f")}>Мужские группы</h3>
                <h3 onClick={() => Filter("s")}>Соло артисты</h3>
                <h3 onClick={() => Filter("mr")}>Мерч</h3>
                <h3 onClick={() => Filter(null)}>Все</h3>
            </div>
            <div className={s.content}>
                <div className={s.input_bar}>
                    <input type="text" />
                    <img src={Search} alt="search" />
                </div>
                <div className={s.cardWrapper}>
                    {cardElements}
                </div>
            </div>
        </div>
    )
}

export default Catalog;