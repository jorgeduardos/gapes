import "./styles/main.scss";
import Monke from "./pages/Monke";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Migration from "./pages/Migration";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Top from "./components/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./getLibrary";

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="monke" element={<Monke />} />
          <Route exact path="migration" element={<Migration />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Top />
        <Footer />
      </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;
