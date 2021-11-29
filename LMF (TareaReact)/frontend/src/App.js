//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//------------------------------------------------------------------------------------------------------------------------------
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Fixture from './pages/Fixture';
import Contact from './pages/Contact';
import Noticias from './pages/Noticias';
import Tabla from './pages/Tabla';
import Teams from './pages/Teams';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/noticias" exact element={<Noticias />} />
        <Route path="/tabla" exact element={<Tabla />} />
        <Route path="/teams" exact element={<Teams />} />
        <Route path="/fixture" exact element={<Fixture />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
