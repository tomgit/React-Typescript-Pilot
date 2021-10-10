import './css/App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import { Main } from "./pages/Main";


function App() {
  
  let s : String = 'Hello React!';

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Main} />
        </Switch>
      </HashRouter>
      { s }
    </div>
  );
}

export default App;
