import React from "react";
import Preloader from "../../../common/preloader/preloader";
import style from "./profileInfo.module.css";
import defaultPic from "../../../assets/img/defaultPic.png"

const ProfileInfo = props => {
  return props.displayProfile ? (
    <div className={style.profileInfo}>
      <div className={style.userPic}>
        <img src={props.displayProfile.photos.large ? props.displayProfile.photos.large : defaultPic} alt="user" />
      </div>
      <div className={style.description}>
        <div className={style.fullName}>{props.displayProfile.fullName}</div>
        <div>About me: {props.displayProfile.aboutMe}</div>
        <div>
          {props.displayProfile.lookingForAJob
            ? "I am looking for a job"
            : "I am don't looking for a job"}
        </div>
        <div>{props.displayProfile.lookingForAJobDescription}</div>
        <div>My contacts:</div>
        <div>
          {props.displayProfile.contacts.website
            ? `My website: ${props.displayProfile.contacts.website}`
            : "I have no website"}
        </div>
        <div>
          {props.displayProfile.contacts.facebook
            ? `My facebook: ${props.displayProfile.contacts.facebook}`
            : "I have no facebook"}
        </div>
        <div>
          {props.displayProfile.contacts.vk
            ? `My vk: ${props.displayProfile.contacts.vk}`
            : "I have no vk"}
        </div>
        <div>
          {props.displayProfile.contacts.twitter
            ? `My twitter: ${props.displayProfile.contacts.twitter}`
            : "I have no twitter"}
        </div>
        <div>
          {props.displayProfile.contacts.instagram
            ? `My instagram: ${props.displayProfile.contacts.instagram}`
            : "I have no instagram"}
        </div>
        <div>
          {props.displayProfile.contacts.youtube
            ? `My youtube: ${props.displayProfile.contacts.youtube}`
            : "I have no youtube"}
        </div>
        <div>
          {props.displayProfile.contacts.github
            ? `My github: ${props.displayProfile.contacts.github}`
            : "I have no github"}
        </div>
        <div>
          {props.displayProfile.contacts.mainLink
            ? `My mainLink: ${props.displayProfile.contacts.mainLink}`
            : "I have no mainLink"}
        </div>
      </div>
    </div>
  ) : (
    <Preloader />
  );
};

export default ProfileInfo;
