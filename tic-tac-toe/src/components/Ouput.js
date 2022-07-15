import DataContext from "../DataContext";
import { useContext } from "react";

export default function Output(){

    const { result} = useContext(DataContext);
    return(
        
        <p>{result===0?"Play : )":result===1?"Player with X Won":"Player With O Won"}</p>
    )
    
}