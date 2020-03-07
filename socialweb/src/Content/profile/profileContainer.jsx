import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import {
  setUserProfile,
  getUserProfile,
  getUserStatus,
  updateUserStatus
} from "./../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.authorisedId;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return (
      <div className="profile">
        <Profile
          {...this.props}
          isFetching={this.props.isFetching}
          status={this.props.status}
          displayProfile={this.props.displayProfile}
          updateUserStatus={this.props.updateUserStatus}
        />
      </div>
    );
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = state => ({
  displayProfile: state.profile.displayProfile,
  authorisedId: state.auth.id,
  status: state.profile.status,
  isFetching: state.profile.isFetching
});

// let urlProfileContainer = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { setUserProfile, getUserProfile })(
//   urlProfileContainer
// );

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getUserStatus,
    updateUserStatus
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
