import Links from './links';
import Logo from './logo';
import Personal from './poersonal';
const TopBar = ({a, b, c, d}) => {
    return(
        <div className="top-bar">
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

export default TopBar;