
import { useEffect, useState } from "react";

import Home from "./routes/Home";
import Details from "./routes/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path={`/movie/:id`} element={<Details />} />
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
    </Routes>
  </Router>
  );
}


export default App;
