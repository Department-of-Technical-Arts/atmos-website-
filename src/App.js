import logo from './logo.svg';
import './App.css';
import Events from './components/events'
import Gallery from './components/gallery'
import NavBar from './components/Navbar/NavBar'
import Explore from './components/explore/Explore'

const linksArray= ['Home','Blog']

function App() {
  return (
    <>
      <div className="App">
        <NavBar links= { linksArray}/>
        <Explore />
        {/* <Events/> */}
        {/* <Gallery/> */}
      </div>
    </>
  );
}

export default App;
