import '../../css/Login.css';
import { useRef, useState, useEffect } from 'react';
import { Button } from '../Button';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        userRef.current.focus()
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${LOGIN_URL}/${user}/${pwd}`,
                {
                    headers: {'Content-Type': 'application/json'}, 
                });

            if (res?.data.length === 0) {
                setErrMsg('Login Failed. Please try again later.');
                errRef.current.focus();
            } else {
                const role = res?.data[0].role;
                setAuth({ user, pwd, role })
                setUser('');
                setPwd('');
                navigate(`/${role}`, { replace: true });

            }
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Server is down. Please try again later.');
            } else if (err.response?.status === 400) {
                setErrMsg('Invalid username or password.');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized access.');
            } else {
                setErrMsg('Login Failed. Please try again later.');
            }
            errRef.current.focus();
        }
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