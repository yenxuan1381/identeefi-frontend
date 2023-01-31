import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className='container'>
      <h1>IDENTEEFI</h1>
      <p>ANTI-COUNTERFEIT PRODUCT IDENTIFICATION SYSTEM</p>
      <h5>Know Your Products</h5>
      <div className="button-container">
        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Scan QR Code</Button>
      </div>
    </div>
  );
}

export default App;
