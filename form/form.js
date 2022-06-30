class data {
    constructor(id, fname, sname, dob, address, city, gender) {
        this.id = id;
        this.fname = fname;
        this.sname = sname;
        this.dob = dob;
        this.address = address;
        this.city = city;
        this.gender = gender;
    }
}
let dataArr=[]

let editIndex;

function my(){
    document.getElementById("header").innerHTML= "JS Is Here"
    let table = document.getElementById("table")
    let id = table.rows.length
    let fname = document.getElementById("fname").value
    let sname = document.getElementById("sname").value
    let dob = document.getElementById("dob").value
    let address = document.getElementById("address").value
    let city = document.getElementById("city").value
    let gender
    
        var ele = document.getElementsByName('gender');
                    
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            gender=ele[i].value
        }
    let newRow = new data(id,fname,sname,dob,address,city,gender)
        

        if(document.getElementById("button").textContent=="Edit"){
                dataArr[editIndex].fname=fname
                dataArr[editIndex].sname=sname
                dataArr[editIndex].dob=dob
                dataArr[editIndex].address=address
                dataArr[editIndex].city=city
                dataArr[editIndex].gender=gender
                
                updateTable(editIndex)
                 
                 document.getElementById("button").textContent="Register"
        }else{
            dataArr.push(newRow)
            // Load Data into table from array
            loadTable(id-1)
        }
         
        
     document.getElementById("fname").value=""
     document.getElementById("sname").value=""
     document.getElementById("dob").value=""
     document.getElementById("address").value=""
     document.getElementById("city").value=""
     document.getElementById("male").checked=false
     document.getElementById("female").checked=false
     document.getElementById("others").checked=false
     

        
}
function editRow(index){
    debugger
    let element=dataArr[index]



    document.getElementById("fname").value=element.fname
    document.getElementById("sname").value=element.sname
    document.getElementById("dob").value=element.dob
    document.getElementById("address").value=element.address
    document.getElementById("city").value=element.city
    if(element.gender=="Female"){
        document.getElementById('female').checked=true
    }else if(element.gender=="Others"){
        document.getElementById('others').checked=true
    }
    else if(element.gender=="Male"){
        document.getElementById('male').checked=true
    }

    document.getElementById('button').textContent="Edit"
    editIndex=index;

}


//to delete a row in table
function deleteR(index){
    debugger
    
        dataArr.splice(index,1)

        loadWholeTable()
}


//to load a row in table
//use array to load whole table
function loadTable(index){
    let table = document.getElementById("table")
     let row = table.insertRow(index+1)

     let element=dataArr[index]
     
     row.insertCell(0).innerHTML=index+1
     row.insertCell(1).innerHTML=element.fname
     row.insertCell(2).innerHTML=element.sname
     row.insertCell(3).innerHTML=element.dob
     row.insertCell(4).innerHTML=element.address
     row.insertCell(5).innerHTML=element.city
     row.insertCell(6).innerHTML=element.gender
     
        
     row.insertCell(7).innerHTML=`<button id='btnEdit' onClick='editRow(${index})'>Edit</button>`
     
     row.insertCell(8).innerHTML=`<button id="btnDelete" onClick="deleteR(${index})">Delete</button>`
    
}
function updateTable(index){
    let table = document.getElementById("table")
    let cells = table.rows[index+1].cells

     let element=dataArr[index]
     
  
     cells[1].innerHTML=element.fname
     cells[2].innerHTML=element.sname
     cells[3].innerHTML=element.dob
     cells[4].innerHTML=element.address
     cells[5].innerHTML=element.city
     cells[6].innerHTML=element.gender

}

function sort(){
    let sortImg = document.getElementById("fname-sort")

    let val = sortImg.alt

    

    if(val=="asc"){
        sortImg.src="images/down.png"
        sortImg.alt="dsc"
        dataArr.sort(compareName)
    }else{
        sortImg.src="images/up.png"
        sortImg.alt="asc"
        dataArr.sort(reverseCompareName)
    }
    loadWholeTable();
    
}
function loadWholeTable(){
    let table = document.getElementById("table")
        let l = table.rows.length
        
       for(i=0;i<l-1;i++){
           
        table.deleteRow(1);
       }
        for(i=0;i<dataArr.length;i++){
               loadTable(i)
        }
}
// program to sort array by property name

function compareName(a, b) {

   
    let comparison = 0;

    const name1=a.fname
    const name2=b.fname
    

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}
function reverseCompareName(a,b){
    let comparison = 0;

    const name1=a.fname
    const name2=b.fname
    

    if (name1 > name2) {
        comparison = -1;
    } else if (name1 < name2) {
        comparison = 1;
    }
    return comparison;

}