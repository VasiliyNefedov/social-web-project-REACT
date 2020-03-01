import React from "react";
import "./App.css";
import Footer from "./Footer/footer";
import Sidebar from "./Sidebar/sidebar";
import Content from "./Content/content";
import UserPic from "./userPic/userPic";
import HeaderContainer from "./Header/headerContainer";

function App() {
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

export default App;
