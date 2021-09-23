import './App.scss';
import {BrowserRouter} from 'react-router-dom'
import Routes from './core/Routes/Routes';
import Nav from './shared/nav/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
    <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
