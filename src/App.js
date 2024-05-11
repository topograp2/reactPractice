
import { useEffect, useState } from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
  } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
function App() {

  return (
  <Router>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Details />} />
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}>
    </Routes>
  </Router>);
}


export default App;
