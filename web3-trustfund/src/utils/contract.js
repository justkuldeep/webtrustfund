import { ethers } from "ethers";
// import contractABI from "../abi/TrustFund.json";

const contractAddress = "YOUR_SMART_CONTRACT_ADDRESS";

export const getContract = async () => {
    if (!window.ethereum) throw new Error("MetaMask not installed");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
