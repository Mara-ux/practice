import "./PopCard.module.css"
import s from "./PopCard.module.css"
import temperoriCard from "./../../images/cards/def.png"
import SmolBtn from './../Main/CardRows/Card/SmolBtn';

const PopCard = (props) => {
    return (
        <div className={s.pop}>
            <div className={s.flexWrapper}>
                <div className={s.sliderWrapper}>
                    <img src={temperoriCard} alt="" />
                </div>
                <div className={s.mainInfo}>
                    <div className={s.name}>
                        <h4>DESIRE : UNLEASH</h4>
                        <h5>STANDART</h5>
                        <h5>ENHYPEN</h5>
                    </div>

                    <div className={s.block}>
                        <h5>1 800</h5>
                        <SmolBtn />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PopCard;