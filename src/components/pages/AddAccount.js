import '../../css/Role.css'
// import TextField from '@material-ui/core/TextField';
import { TextField, Box, Paper, Typography, Autocomplete, Button } from '@mui/material';
// import Button from '@material-ui/core/Button';
import React, { Component } from 'react'
import { useRef, useState, useEffect } from 'react';
import bgImg from '../../img/bg.png';

const options=["manufacturer", "distributor", "retailer"]

const AddAccount = () => {

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwd2, setPwd2] = useState('');
    const [role, setRole] = React.useState(options[0])
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();

        // for debugging only
        console.log("-----------------------------------")
        console.log("user: " + user);
        console.log("pwd: " + pwd);
        console.log("pwd2: " + pwd2);
        console.log("role: " + role);
        console.log("name: " + name);
        console.log("description: " + description);
        console.log("website: " + website);
        console.log("location: " + location);

    };


    return (
        <Box sx={{
            backgroundImage: `url(${bgImg})`,
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            zIndex: -2,
            overflowY: "scroll"

        }}>
            <Paper elevation={3} sx={{ width: "400px", margin: "auto", marginTop: "10%", marginBottom: "10%", padding: "3%", backgroundColor: "#e3eefc" }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center", marginBottom: "3%",
                        fontFamily: 'Gambetta', fontWeight: "bold", fontSize: "2.5rem"
                    }}
                >
                    Add Account</Typography>
                <form onSubmit={handleSubmit}>
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
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Confirm Password"
                        type='password'
                        variant="outlined"
                        inherit="False"
                        onChange={(e) => setPwd2(e.target.value)}
                        value={pwd2}
                    />

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        fullWidth
                        value={role}
                        onChange={(event, newRole) => {
                            setRole(newRole);
                        }}
                        renderInput={(params) =>
                            <TextField {...params}
                                fullWidth
                                id="outlined-basic"
                                margin="normal"
                                label="Role"
                                variant="outlined"
                                inherit="False"

                            />}
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Name"
                        variant="outlined"
                        inherit="False"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
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
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Website"
                        variant="outlined"
                        inherit="False"
                        onChange={(e) => setWebsite(e.target.value)}
                        value={website}
                    />

                    <TextField
                        fullWidth
                        id="outlined-basic"
                        margin="normal"
                        label="Location"
                        variant="outlined"
                        inherit="False"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ width: "100%", marginTop: "3%", backgroundColor: '#98b5d5', '&:hover': { backgroundColor: '#618dbd' } }}
                    >
                        Add Account
                    </Button>

                </form>
            </Paper>
        </Box>
    );
}

export default AddAccount;