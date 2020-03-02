import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { SetAuthUserData } from "./../redux/authReducer";
import { getAuth } from "../API/API";

class HeaderContainer extends React.Component {
  componentDidMount() {
    getAuth().then(response => {
      if (response.data.resultCode === 0) {
        this.props.SetAuthUserData(response.data.data);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { SetAuthUserData })(HeaderContainer);
