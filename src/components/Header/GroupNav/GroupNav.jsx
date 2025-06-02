import './GroupNav.module.css'
import s from './GroupNav.module.css'
import { NavLink } from 'react-router-dom';

const GroupNav = () => {
    return(
        <div className={s.GroupNav}>
            <NavLink to="/catalog">Мужские группы</NavLink>
            <NavLink to="/catalog">Женские группы</NavLink>
            <NavLink to="/catalog">Соло артисты</NavLink>
            <NavLink to="/catalog">Мерч</NavLink>
        </div>
    );
};

export default GroupNav;