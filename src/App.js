import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChartSelector from "./Pages/ChartSelector";
import VerticalBarChart from "./Pages/VerticalBarChart";
import DonutChart from "./Pages/DonutChart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ChartSelector} />
          <Route path="/vertical-chart" component={VerticalBarChart} />
          <Route path="/donut-chart" component={DonutChart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
