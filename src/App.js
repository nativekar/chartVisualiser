import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChartSelector from "./Charts/ChartSelector";
import VerticalBarChart from "./Charts/VerticalBarChart";
import DonutChart from "./Charts/DonutChart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ChartSelector} />
          <Route path="/vertical-bar-chart" component={VerticalBarChart} />
          <Route path="/donut-chart" component={DonutChart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
