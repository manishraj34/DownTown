// import logo from './logo.svg';
import './App.css';
// import Accordion from './component/Accordion';
import Home from './component/Home';
import Last from './component/Last';
import Navbar from './component/Navbar';
import Property from './component/Property';
import Services from './component/Services';
import Work from './component/Work';



function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Property/>
      <Services/>
      <Work />
      {/* <Accordion/> */}
      <Last/>
      
    </>
  );
}

export default App;
