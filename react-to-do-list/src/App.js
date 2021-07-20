import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
