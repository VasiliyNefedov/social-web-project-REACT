import {
  SetProfileBlogItemsAC,
} from "../../../redux/profileReducer";
import ProfileBlog from "./profileBlog";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    profileBlogItems: state.profile.profileBlogItems,
    currentPostText: state.profile.currentPostText
  };
};

const ProfileBlogContainer = connect(
  mapStateToProps,
  {SetProfileBlogItemsAC}
)(ProfileBlog);

export default ProfileBlogContainer;
