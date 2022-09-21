import logo from './logo.svg';
import './App.css';
import Events from './components/events'
import Gallery from './components/gallery'
import NavBar from './components/Navbar/NavBar'
import Explore from './components/explore/Explore'
import Landing from './components/landing'
import Sponsors from './components/sponsors';
import About from './components/About';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Talks from './components/talks/Talks';
import Competitions from './components/competitions/competitions';
import Workshops from './components/workshops/workshops';
import ProShows from './components/proshows/proshows';


function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="explore" element={<Explore />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="sponsors" element={<Sponsors/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="talks" element={<Talks/>}/>
          <Route path="competitions" element={<Competitions/>}/>
          <Route path="workshops" element={<Workshops/>}/>
          <Route path="proshows" element={<ProShows/>}/>
        </Routes>
        </BrowserRouter>
         

      </div>
    </>
  );
}

export default App;