import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./containers/register/Register";
import Landing from "./containers/landing/Landing";
import SignIn from "./containers/signIn/SignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
