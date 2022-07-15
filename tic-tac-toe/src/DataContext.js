import { createContext,useState } from "react";
import minimax from "./computer/minimax";
import check from "./computer/check";

const DataContext = createContext();

export function DataProvider({children}){
    const [data,setData]=useState([[11,12,13],[14,15,16],[17,18,19]])
    let curSymb=1
    const [result,setResult]=useState(0)
    const [choice,setChoice]=useState("MultiPlayer")

    const updateChoice =(newChoice)=>{
      
        if(newChoice){
            setChoice(newChoice)
        }
        
        setData([[11,12,13],[14,15,16],[17,18,19]])
        curSymb=1
        setResult(0)

    }
   
    const updateData = (row,column)=>{
       let arr = data
       if((arr[row][column]>10&&arr[row][column]<20)&&result==0){
        arr[row][column]=curSymb;
        
        setData(arr)
        let r = check(arr)
        if(r!=null&&r!=0){
            setResult(curSymb)
        }
        curSymb= curSymb==1?2:1

        if(choice=="Computer"&&r==null){
            machinePlay()
        }else{
            
        }
        
       }
        
    }
    return (
        <DataContext.Provider value={{data,updateData,result,choice,updateChoice}}>
            {children}
        </DataContext.Provider>
    )
    function machinePlay(){
        console.log("machine played")
        let move= algorithm(data)
       console.log(move)
        if(move){
           let arr=data
           arr[move.i][move.j]=curSymb;
           setData(arr)
           console.log(arr)    
           let r = check(arr)
           if(r!=null&&r!=0){
               setResult(curSymb)
           }else{
              
           }
           curSymb= curSymb==1?2:1

       }
       
   }
    
}


function algorithm(data){
    let score
    let bestScore = Infinity
    let move
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){

            if(data[i][j]>10&&data[i][j]<20){
                let temp = data[i][j]
                data[i][j]=2
                score=minimax(data,0,true)
                data[i][j]=temp
                if(score<bestScore){
                    bestScore=score
                    move={i,j}
                    console.log(bestScore)
                
                }

            }

        }
    }
    
    return move

}


export default DataContext;