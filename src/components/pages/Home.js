import '../../css/Home.css';
import { LinkButton } from '../LinkButton';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>IDENTEEFI</h1>
      <p>ANTI-COUNTERFEIT PRODUCT IDENTIFICATION SYSTEM</p>
      <div className="button-container">
        <LinkButton to="login" className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Login</LinkButton>
        <LinkButton to="/scan-qr" className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>Scan QR Code</LinkButton>
      </div>

      
      <aside />

    </div>
  );
}

export default Home;
