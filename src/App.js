import "./App.css";
import Events from "./components/Events/Events";
import Prefest from "./components/Events/Prefest";
import Gallery from "./components/Gallery/Gallery";
import NavBar from "./components/Navbar/NavBar";
import Explore from "./components/Explore/Explore";
import Landing from "./components/Landing/Landing";
import Sponsors from "./components/Sponsors/Sponsors";
import About from "./components/About/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Talks from "./components/Talks/Talks";
import Competitions from "./components/Competitions/Competitions";
import Workshops from "./components/Workshops/Workshops";
import ProShows from "./components/Proshows/Proshows";
import Contest from "./components/Contest/Contest";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <div>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="explore" element={<Explore />} />
            <Route path="events" element={<Events />} />
            <Route path="gallery" /*/:type/:id/*/ element={<Gallery />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="about" element={<About />} />
            <Route path="talks" element={<Talks />} />
            <Route path="competitions" element={<Competitions />} />
            <Route path="workshops" element={<Workshops />} />
            <Route path="proshows" element={<ProShows />} />
            <Route path="prefest" element={<Prefest />} />
            <Route path="contest/:type/:id" element={<Contest />} />
            <Route path="contest/:type/:id/register" element = {<RegistrationForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
