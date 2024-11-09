import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-5">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>login</NavLink>
        </div>
    );
};

export default Header;