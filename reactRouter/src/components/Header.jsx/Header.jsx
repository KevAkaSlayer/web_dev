import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>    
            <nav>
                <span>My site : </span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">ContactUs</Link>
                <Link to="/users">Users</Link>
            </nav>        
        </div>
    );
};

export default Header;