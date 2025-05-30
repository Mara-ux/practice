import './GroupNav.module.css'
import s from './GroupNav.module.css'

const GroupNav = () => {
    return(
        <div className={s.GroupNav}>
            <p>Мужские группы</p>
            <p>Женские группы</p>
            <a href="">Соло артисты</a>
            <a href="">Фан мерч</a>
        </div>
    );
};

export default GroupNav;