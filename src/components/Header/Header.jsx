import MainNav from './MainNav/MainNav'
import s from './Header.module.css'


const Header = () => {
    return(
        <div className={s.header}>
            <MainNav />
        </div>
    )
};

export default Header;