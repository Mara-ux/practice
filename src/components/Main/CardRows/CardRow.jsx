import './CardRow.module.css'
import s from "./CardRow.module.css"
import Card from "./Card/Card"
import cardInfo from '../../../Data';
import { useState } from 'react';
import PopCard from './../../PopCard/PopCard';

const CardRow = (props) => {

    const [selectedCard, setSelectedCard] = useState(null);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const addToCart = (cardId) => {
        const card = cardInfo.find(c => c.id === cardId);

        setSelectedCard(card);
        setIsPopoverOpen(true)
    }

    const closePopover =() =>{
        setIsPopoverOpen(false)
    }

    let cardElements = cardInfo
    .filter(c => c.extraTags && c.extraTags.includes(props.extraTags))
    .map( c => <Card id={c.id} img={c.img} name={c.name} version={c.version} group={c.group} price={c.price} onAddToCart={addToCart} />)

    return (
        <section className={s.hitsection}>
            <h2>{props.title}</h2>
            <div className={s.cardRow}>
                {cardElements}
            </div>
            {isPopoverOpen && (
                <div>
                    <PopCard card={selectedCard}
                    onClose={closePopover}/>
                </div>
            )}
        </section>
    );
}

export default CardRow;