var result=document.getElementById("result")

function display(number){
result.value +=number;
    
}

function calculate(){
    var finalnumber = result.value;
    var finalresult = eval(finalnumber);
    result.value = finalresult;

}
function clearscrn(){
    result.value="";
}
function delet(){
result.value=result.value.slice(0,-1)
}