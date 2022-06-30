

//to upload file
function upload(){
   
    const fileElement = document.getElementById("fileInput")
    let file = fileElement.files[0];
    const reader = new FileReader()
    let data
    

   
    reader.readAsText(file);

    //delete all rows
    table.innerHTML=""
    reader.onload = function (event) {
        let text = event.target.result
        console.log("Working"+text); // the CSV content as string
        data = csvToArray(text);
        let table = document.getElementById("table")
      
        for(i=0;i<data.length;i++){
            let row = table.insertRow(-1)
            
            for(j=0;j<data[i].length;j++){
              row.insertCell(j).innerHTML=`<input type="text" id="input" value="${data[i][j]}">`
            }
        }

        
      };
    

    

}

//to download file
function download(){
  
    let table = document.getElementById("table")
    let rows = table.rows
    let column = rows[0].cells
    let arr2 = []
    let arr1=[]

    for(i=0;i<rows.length;i++){
        arr1=[]
        for(j=0;j<column.length;j++){
            let cell=rows[i].cells[j].children[0].value
            console.log(cell)
            arr1.push(cell)
        }
        arr2.push(arr1)
    }

    makefile(arr2)
}

//to insert row in table
function insertNewRow(){

    let table = document.getElementById("table")
    let length = table.rows[0].cells.length
    let row =table.insertRow(-1)

    for(i=0;i<length;i++){
        row.insertCell(i).innerHTML=`<input type="text" id="input">`
    }
    
    

}

//to insert column in table
function insertNewColumn(){

    let table = document.getElementById("table")
    let rows = table.rows
    let length = rows.length
    let td = document.getElementById("column")

    for(i=0;i<length;i++){
        rows[i].insertCell(-1).innerHTML=`<input type="text" id="input">`
    }

}
function csvToArray(str, delimiter = ",") {
    
    
    arr = str.split("\n").map(function(e) {
        return e.split(",").map(String);
    })

   
    return arr;
  }

  function makefile(arr){

    let csvContent = "";

    arr.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent +=row + "\r\n";
    });

    const inputEle = document.getElementById("filename")
    let filename=inputEle.value
    if(filename==undefined){
        filename="NoName"
    }


    var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);  
    hiddenElement.target = '_blank';  
    hiddenElement.download = filename+".csv";  
    hiddenElement.click(); 

  }

  