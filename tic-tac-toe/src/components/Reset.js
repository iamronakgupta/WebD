import DataContext from "../DataContext";
import { useContext } from "react";
export default function Reset(){

    const { updateChoice} = useContext(DataContext);
    const reset =()=>{
        updateChoice()
    }   
    return (
        <div className="white-back">
             <button className="choice_button" onClick={reset}>Reset</button>
        </div>
       
    )


}