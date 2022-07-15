import Stocked from "./Stocked";
import React, { useState, useEffect } from "react";
export default function Category(props) {
  
  let stockedItems=props.json;
  let searchedItems;

  let listitems;
  
  
    if (props.value==true) {
      stockedItems = props.json.filter((item) => item.stocked != false);
      searchedItems  = stockedItems.filter(function (str) { return str.name.toLowerCase().includes(props.searchValue.toLowerCase()); });
     
    } else {
      stockedItems = props.json;
      searchedItems  = stockedItems.filter(function (str) { return str.name.toLowerCase().includes(props.searchValue.toLowerCase()); });
    }
    
    listitems = searchedItems.map((value, key) => 
      
      <tr>
        <Stocked value={value} key={key}/>
        <td>{value.price}</td>
      </tr>
    );

  return (listitems);
}
