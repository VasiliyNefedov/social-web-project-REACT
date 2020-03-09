import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { getAuth, setLogout } from "./../redux/authReducer";

class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getAuth();
  // }
  logout = () => {
    this.props.setLogout();
  };
  render() {
    return <Header {...this.props} logout={this.logout} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isFetching: state.auth.isFetching
});

export default connect(mapStateToProps, { getAuth, setLogout })(
  HeaderContainer
);
