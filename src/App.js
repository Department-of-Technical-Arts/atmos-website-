import "./App.css";
import Events from "./components/Events/Events";
import Passes from "./components/Events/Passes";
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
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Papa from "papaparse"
import { Actions } from "./redux";
import P404page from "./components/Contest/404page";
import Schedule from "./components/Schedule/Schedule";

const App = () => {

  const dispatch = useDispatch ()
  useEffect (() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQDM_B5Mbm4oE1Xn9e_lCYAS5eIWJi-Q-lCbsNsAcLPI-vxasaFAI0NeJQNfU8Mlvx2dXKZpvt99yS_/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
          dispatch(Actions.initializeCompetitions(results.data))
      }
    })

    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTbwA6Nvy_YMR6psLNstZpoNM6vOOfO7TGEjiyrNHfGqkK_okk-3FraMri13nxR_x4V1l5alSQmQ8Co/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        dispatch(Actions.initializeWorkshops(results.data))
      }
    })

    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSDPINaf2CxbAiYXoaT1G9tEXFZKUHVW9qYG9tucZMTdztvGPQIzI80sPGzRyZRtA4nMyfVWcXsS_BZ/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        dispatch(Actions.initializePreFest(results.data))
      }
    })

    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSVt-nPXHT6ciUPC3NkanTXylF6Hb9UlPhSNsdxz_HdaRgyiYa6wQ3esMNYGgvrlltDMrcfwLQES1sX/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        dispatch(Actions.initializeTalks(results.data))
      }
    })


  }, [])
  return (
    <div>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="explore" element={<Explore />} />
            <Route path="events" element={<Events />} />
            <Route path="passes" element={<Passes />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="about" element={<About />} />
            <Route path="talks" element={<Talks />} />
            <Route path="competitions" element={<Competitions />} />
            <Route path="workshops" element={<Workshops />} />
            <Route path="proshows" element={<ProShows />} />
            <Route path="prefest" element={<Prefest />} />
            <Route path="404" element={<P404page />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="contest/:type/:id" element={<Contest />} />
            <Route path="contest/:type/:id/register" element = {<RegistrationForm />} />
            <Route path="*" element={<P404page />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
