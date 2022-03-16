import './App.css';
import {Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import CategoryPage from './pages/CategoryPage';
import AnimalPage from './pages/AnimalPage/AnimalPage' 
import Nav from './components/Nav/Nav'
function App() {
  return (
    <div className="App  " >
      <Nav/>
      <Routes>
        <Route exact path='/' element={ <LandingPage/>}></Route>
        <Route exact path="/products/:slug" element={ <CategoryPage/> }></Route>
        <Route exact path="/product/:slug" element={ <AnimalPage/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
