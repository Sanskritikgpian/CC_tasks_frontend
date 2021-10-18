import React from "react";
import "./App.css";
// components
import Nav from "./components/nav/Nav"
// import Blog from "./components/blog/main/Blog"
import Appointment from "./components/appointment/main/Appointment"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div className="app">
      <Nav />
      {/* <Blog /> */}
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
