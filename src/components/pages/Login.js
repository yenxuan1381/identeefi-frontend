import '../../css/Login.css';
import { useRef, useState, useEffect } from 'react';
import { Button } from '../Button';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(user, pwd)
    };

    return (
        <div className="login-container">
            <div className="form-box">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>IDENTEEFI</h1>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        ref={userRef}
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required                        
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required                        
                    />
                    <Button className="btn" buttonStyle='btn--primary' buttonSize='btn--medium'>Login</Button>
                </form>
                

            </div>
        </div>
    )

}

export default Login;