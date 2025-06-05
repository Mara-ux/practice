import { useState } from 'react';
import Card from './../Main/CardRows/Card/Card';
import "./Catalog.module.css"
import s from "./Catalog.module.css"
import Search from "./../../images/search.png"
import cardInfo from './../../Data';
import PopCard from './../PopCard/PopCard';



const Catalog = () => {

    const [activeFilter, setActiveFilter] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")

    const handleFilterClick = (tag) => {
        setActiveFilter(tag);
    }
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }
    const handleSearchClick = () => {
        console.log(searchTerm)
    }

    const filteredCards = cardInfo.filter(card => {
        const matchesFilter = !activeFilter || card.tag === activeFilter;
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = searchTerm === "" ||
            card.name.toLowerCase().includes(searchLower) ||
            card.group.toLowerCase().includes(searchLower);
        return matchesFilter && matchesSearch;
    });

    const [selectedCard, setSelectedCard] = useState(null);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const addToCart = (cardId) => {
        const card = cardInfo.find(c => c.id === cardId);

        setSelectedCard(card);
        setIsPopoverOpen(true)
    }

    const closePopover = () => {
        setIsPopoverOpen(false)
    }

    let cardElements = filteredCards.map(c => <Card id={c.id} img={c.img} name={c.name} version={c.version} group={c.group} price={c.price} onAddToCart={addToCart} />)

    return (
        <div className={s.mainWrapper}>
            <div className={s.navBar}>
                <h3 className={activeFilter === "m" ? s.active : ""} onClick={() => handleFilterClick("m")}>Мужские группы</h3>
                <h3 className={activeFilter === "f" ? s.active : ""} onClick={() => handleFilterClick("f")}>Женские группы</h3>
                <h3 className={activeFilter === "s" ? s.active : ""} onClick={() => handleFilterClick("s")}>Соло артисты</h3>
                <h3 className={activeFilter === "mr" ? s.active : ""} onClick={() => handleFilterClick("mr")}>Мерч</h3>
                <h3 className={activeFilter === null ? s.active : ""} onClick={() => handleFilterClick(null)}>Все</h3>
            </div>
            <div className={s.content}>
                <div className={s.input_bar}>
                    <input type="text" value={searchTerm} onChange={handleSearchChange} />
                    <img onClick={handleSearchClick} src={Search} alt="search" />
                </div>
                <div className={s.cardWrapper}>
                    {cardElements}
                    {isPopoverOpen && (
                        <div>
                            <PopCard card={selectedCard}
                                onClose={closePopover} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Catalog;