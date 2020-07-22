import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Pvp from "./components/Pvp";
import Solo from "./components/Solo";

function App() {
  return (
    <div>
      <Router>
        <div
          style={{
            width: "100vw",
            height: "12vh",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <NavLink style={navStyle} activeStyle={{ color: "gray" }} to="/pvp">
            PvP
          </NavLink>
          <NavLink style={navStyle} activeStyle={{ color: "gray" }} to="/solo">
            Solo
          </NavLink>
        </div>

        <Switch>
          <Route path="/pvp" component={Pvp} />
          <Route path="/solo" component={Solo} />
        </Switch>
      </Router>
    </div>
  );
}

const navStyle = {
  fontSize: "3rem",
  fontFamily: "monospace",
  textDecoration: "none",
  fontWeight: "bold",
  color: "#000",
};

export default App;
