import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Naslovna from "./Components/Naslovna.js";
import Forma from "./Components/Forma.js";
import Vise from "./Components/Vise.js";


function App() {
  return (
    <div className="App">



      <Router>
        <Route exact path="/" component={Naslovna}/>
        <Route path="/forma" component={Forma}/>
        <Route path="/vise" component={Vise}/>
        
      </Router>
    </div>
  );
}

export default App;
