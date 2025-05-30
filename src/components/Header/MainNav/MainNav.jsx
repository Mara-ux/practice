import './MainNav.module.css';
import logo from './../../../images/logo.png'
import s from './MainNav.module.css'

const MainNav = () => {
    return(
        <div className={s.mainNav}>
            <img src={logo} alt="logo" />
        </div>
    )
};

export default MainNav;