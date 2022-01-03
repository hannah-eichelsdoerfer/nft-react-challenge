import "../styles/Header.ts";
import logo from "../assets/logo.svg";
import { BsSearch, BsFillMoonStarsFill } from "react-icons/bs";
import { NavbarElements } from "../styles/Header";

const Navbar = () => {
  return (
    <NavbarElements>
      <div className="logo-container">
        <img src={logo} className="logo" alt="" />
      </div>

      <div className="searchBar">
        <BsSearch />
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeToggler">
          <BsFillMoonStarsFill />
        </div>
      </div>

      <div className="login">GET IN</div>
    </NavbarElements>
  );
};

export default Navbar;
