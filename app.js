function number(val) {
    // var display =  document.getElementById("dis").value;
    // display += val
    document.getElementById("dis").value+=val;

}

function clr()
{
    document.getElementById("dis").value="";
}

function solve()
{
let x = document.getElementById("dis").value
let y = eval(x)
document.getElementById("dis").value = y
}