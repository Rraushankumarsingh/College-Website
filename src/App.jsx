import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { LogIn } from "./LogIn";
import { Errorpage } from "./Errorpage";
// import { Registion } from "./Registion";
// import {PrivateRoute} from './PrivateRoute'
import { Header } from "./Component/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} /> {/* Fix: added equal sign after element */}
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/Registion" element={<Registion />} /> */}
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
