// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/projects" element={<Projects />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
