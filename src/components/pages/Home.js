import '../../css/Home.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>IDENTEEFI</h1>
      <p>ANTI-COUNTERFEIT PRODUCT IDENTIFICATION SYSTEM</p>
      <div className="button-container">
        <Link to='/login'>
          <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Login</Button>
        </Link>
        <Link to='/scan-qr'>
          <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>Scan QR Code</Button>
        </Link>
      </div>
      <aside />
      
    </div>
  );
}

export default Home;
