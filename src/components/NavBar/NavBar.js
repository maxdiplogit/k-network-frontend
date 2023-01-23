// Styles
import classes from './NavBar.module.css';


const NavBar = () => {
    return (
        <div className={ classes.navBar }>
            <div>
                <h1>Kisan Network</h1>
            </div>
            <div className={ classes.ghLink }>
                <a href='https://github.com/maxdiplogit/k-network-frontend' target='_blank'>GitHub</a>
            </div>
        </div>
    );
};


export default NavBar;