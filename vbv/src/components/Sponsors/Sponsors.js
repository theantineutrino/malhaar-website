import img2 from '../../assets/img2.png';
import bg from '../../assets/bg.png';
import pepsi from '../../assets/pepsi.png';
import coke from '../../assets/coke.png';
import bisleri from '../../assets/bisleri.png';
import microsoft from '../../assets/microsoft.png';
import goldman from '../../assets/goldman.png';
import classes from './Sponsors.module.css';

const Sponsors = () => {
    return (
        <div className={classes.sponsors}>
            <img src={img2} alt="Sponsors" />
            <div className={classes.container2}>
                <img src={img2} alt="Sponsors" />
                <img className={classes.bg2} src={bg} alt="..." />
                <img src={goldman} className={classes.goldman} alt="Goldman" />
                <h2>GOLDMAN SACHS</h2>
                <h3>Co Presented by :</h3>
                <img className={classes.pepsi} src={pepsi} alt="pepsi" />
                <h4>Pepsi</h4>
                <img className={classes.coke} src={coke} alt="Coca Cola" />
                <h5>Coca Cola</h5>
                <img className={classes.bisleri} src={bisleri} alt="Bisleri" />
                <h6>Bisleri</h6>
                <h1>Powered by :</h1>
                <img className={classes.microsoft} src={microsoft} alt="Microsoft" />
                <span className={classes.micro}>MICROSOFT</span>
                <h7>Publicity Sponsors :</h7>
                <img className={classes.pep} src={pepsi} alt="Pepsi" />
                <span className={classes.peptxt}>Pepsi</span>
                <img className={classes.coca} src={coke} alt="Coca Cola" />
                <span className={classes.coketxt}>Coca Cola</span>
                <img className={classes.bis} src={bisleri} alt="Bisleri" />
                <span className={classes.bistxt}>Bisleri</span>
                <img className={classes.micros} src={microsoft} alt="Microsoft" />
                <span className={classes.microstxt}>MICROSOFT</span>
                <img className={classes.gold} src={goldman} alt="Goldman" />
                <span className={classes.goldtxt}>GOLDMAN</span>
            </div>
        </div>
    );
};

export default Sponsors;