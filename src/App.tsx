import './css/App.css';
import { HashRouter, Switch, Route } from "react-router-dom"; //@see https://reactrouter.com/web/api/HashRouter
import { Main } from "./pages/Main";


function App() {
  
  let s : String = 'debugstr';

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Main} />
        </Switch>
      </HashRouter>
      <br/>

      { s }

    </div>
  );
}

export default App;
