import "./App.css";
import Home from "./Components/Home";
import SingleMovie from "./Components/SingleMovie";
import Error from "./Components/Error";
import { Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
