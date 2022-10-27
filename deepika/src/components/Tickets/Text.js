import React, { Fragment } from 'react';
import classes from './Text.module.css';
import img from '../../assests/logo 4.png';
const Text = () => {
    return (
      <div>
           <div className={classes.img}>
                <img src={img} alt="Logo" />
            </div>
            <div>
                <h1 className={classes.ticket}>Tickets</h1>
                <p className={classes.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue justo, porttitor vitae felis nec, molestie sodales mi. Suspendisse eget aliquam ex, mollis lacinia nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue justo, porttitor vitae felis nec, molestie sodales mi. Suspendisse eget aliquam ex, mollis lacinia nunc.</p>
            </div>
          
      </div>
            
        

    )
}

export default Text