import { useState, useEffect } from "react";
import { getContract } from "../utils/contract";
import "../styles/transactions.css";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const contract = await getContract();
                const txs = await contract.getDonations(); // Fetch recent transactions
                setTransactions(txs);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div className="transactions-container">
            <h2>Recent Donations</h2>
            <ul>
                {transactions.length > 0 ? (
                    transactions.map((tx, index) => (
                        <li key={index}>
                            <span>{tx.donor.slice(0, 6)}...{tx.donor.slice(-4)}</span> donated 
                            <strong> {tx.amount} ETH</strong>
                        </li>
                    ))
                ) : (
                    <p>No donations yet.</p>
                )}
            </ul>
        </div>
    );
};

export default Transactions;
