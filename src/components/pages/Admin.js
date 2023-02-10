import '../../css/Role.css'
import { Button } from '../Button';

const Admin = () => {
    return ( 
        <div className="role-container">
            <div className="role-container-box">
                <h2>Welcome:</h2>
                <h1>ADMIN</h1>
                <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Check Profile</Button>
                <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Add Account</Button>
                <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Manage Accounts</Button>
            </div>
        </div>
     );
}
 
export default Admin;