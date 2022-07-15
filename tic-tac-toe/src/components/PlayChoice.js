import DataContext from "../DataContext";
import { useContext, useState } from "react";

export default function PlayChoice(){

    const [show, setShow]=useState(false)
    const { updateChoice} = useContext(DataContext);

    const change=(type)=>{
        updateChoice(type)
        setShow(!show)

    }
    if(show==true){
        return(
            <div>
                <button type="button" className="choice_button" onClick={()=>change("Multiplayer")}>Play MultiPlayer</button>
            </div>
        )
    }else{
        return(
        <button type="button" className="choice_button" onClick={()=>change("Computer")}>Play With Computer</button>
        )
    }
   
}