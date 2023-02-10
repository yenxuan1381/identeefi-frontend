import '../../css/Role.css'
import { Button } from '../Button';

const Supplier = () => {
    return ( 
        <div className="role-container">
            <div className="role-container-box">
                <h2>Welcome:</h2>
                <h1>Supplier</h1>
                <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Check Profile</Button>
                <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Update Product</Button>
            </div>
        </div>
     );
}
 
export default Supplier;