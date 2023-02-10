import Home from './components/pages/Home';
import Login from './components/pages/Login';
import QrScanner from './components/pages/QrScanner';
import Admin from './components/pages/Admin';
import Manufacturer from './components/pages/Manufacturer';
import Supplier from './components/pages/Supplier';
import Retailer from './components/pages/Retailer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/scan-qr' element={< QrScanner />}></Route>

        <Route exact path='/admin' element={< Admin />}></Route>
        <Route exact path='/manufacturer' element={< Manufacturer />}></Route>
        <Route exact path='/supplier' element={< Supplier />}></Route>
        <Route exact path='/retailer' element={< Retailer />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
