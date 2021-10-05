import Links from './Links';
import Logo from './Logo';
import Personal from './Personal';
import './Navbar.css'

const TopMenu = () => {
    return(
        <div className="top-menu">
            <Logo />
            <div className="menu">
            <Links  value = "products"/>
            <Links  value = "story"/>
            <Links  value = "manufacturing"/>
            <Links  value = "packaging"/>
            <Personal src="basket.png"/>
            <Personal src="person.png"/>
            </div>
        </div>
    )
}

export default TopMenu;