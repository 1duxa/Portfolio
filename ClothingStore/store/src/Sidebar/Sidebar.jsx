import "./Sidebar.css";
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import { AiOutlineShoppingCart as Cart } from "react-icons/ai";
const Sidebar = ({handleChange}) => {
  
  const handleCategoryChange = (event) => {
    handleChange("category", event.target.value);
  };

  const handlePriceChange = (event) => {
    handleChange("price", event.target.value);
  };

  const handleColorChange = (event) => {
    handleChange("color", event.target.value);
  };
  return (
 
      <div className="sidebar-wrap">
        <section className="sidebar">
          <div className="logo-container">
            <h1><Cart/></h1>
          </div>
          <Category handleChange={handleCategoryChange} />
        <Price handleChange={handlePriceChange} />
        <Colors handleChange={handleColorChange} />
        </section>
      </div>
  );
};

export default Sidebar;
