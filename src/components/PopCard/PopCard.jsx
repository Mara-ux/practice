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
                    <div className={s.btnwrapper}>
                        <p className={s.verBtn}>MAKE</p>
                    </div>
                    <div className={s.block}>
                        <h5>1 800</h5>
                        <SmolBtn />
                    </div>
                </div>
            </div>
            <div className={s.otherInfo}>
                <div className={s.colon}>
                    <h6>Наполнение</h6>
                    <ul>
                        <li>фотобук: make ver. (80 стр), you, mine ver (72 стр.)</li>
                    </ul>
                </div>
                <div className={s.colon}>
                    <h6>подарки за предзаказ</h6>
                    <p>За альбом:</p>
                    <ul>
                        <li>Рандом карта (1 из 7)</li>
                    </ul>
                    <p>За сет:</p>
                    <ul>
                        <li>Рандом карта (3 из 7)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PopCard;