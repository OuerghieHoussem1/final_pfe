import {HashRouter, Route,Routes} from "react-router-dom"
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import Main from "./Pages/Main";
import Cycle from "./Pages/Cycle";
import OneCycle from "./Pages/OneCycle";
import OneFormation from "./Pages/OneFormation";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path='/dashboard' element={<Dashboard/>} >
              <Route index element={<Main/>}/>
              <Route path='Cycles' element={<Cycle/>}/>
              <Route exact path='oneCycle/:cycleId' element={<OneCycle/>}/>
              <Route exact path='oneFormation/:formationId' element={<OneFormation/>}/>
            </Route>
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
