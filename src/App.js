import "./App.css";
import Nav from "./components/Navigation/Nav";

import { BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
