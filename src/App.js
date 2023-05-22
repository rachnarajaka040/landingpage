import logo from './logo.svg';
import './App.css';
import Footer from './Component/Footer/Header';
import Navbar from './Component/Navbar/Navbar';
import HeaderOne from './Component/First-heading/HeaderOne';
import HeaderTwo from './Component/Second-heading/HeaderTwo';
import HeaderThree from './Component/Third-heading/HeaderThree';
import HeaderFour from './Component/Fourth-heading/HeaderFour';
import HeaderFive from './Component/Five-heading/HeaderFive';
import HeaderSix from './Component/Six-heading/HeaderSix';
import HeaderSven from './Component/Seven-heading/HeaderSven';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <HeaderOne/>
       <HeaderTwo/>
      <HeaderThree/>
      <HeaderFour/>
      <HeaderFive/>
      <HeaderSix/>
      <HeaderSven/>
      <Footer/>
     
    </div>
  );
}

export default App;
