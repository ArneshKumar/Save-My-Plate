import React, { useState } from "react";
import "./Homepage.css";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { getAuth, signOut } from "firebase/auth";

export interface IHomePageProps {}

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const suggestionList = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Mango",
//     "Grapes",
//     "Pineapple",
//   ];

//   const handleChange = (e) => {
//     const input = e.targe  t.value;
//     setQuery(input);

//     // Filter suggestions based on input
//     if (input.length > 0) {
//       const filteredSuggestions = suggestionList.filter((item) =>
//         item.toLowerCase().includes(input.toLowerCase())
//       );
//       setSuggestions(filteredSuggestions);
//       setDropdownVisible(true);
//     } else {
//       setDropdownVisible(false);
//     }
//   };

//   const handleSelect = (selectedItem) => {
//     setQuery(selectedItem);
//     setDropdownVisible(false);
//   };

//   return (
//     <div className="search-bar-container">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Search..."
//         className="search-bar"
//       />

//       {isDropdownVisible && query && (
//         <ul className="dropdown">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               className="dropdown-item"
//               onClick={() => handleSelect(suggestion)}
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

function SearchBar() {
  const [query, setQuery] = useState("");

  // Function to handle input change
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      ></input>
      {!query && <FaSearch className="search-icon" size={20} color="gray" />}
      <div className="icons">
        <Button>
          <span className="icon-user">👤</span>
        </Button>
        <Button>
          <span className="icon-settings">⚙️</span>
        </Button>
      </div>
    </div>
  );
}

function Carousel() {
  const items = [
    { title: "Nutrition 1", image: "https://via.placeholder.com/150" },
    { title: "Nutrition 2", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
}
function SuggestedCategories() {
  const categories = ["Fruits", "Vegetables", "Meat", "Dairy"];

  return (
    <div className="suggested">
      <h3 className="heading3">Suggested</h3>
      <div className="categories">
        {categories.map((category, index) => (
          <Button key={index} className="category">
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}

function Macronutrients() {
  const products = [
    {
      name: "Spinach",
      price: "$10.99",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Mushrooms",
      price: "$10.99",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Carrots",
      price: "$10.99",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="macronutrients">
      <h3 className="heading3">Macronutrients</h3>
      <div className="products">
        {products.map((product, index) => (
          <Button key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <p>Brand</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

//function LoginPage() {}

const Homepage: React.FunctionComponent<IHomePageProps> = (props) => {
  const auth = getAuth();
  return (
    <React.Fragment>
      <SearchBar />
      <Carousel />
      <SuggestedCategories />
      <Macronutrients />
      <p>Home Page (logged in)</p>
      <button onClick={() => signOut(auth)}>Sign out of Save My Plate</button>
    </React.Fragment>
  );
};

export default Homepage;

// import React from "react";
// import "./HomePage.css";

// function HomePage() {
//   const carouselItems = [
//     { title: "Nutrition 1", image: "https://via.placeholder.com/150" },
//     { title: "Nutrition 2", image: "https://via.placeholder.com/150" },
//   ];

//   const suggestedCategories = ["Fruits", "Vegetables", "Meat", "Dairy"];

//   const products = [
//     { name: "Spinach", price: "$10.99", image: "https://via.placeholder.com/100" },
//     { name: "Mushrooms", price: "$10.99", image: "https://via.placeholder.com/100" },
//     { name: "Carrots", price: "$10.99", image: "https://via.placeholder.com/100" },
//   ];

//   return (
//     <div className="home-container">
//       {/* Search Bar */}
//       <div className="search-bar">
//         <input type="text" placeholder="Search" />
//         <div className="icons">
//           <span className="icon-user">👤</span>
//           <span className="icon-settings">⚙️</span>
//         </div>
//       </div>

//       {/* Carousel */}
//       <div className="carousel">
//         {carouselItems.map((item, index) => (
//           <div key={index} className="carousel-item">
//             <h2>{item.title}</h2>
//             <img src={item.image} alt={item.title} />
//           </div>
//         ))}
//       </div>

//       {/* Suggested Categories */}
//       <div className="suggested">
//         <h3>Suggested</h3>
//         <div className="categories">
//           {suggestedCategories.map((category, index) => (
//             <div key={index} className="category">
//               {category}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Macronutrients */}
//       <div className="macronutrients">
//         <h3>Macronutrients</h3>
//         <div className="products">
//           {products.map((product, index) => (
//             <div key={index} className="product-card">
//               <img src={product.image} alt={product.name} />
//               <div className="product-info">
//                 <p>Brand</p>
//                 <p>{product.name}</p>
//                 <p>{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;
