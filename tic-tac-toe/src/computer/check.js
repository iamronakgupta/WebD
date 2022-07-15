export default function check(data){
    let r = null
   
    for(let i=0;i<3;i++){
        if(r===true){
            
            break 
        }
        for(let j=0;j<3;j++){
            r = data[j][0]==data[j][1]?data[j][1]==data[j][2]?true:false:false
            if(r===true){
                if(data[j][0]===1){
                   return 1
                }else{
                   
                   return -1
                }
             
            }
            
        }
        for(let j=0;j<3;j++){
            r = data[0][j]==data[1][j]?data[1][j]==data[2][j]?true:false:false
            if(r===true){
                if(data[0][j]===1){
                    return 1
                }else{
                    return -1
                }
             
            }
        }
        
            r = data[0][0]==data[1][1]?data[1][1]==data[2][2]?true:false:false
            if(r===true){
                if(data[0][0]===1){
                    return 1
                }else{
                    return -1
                }
               
            }

            r = data[0][2]==data[1][1]?data[1][1]==data[2][0]?true:false:false
            if(r===true){
                if(data[0][2]===1){
                    return 1
                }else{
                    return -1
                }
               
            }
        
    }
    
        for(let i =0;i<3;i++){
            for(let j =0;j<3;j++){
                if(data[i][j]>10&&data[i][j]<20){
                    return null;
                }
                
            }
        }

        return 0;

}