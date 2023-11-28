import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import {
  AiOutlineShoppingCart as Cart,
  AiOutlineUserAdd as UserAdd,
} from "react-icons/ai";
const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <Cart className="nav-icons" />
        </a>
        <a href="">
          <UserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
