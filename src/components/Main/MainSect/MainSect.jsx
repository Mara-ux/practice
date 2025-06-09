import './Main.module.css'
import s from './Main.module.css'
import mainBG from "../../../images/main.png"
import mainBGMob from "./../../../images/mainMob.png"

const MainSect = () => {
    return (
            <section className={s.main}>
                <picture className={s.pic}>
                    <source srcSet={mainBGMob} media="(max-width: 1023px)" />
                    <img src={mainBG} alt="" />
                </picture>
            </section>
    );
}

export default MainSect;