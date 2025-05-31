import './Main.module.css'
import s from './Main.module.css'
import mainBG from "../../../images/main.png"


const MainSect = () => {
    return(
        <div>
            <section className={s.main}>
                <img src={mainBG} alt="" />
            </section>
        </div>
    );
}

export default MainSect;