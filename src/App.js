import logo from './logo.svg';
import './App.css';
import Events from './components/events'
import Gallery from './components/gallery'
import NavBar from './components/Navbar/NavBar'
import Explore from './components/explore/Explore'
import Landing from './components/landing'
import Sponsors from './components/sponsors';
import About from './components/About';

const linksArray= ['Home','Blog']

function App() {
  return (
    <>
      <div className="App">
        <NavBar links= { linksArray}/>
        {/* <Landing/> */}
        <About/>
        {/* <Explore /> */}
        {/* <Sponsors/> */}
        {/* <Events/> */}
        {/* <Gallery/> */}

      </div>
    </>
  );
}

export default App;
