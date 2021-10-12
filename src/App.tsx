import './css/App.css';
import { HashRouter, Switch, Route } from "react-router-dom"; //@see https://reactrouter.com/web/guides/quick-start
import { Main } from "./pages/Main";
import { PageA } from "./pages/pageA";
import { PageB } from "./pages/pageB";


function App() {
  
  let s : String = 'debugstr';

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Main} />
            <Route path="/pageA" component={PageA} />
            <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
      <br/>
      { s }
    </div>
  );
}

export default App;
