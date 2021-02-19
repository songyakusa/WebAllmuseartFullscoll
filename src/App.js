import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Routes from "./Components/Route/index";
import Home from "./Pages/Home/index";
import Exhibition from "./Pages/Exhibition/index";
import Technology from "./Pages/Technology/index";
import About from "./Pages/About/index";
import Customer from "./Pages/Customer/index";
import Contact from "./Pages/Contact/index";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Exhibition />
      <Technology />
      <About />
      <Customer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// import React, { Component } from 'react'
// import './App.css';
// import { withTranslation } from 'react-i18next';
// import i18next from 'i18next';

// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import Home from "./Pages/Home/index";
// import Test from "./Pages/test/index.js";

// class App extends Component {

//   handleClick(lang) {
//     i18next.changeLanguage(lang)
//   }

//   render() {
//     const { t } = this.props;

//     return (
//       <div >
//         <Header/>
//         <Home/>
//         <Test/>
//         <Footer/>

//       </div>
//     )
//   }
// }

// export default withTranslation()(App);
