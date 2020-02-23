import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Sidebar from "./Sidebar/sidebar";
import Content from "./Content/content";
import UserPic from "./userPic/userPic";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <UserPic />
        <Sidebar />
        <Content
          profile={props.state.profile}
          dialogs={props.state.dialogs}
          SetProfileBlogItems={props.SetProfileBlogItems}
          UpdateCurrentPostText={props.UpdateCurrentPostText}
          SetDialogsChatMessages={props.SetDialogsChatMessages}
          UpdateCurrentMessageText={props.UpdateCurrentMessageText}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
