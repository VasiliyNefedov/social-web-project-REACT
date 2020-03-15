import React from "react";
import Preloader from "../../../common/preloader/preloader";
import style from "./profileInfo.module.css";
import defaultPic from "../../../assets/img/defaultPic.png";

const ProfileInfo = React.memo(({displayProfile}) => {
  console.log("render profileInfo");
  return displayProfile ? (
    <div className={style.profileInfo}>
      <div className={style.userPic}>
        <img
          src={
            displayProfile.photos.large
              ? displayProfile.photos.large
              : defaultPic
          }
          alt="user"
        />
      </div>
      <div className={style.description}>
        <div className={style.fullName}>{displayProfile.fullName}</div>
        <div>About me: {displayProfile.aboutMe}</div>
        <div>
          {displayProfile.lookingForAJob
            ? "I am looking for a job"
            : "I am don't looking for a job"}
        </div>
        <div>{displayProfile.lookingForAJobDescription}</div>
        <div>My contacts:</div>
        <div>
          {displayProfile.contacts.website
            ? `My website: ${displayProfile.contacts.website}`
            : "I have no website"}
        </div>
        <div>
          {displayProfile.contacts.facebook
            ? `My facebook: ${displayProfile.contacts.facebook}`
            : "I have no facebook"}
        </div>
        <div>
          {displayProfile.contacts.vk
            ? `My vk: ${displayProfile.contacts.vk}`
            : "I have no vk"}
        </div>
        <div>
          {displayProfile.contacts.twitter
            ? `My twitter: ${displayProfile.contacts.twitter}`
            : "I have no twitter"}
        </div>
        <div>
          {displayProfile.contacts.instagram
            ? `My instagram: ${displayProfile.contacts.instagram}`
            : "I have no instagram"}
        </div>
        <div>
          {displayProfile.contacts.youtube
            ? `My youtube: ${displayProfile.contacts.youtube}`
            : "I have no youtube"}
        </div>
        <div>
          {displayProfile.contacts.github
            ? `My github: ${displayProfile.contacts.github}`
            : "I have no github"}
        </div>
        <div>
          {displayProfile.contacts.mainLink
            ? `My mainLink: ${displayProfile.contacts.mainLink}`
            : "I have no mainLink"}
        </div>
      </div>
    </div>
  ) : (
    <Preloader />
  );
});

export default ProfileInfo;
