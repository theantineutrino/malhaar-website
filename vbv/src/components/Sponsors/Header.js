import img1 from '../../assets/img1.png';
import logo from '../../assets/logo.png';
import bg from '../../assets/bg.png';
import classes from './Header.module.css';
import { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <div className={classes.header}>
                <img className={classes.logo} src={logo} alt="Logo" />
                <img className={classes.img1} src={img1} alt="Supporters" />
                <div className={classes.container}>
                    <img className={classes.bg} src={bg} alt="..." />
                    <h1>Our Supporters</h1>
                    <h2>SPONSORS AND PARTNERS</h2>
                    <h3>Presented by :</h3>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;