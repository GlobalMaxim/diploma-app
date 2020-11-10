import react from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import {useRoutes} from './routes'

function App() {
  const routes = useRoutes(false)
  return (
    <div className="container" style={{marginTop: 30}}>
      
      {routes}
    </div>
  );
}

export default App;
