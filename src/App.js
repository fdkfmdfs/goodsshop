import './App.scss';
import MainPage from './components/MainPage';
import {Routes,Route} from 'react-router-dom';
import Interior from './pages/Interior';
import Kichen from './pages/Kitchen';
/* import Office from './pages/Office';
import Fablic from './pages/Fablic'; */
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import UploadPage from './UploadPage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="App">
        <Header />
     
      <Routes>
      <Route path='/'element={<MainPage />}/>
      
      <Route path='/interior'element={<Interior />}/>
      <Route path='/Kichen'element={<Kichen />}/>
     {/*  <Route path='/Office'element={<Office />}/>
      <Route path='/Fablic'element={<Fablic />}/> */}
      <Route path='/UploadPage' element={<UploadPage />}/> 
      <Route path='/ProductPage/:id' element={<ProductPage />}/> 
      </Routes>
     
      
    <Footer/>
    <div>
   
    </div>
    </div>
  );
}

export default App;
