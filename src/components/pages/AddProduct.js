import { Box, Paper, Typography } from '@mui/material';
import bgImg from '../../img/bg.png';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import axios from 'axios';
import abi from '../../utils/Identeefi.json';

const getEthereumObject = () => window.ethereum;

/*
 * This function returns the first linked account found.
 * If there is no account linked, it will return null.
 */
const findMetaMaskAccount = async () => {
    try {
        const ethereum = getEthereumObject();

        /*
        * First make sure we have access to the Ethereum object.
        */
        if (!ethereum) {
            console.error("Make sure you have Metamask!");
            return null;
        }

        console.log("We have the Ethereum object", ethereum);
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            return account;
        } else {
            console.error("No authorized account found");
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

const AddProduct = () => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [name, setName] = useState("");
    const [brand, setBrand ] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState({
        file:[],
        filepreview: null
    });

    const contractAddress = '0xE691ED6875D0e921DB264bf9f53e0dbBBCE872e4';
    const contractABI = abi.abi;

    /*
   * The passed callback function will be run when the page loads.
   * More technically, when the App component "mounts".
   */
    useEffect(() => {
        findMetaMaskAccount().then((account) => {
            if (account !== null) {
                setCurrentAccount(account);
            }
        });
    }, []);

    const handleImage = async (e) => {
        setImage({
            ...image,
            file: e.target.files[0],
            filepreview: URL.createObjectURL(e.target.files[0])
        })
    }


    // to upload image
    const uploadImage = async (image) => {
        const data = new FormData();
        data.append("image", image.file);

        axios.post("http://localhost:5000/upload", data, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            console.log(res);

            if(res.data.success === 1){
                console.log("image uploaded");
            }
        })
    }

    const registerProduct = async (e) => {
        e.preventDefault();

        try {
          const { ethereum } = window;
    
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const productContract = new ethers.Contract(contractAddress, contractABI, signer);

            console.log("here")
            
            // write transactions
            const registerTxn = await productContract.registerProduct("name", "brand", "001", "description", "image", false);
            console.log("Mining...", registerTxn.hash);

            await registerTxn.wait();
            console.log("Mined --", registerTxn.hash);

            const product = await productContract.getProduct("001");

            console.log("Retrieved product...", product);

          } else {
            console.log("Ethereum object doesn't exist!");
          }
        } catch (error) {
          console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("..............................");
        console.log("name: ", name);
        console.log("brand: ", brand);
        console.log("description: ", description);
        console.log("image: ", image);

        // uploadImage(image);
        await registerProduct(e);
    }

    return (
        <Box sx={{
            backgroundImage: `url(${bgImg})`,
            minHeight: "80vh",
            backgroundRepeat: "no-repeat",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
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
                    Add Product</Typography>
                <form onSubmit={handleSubmit}>
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
                        label="Brand"
                        variant="outlined"
                        inherit="False"
                        onChange={(e) => setBrand(e.target.value)}
                        value={brand}
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

                    <Button
                        variant="outlined"
                        component="label"
                        fullWidth
                        // onChange = {handleImage}
                        sx={{ marginTop: "3%" }}
                    >
                        Upload Image
                        <input
                            type="file"
                            hidden
                            onChange={handleImage}
                        />
                    </Button>

                    {image.filepreview !== null ? 
                        <img src={image.filepreview} alt="preview" style={{width:"100%", height:"100%"}}/>
                        : null}


                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ width: "100%", marginTop: "20%", backgroundColor: '#98b5d5', '&:hover': { backgroundColor: '#618dbd' } }}
                    >
                        Add Product
                    </Button>

                </form>

            </Paper>

        </Box>
    );
}

export default AddProduct;