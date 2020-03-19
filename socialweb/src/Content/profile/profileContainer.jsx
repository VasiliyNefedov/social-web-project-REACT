import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import {
  setUserProfile,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfileInfo,
  setProfileEditMode
} from "./../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.authorisedId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <div className="profile">
        <Profile
          saveProfileInfo={this.props.saveProfileInfo}
          {...this.props}
          isOwner={!this.props.match.params.userId}
          isFetching={this.props.isFetching}
          status={this.props.status}
          displayProfile={this.props.displayProfile}
          updateUserStatus={this.props.updateUserStatus}
          savePhoto={this.props.savePhoto}
        />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  isProfileEdit: state.profile.isProfileEdit,
  displayProfile: state.profile.displayProfile,
  authorisedId: state.auth.id,
  status: state.profile.status,
  isFetching: state.profile.isFetching
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfileInfo,
    setProfileEditMode
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
