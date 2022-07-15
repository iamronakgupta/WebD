import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SearchBox from "./Components/SearchBox";
import List from "./Components/List";

const root = ReactDOM.createRoot(document.getElementById("root"));

const json = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
  { category: "Electronics", price: "$299.99", stocked: true, name: "Pixel 7" },
];

function New() {
  const [inputValue, setValue] = useState(false);
  const [searchValue,setSearchValue]=useState("");
  const handleInputValue = (inputCheck) => {
    
    setValue(inputCheck);
  };
  const handleSearchValue = (searchValue)=>{
    setSearchValue(searchValue)
  }


  
  

  return (
    <div className="main">
      <SearchBox handleInputValue={handleInputValue} handleSearchValue={handleSearchValue} />
      <List inputValue={inputValue} json={json} searchValue={searchValue} />
    </div>
  );
}

root.render(<New />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
