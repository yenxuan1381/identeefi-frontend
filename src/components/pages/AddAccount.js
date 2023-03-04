import '../../css/Role.css'
// import TextField from '@material-ui/core/TextField';
import { TextField } from '@mui/material';
import Button from '@material-ui/core/Button';
import { Autocomplete } from '@mui/material';
import { useRef, useState, useEffect } from 'react';

const AddAccount = () => {

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("here");
    };

    const func = () => {
        console.log("submitted")
    }

    


    return (
        <div className="role-container">
            <div className="role-container-top">
                <h1>Add Account</h1>
                <form className='role' onSubmit={func}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Username"
                        variant="outlined"
                        inherit="False"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Password"
                        type='password'
                        variant="outlined"
                        inherit="False"
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Confirm Password"
                        type='password'
                        variant="outlined"
                        inherit="False"
                    />

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={
                            ["manufacturer", "distributor", "retailer"]
                        }
                        fullWidth
                        renderInput={(params) =>
                            <TextField {...params}
                                fullWidth
                                id="outlined-basic"
                                margin="normal"
                                label="Role"
                                variant="outlined"
                                inherit="False" />}
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Name"
                        variant="outlined"
                        inherit="False"
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Description"
                        variant="outlined"
                        inherit="False"
                        multiline
                        minRows={2}
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Website"
                        variant="outlined"
                        inherit="False"
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Location"
                        variant="outlined"
                        inherit="False"
                    />

                    <Button
                        onClick={() => console.log(user)}
                        variant="contained"
                    >
                        Add Account
                    </Button>

                </form>
            </div>
        </div>
    );
}

export default AddAccount;