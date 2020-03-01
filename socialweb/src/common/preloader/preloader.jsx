import React from "react";
import preloader from "./../../assets/img/loader.svg";
import style from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.preloader} >
      <img src={preloader} alt="loadind..." />
    </div>
  );
};

export default Preloader;
