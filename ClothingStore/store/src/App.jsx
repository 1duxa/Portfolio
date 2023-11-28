import { useState } from "react";
import "./App.css";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Sidebar from "./Sidebar/Sidebar";
//Data
import products from "./db/data.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    price: "",
    color: ""
  });
  
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => setQuery(event.target.value);

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase() !== -1)
  );



  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleChange = (category, value) => {
    setSelectedFilters({ ...selectedFilters, [category]: value });
  };

  function filteredData(products, selectedFilters, query) {
     let filteredProducts = [...products];

    if (query) {
      filteredProducts = filteredItems;
    }

    const { category, price, color } = selectedFilters;

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    if (price) {
      filteredProducts = filteredProducts.filter(
        (product) => product.newPrice === price
      );
    }

    if (color) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === color
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }, index) => (
        <Card
          key={index}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
const result = filteredData(products,selectedFilters,query)
  
return (
    <div className="app-container">
      <Sidebar handleChange={handleChange}/>
      <div className="app-container-right">
        <Nav query={query} handleInputChange={handleInputChange}/>
        <Recomended  handleClick={handleClick}/>
        <Products result={result}/>
      </div>
    </div>
  );
}

export default App;
