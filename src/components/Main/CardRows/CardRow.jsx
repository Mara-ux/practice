import './CardRow.module.css'
import s from "./CardRow.module.css"
import Card from "./Card/Card"
import cardInfo from '../../../Data';





const CardRow = (props) => {

    let cardElements = cardInfo
    .filter(c => c.extraTags && c.extraTags.includes(props.extraTags))
    .map( c => <Card img={c.img} name={c.name} version={c.version} group={c.group} price={c.price} />)

    return (
        <section className={s.hitsection}>
            <h2>{props.title}</h2>
            <div className={s.cardRow}>
                {cardElements}
            </div>

        </section>
    );
}

export default CardRow;