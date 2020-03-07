import React from "react";
import preloader from "./../../assets/img/loaderMini.svg";
import style from "./preloaderMini.module.css";

const PreloaderMini = () => {
  return (
    <div className={style.preloader} >
      <img src={preloader} alt="loadind..." />
    </div>
  );
};

export default PreloaderMini;
