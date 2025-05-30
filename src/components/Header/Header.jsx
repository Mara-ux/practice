import MainNav from './MainNav/MainNav'
import s from './Header.module.css'
import GroupNav from './GroupNav/GroupNav'

const Header = () => {
    return(
        <div className={s.header}>
            <MainNav />
            <GroupNav />
        </div>
    )
};

export default Header;