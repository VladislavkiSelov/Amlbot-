import React from "react";
import MainPage from "./page/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}
