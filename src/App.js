import './styles/main.scss';
import Monke from './pages/Monke';
import Home from './pages/Home';
import Error from './pages/Error';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="monke" element={<Monke />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
