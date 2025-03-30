import { useState } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";
import "../styles/donateForm.css";

const DonateForm = () => {
    const [amount, setAmount] = useState("");

    const handleDonate = async () => {
        try {
            const contract = await getContract();
            const tx = await contract.donate({ value: ethers.utils.parseEther(amount) });
            await tx.wait();
            alert("Donation Successful!");
        } catch (error) {
            alert("Transaction Failed: " + error.message);
        }
    };

    return (
        <div className="donate-container">
            <h2>Donate ETH</h2>
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount in ETH"
            />
            <button onClick={handleDonate}>Donate Now</button>
        </div>
    );
};

export default DonateForm;
