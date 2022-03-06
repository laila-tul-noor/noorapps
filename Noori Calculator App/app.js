




function getNum(num){
    
    var inPut = document.getElementById("inPut");
    inPut.value += num;
}
function nullInput(){
    var inPut = document.getElementById("inPut");
    inPut.value ="";

}
function getInput(){
  
    var inPut = document.getElementById("inPut");
    
    inPut.value = eval (inPut.value);
}