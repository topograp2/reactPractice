
import { useEffect, useState } from "react";

import Home from "./routes/Home";
import Details from "./routes/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
