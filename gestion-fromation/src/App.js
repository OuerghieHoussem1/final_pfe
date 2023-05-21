import {HashRouter, Route,Routes} from "react-router-dom"
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import Main from "./Pages/Main";
import Workshops from "./Pages/Workshops";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path='/dashboard' element={<Dashboard/>} >
              <Route index element={<Main/>}/>
              <Route path='formations' element={<Workshops/>}/>
            </Route>
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
