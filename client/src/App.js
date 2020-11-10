import "./App.css";
import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes(false);
  return (
    <div className="container" style={{ marginTop: 30 }}>
      {routes}
    </div>
  );
}

export default App;
