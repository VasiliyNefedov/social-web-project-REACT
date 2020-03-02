import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { setUserProfile } from "./../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { getUserProfile } from "../../API/API";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;

    getUserProfile(userId).then(response => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return (
      <div className="profile">
        <Profile {...this.props} displayProfile={this.props.displayProfile} />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  displayProfile: state.profile.displayProfile
});

let urlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  urlProfileContainer
);
