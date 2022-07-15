import React, { useEffect, useState } from "react";

import Category from "./Category";
export default function List(props) {
    console.log(props.searchValue);
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        
        <Category value={props.inputValue} json={props.json} searchValue={props.searchValue} />
        
      </tbody>
    
    </table>
  );
}
