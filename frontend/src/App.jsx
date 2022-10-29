import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Quiz from "@pages/Quiz";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Routes> is a React Router component that allows you to define multiple routes. */}
      <Routes>
        {/* <Route> is a React Router component that allows you to define a route. */}
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
