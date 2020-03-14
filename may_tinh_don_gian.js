var number="";
var operator= "";
var Array=[];
function Number(Value) {
    number= document.getElementById('result').value;
    document.getElementById("result").value=number+""+Value;
    number=Value;
    Array.push(number);
    console.log(number);
    console.log(Array);
}
function Operator(Value) {
    operator= document.getElementById("result").value;
    document.getElementById("result").value = operator+""+ Value;
    operator= Value;
    Array.push(operator);
    console.log(operator);
    console.log(Array);
}
function Result() {
    let result="";
    for (let i= 0; i<Array.length; i++){
        result+=Array[i];
        console.log(result);
    }
    result=eval(result);
    console.log(result);
    document.getElementById("result").value = result;
}
function Clear() {
 number="";
 operator="";
 Array= [];
 document.getElementById("result").value="";
}