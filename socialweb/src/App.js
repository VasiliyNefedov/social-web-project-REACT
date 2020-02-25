import React from "react";
import "./App.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Sidebar from "./Sidebar/sidebar";
import Content from "./Content/content";
import UserPic from "./userPic/userPic";

function App() {
  return (
    <div className="App">
      <Header />
      <UserPic />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
