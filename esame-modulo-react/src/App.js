
import './App.css';

import Layout from './pages/Layout'
import Carrello from './pages/Carrello'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="carrello" element={<Carrello />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
