import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
 
function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Banner />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
