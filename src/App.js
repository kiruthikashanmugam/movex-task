import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from "./components/Section3";
import Footer from "./components/Footer"



function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>


       
    </div>
  );
}

export default App;
