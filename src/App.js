import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs';

import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductPage  from './pages/Product';

function App() {
  return (
    <div className='App'>
    <Router>
      <Header/>
          <Routes>       
              <Route path='/product' element={<ProductPage/>} />
              <Route path='/about' element={<AboutUs/>}/>

              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
          </Routes>
    </Router>
    
      <Footer/>

    </div>
  );
}

export default App;
