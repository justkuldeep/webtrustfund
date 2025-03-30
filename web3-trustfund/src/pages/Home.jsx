import DonateForm from "../components/DonateForm";
import FundStats from "../components/FundStats";
import WalletConnect from "../components/WalletConnect";
import Transactions from "../components/Transactions";
import DarkModeToggle from "../components/DarkModeToggle";
import "../styles/home.css";

const Home = () => {
    return (
        <div className="home-container">
            <DarkModeToggle />
            <h1>Support the Future with Web3</h1>
            <p>Secure, Transparent, and Decentralized Fundraising Powered by Blockchain.</p>
            <WalletConnect />
            <FundStats />
            <DonateForm />
            <Transactions />
        </div>
    );
};

export default Home;
