import "./App.css";
import { useState, useEffect } from "react";
import Pokedex from "./components/pokedex/pokedex.jsx";
import { Route, Routes } from "react-router-dom";
import PokedexDetails from "./components/pokedexDetails/pokedexDetails.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokedexDetails />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  );
}

export default App;
