import Events from "./components/Events";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Portal from "./components/Portal";
import Programs from "./components/Programs";
import {banner, linksNav, events, programs,portal} from './data'
import './App.css';
import ConfigState from './context/configGeneral/configState';
function App() {
  return (
    <div>
      <ConfigState>
        <Navbar links={linksNav}/>
        <section className="banner" style={{backgroundImage:`url(${banner.image})`}}></section>
        <Portal images={portal}/>
        <Programs programs={programs}/>
        <Events events = {events}/>
        <Map/>
        <Footer/>
      </ConfigState>
    </div>
  );
}

export default App;
