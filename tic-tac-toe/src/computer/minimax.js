import check from "./check"

export default function minimax(data , depth , isMaximizing){
    let result = check(data)
    if(result!=null){
        return result
    }
    if(isMaximizing){
        let bestScore = -Infinity
        for(let i =0;i<3;i++){
            for(let j =0;j<3;j++){
                if(data[i][j]>10&&data[i][j]<20){
                    let temp = data[i][j]
                    data[i][j]=1
                    let score = minimax (data,depth+1,false)
                    data[i][j]=temp
                    bestScore= Math.max(score,bestScore)
                    
                }
            }
        }
        return bestScore
    }else{
        let bestScore = Infinity
        for(let i =0;i<3;i++){
            for(let j =0;j<3;j++){
                if(data[i][j]>10&&data[i][j]<20){  
                    let temp = data[i][j]
                    data[i][j]=2
                    let score = minimax (data,depth+1,true)
                    data[i][j]=temp
                    bestScore= Math.min(score,bestScore)
                    
                }    
            }
        }
        return bestScore
    }

   
}