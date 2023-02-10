import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import QrScanner from './components/pages/QrScanner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/scan-qr' element={< QrScanner />}></Route>
        {/* <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
