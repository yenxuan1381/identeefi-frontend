import '../../css/Role.css'
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const getEthereumObject = () => window.ethereum;

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


const Manufacturer = () => {

    const [currentAccount, setCurrentAccount] = useState("");

    const connectWallet = async () => {
        try {
            const ethereum = getEthereumObject();
            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });

            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.error(error);
        }
    };

    

    return (
        <div className="role-container">
            <div className="role-container-box">
                <h2>Welcome:</h2>
                <h1>Manufacturer</h1>
                <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Check Profile</Button>

                <Link to="/add-product">
                    <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large'>Add Product</Button>
                </Link>

                {/*
                 * If there is no currentAccount render this button
                */}
                {!currentAccount && (
                    <Button className="btns" buttonStyle='btn--long' buttonSize='btn--large' onClick={connectWallet}>Connect Wallet</Button>
                )}

            </div>
        </div>
    );
}

export default Manufacturer;