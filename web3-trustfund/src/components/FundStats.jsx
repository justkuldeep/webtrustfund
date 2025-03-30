import { useState, useEffect } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";
import "../styles/fundStats.css";

const FundStats = () => {
    const [totalFunds, setTotalFunds] = useState("0");

    useEffect(() => {
        const fetchFunds = async () => {
            try {
                const contract = await getContract();
                const funds = await contract.totalFunds();
                setTotalFunds(ethers.utils.formatEther(funds));
            } catch (error) {
                console.error("Error fetching funds:", error);
            }
        };
        fetchFunds();
    }, []);

    return (
        <div className="funds-container">
            <h2>Total Funds Collected</h2>
            <p>{totalFunds} ETH</p>
        </div>
    );
};

export default FundStats;
