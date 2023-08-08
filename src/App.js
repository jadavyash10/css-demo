import "./App.css";
import Router from "./routes/Router";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="navBar">
        <ul id="nav">
          <li className="items">
            <Link to="/">Home</Link>
          </li>
          <li className="items">
            <Link to="/landingPage">Netflix</Link>
          </li>
        </ul>
      </div>
      <Router />
    </>
  );
}

export default App;
