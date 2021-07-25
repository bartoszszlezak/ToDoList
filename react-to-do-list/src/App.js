import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './views/SignIn';
import SignUp from './views/SignUpSection';
import Navbar from './components/Navbar';
import ToDoList from './views/ToDoList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/todolist' component={ToDoList}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
