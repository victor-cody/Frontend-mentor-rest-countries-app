import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

import './assets/css/bootstrap.css';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    // https://restcountries.eu 
    <Router>
        <GlobalProvider>
            <Navbar/>
            <Switch>
              <Route path='/' exact>
                  <Home/>
              </Route>
            </Switch>
        </GlobalProvider>
    </Router>

  );
}

export default App;
