import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import InicioAcademia from "./pages/InicioAcademia";
import Nosotros from "./pages/Nosotros";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<InicioAcademia />} />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
