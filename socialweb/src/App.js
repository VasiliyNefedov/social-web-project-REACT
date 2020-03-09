import React from "react";
import "./App.css";
import Footer from "./Footer/footer";
import Sidebar from "./Sidebar/sidebar";
import Content from "./Content/content";
import UserPic from "./userPic/userPic";
import HeaderContainer from "./Header/headerContainer";
import { initializeApp } from "./redux/appReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import Preloader from "./common/preloader/preloader";

class App extends React.Component {
  componentDidMount() {
    return this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="App">
        <HeaderContainer />
        <UserPic />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
