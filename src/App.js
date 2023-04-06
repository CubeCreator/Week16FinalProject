//Import the needed requirements
import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import CharacterPage from './components/CharacterPage';
import WeaponsPage from './components/WeaponsPage';
import PowersPage from './components/PowersPage';

function App() {
  return (
    //Create a Navbar that will switch between three components that hold all the information and components for each page
    <div className="App">
      {/* This is the header and Navbar of the Page*/}
      <h1>Final Project Assignment</h1>
      <br />
      <Navbar bg="light" expand="lg">
        <Nav>
          <Nav.Link to="/">Character</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/Weapons">Weapons</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/Powers">Powers</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      {/* This is where the Page Elements are changed based on the React Router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterPage />}/>
          <Route path="/Weapons" element={<WeaponsPage />}/>
          <Route path="/Powers" element={<PowersPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
