import React, { useState } from "react";
import classes from "./ImageCarousal.module.css";
import "./Image.css";
import { images } from "../ImageCarousal/Images";
const ImageCarousal = () => {
  const [i, setI] = useState(0);
  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <img className={classes} src={images[i].img} />
        <div>
          <button
            className={classes.btn}
            onClick={() => {
              if (i === 0) setI(images.length - 1);
              else setI(i - 1);
            }}
          ></button>
          <button
            className={classes.btn}
            onClick={() => {
              if (i === images.length - 1) setI(0);
              else setI(i + 1);
            }}
          ></button>
        </div>
        </div>
        <div className={classes.content}>
          <div className={classes.box}>
            <h3>{images[i].title}</h3>
            <p>{images[i].text}</p>
            <button className={classes.register}
            >Register</button>
          </div>
        </div>
      
    </div>
  );
};

export default ImageCarousal;
