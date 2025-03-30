import { useState } from "react";
import { ethers } from "ethers";
import "../styles/walletConnect.css";

const WalletConnect = () => {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert("Please install MetaMask!");
            return;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
    };

    return (
        <div className="wallet-container">
            {account ? (
                <p className="connected">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
        </div>
    );
};

export default WalletConnect;
