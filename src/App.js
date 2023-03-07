import Home from './components/pages/Home';
import Login from './components/pages/Login';
import QrScanner from './components/pages/QrScanner';
import Admin from './components/pages/Admin';
import Manufacturer from './components/pages/Manufacturer';
import Supplier from './components/pages/Supplier';
import Retailer from './components/pages/Retailer';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import AddAccount from './components/pages/AddAccount';
import ManageAccount from './components/pages/ManageAccount';
import AddProduct from './components/pages/AddProduct';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        {/* public routes */}
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/scan-qr' element={< QrScanner />}></Route>

        {/* private routes */}
        <Route element={<RequireAuth allowedRoles={["admin"]} />}>
          <Route exact path='/admin' element={< Admin />}></Route>
          <Route exact path='/add-account' element={< AddAccount />}></Route>
            <Route exact path='/manage-account' element={< ManageAccount />}></Route> 

        </Route>

        <Route element={<RequireAuth allowedRoles={["manufacturer"]} />}>
          <Route exact path='/manufacturer' element={< Manufacturer />}></Route>
          <Route exact path='/add-product' element={< AddProduct />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={["supplier"]} />}>
          <Route exact path='/supplier' element={< Supplier />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={["retailer"]} />}>
          <Route exact path='/retailer' element={< Retailer />}></Route>
        </Route>

        {/* catch all */}
        {/* <Route path='*' element={< Missing />}></Route> */}

      </Route>
    </Routes>

  );
}

export default App;
