import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Plans from './Pages/Plans'
import Test from './Pages/Test'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/plans' exact component={Plans} />
        <Route path='/test' exact component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
