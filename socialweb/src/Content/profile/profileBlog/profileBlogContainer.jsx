import {
  SetProfileBlogItemsAC,
  UpdateCurrentPostTextAC
} from "../../../redux/profileReducer";
import ProfileBlog from "./profileBlog";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    profileBlogItems: state.profile.profileBlogItems,
    currentPostText: state.profile.currentPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    UpdateCurrentPostTextAC: text => {
      dispatch(UpdateCurrentPostTextAC(text));
    },
    SetProfileBlogItemsAC: () => {
      dispatch(SetProfileBlogItemsAC());
    }
  };
};

const ProfileBlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileBlog);

export default ProfileBlogContainer;
