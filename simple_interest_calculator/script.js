
function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;

    document.getElementById("result").innerHTML = (p * r * y ) / 100;
    
}
        