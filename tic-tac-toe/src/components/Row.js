import DataContext from "../DataContext";
import { useContext, useState } from "react";


export default function Row(props) {
  const { data, updateData } = useContext(DataContext);
//   const [symb,setSymb]=useState(true)


  const putSymbol = (rows, column) => {
    updateData(rows, column);
    props.reload()
  };
 
  return (
    <tr>
      <td>
        <button
          type="button"
          className="table_button"
            onClick={() => 
            putSymbol(props.index,0)
          }>
          {
            data[props.index][0]==1?"X":data[props.index][0]==2?"0":<span>&nbsp;&nbsp;&nbsp;</span>
          }
        </button>
      </td>
      <td>
        <button
          type="button"
          className="table_button"
          onClick={() => {
            putSymbol(props.index, 1);
          }}
        >
          { 
            data[props.index][1]===1?"X":data[props.index][1]===2?"0":<span>&nbsp;&nbsp;&nbsp;</span>
          }
        </button>
      </td>
      <td>
        <button
          type="button"
          className="table_button"
          onClick={() => {
            putSymbol(props.index, 2);
          }}
        >
         { 
            data[props.index][2]===1?"X":data[props.index][2]===2?"0":<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          }
        </button>
      </td>
    </tr>
  );
}
