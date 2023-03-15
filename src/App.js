import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Hero from "./component/Hero";
import Comp from "./component/Comp";
import Servise from "./component/Servise";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Comp/>
     <Servise/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
