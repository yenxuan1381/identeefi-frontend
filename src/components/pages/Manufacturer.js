import '../../css/Role.css'
import { Button } from '../Button';

const Manufacturer = () => {
    return ( 
        <div className="role-container">
            <div className="role-container-box">
                <h2>Welcome:</h2>
                <h1>Manufacturer</h1>
                <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Check Profile</Button>
                <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Add Product</Button>
            </div>
        </div>
     );
}
 
export default Manufacturer;