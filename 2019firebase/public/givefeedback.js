function myFunc(){

document.getElementById("secondpart").style.visibility = "visible";

var weeklybeforetax = document.getElementById("wage").value * document.getElementById("hoursWorked").value;
    //window.alert(weeklybeforetax)
    var monthly = (weeklybeforetax/7) * 30;
    var yearly = monthly * 12;
    var weeklyaftertax = weeklybeforetax * 0.85;
    var monthlyaftertax = monthly * 0.85;
    var yearlyaftertax = yearly * 0.85;

document.getElementById("printer").innerHTML = weeklybeforetax
document.getElementById("sideprinter").innerHTML = weeklyaftertax
document.getElementById("printer2").innerHTML = monthly
document.getElementById("sideprinter2").innerHTML = monthlyaftertax
document.getElementById("printer3").innerHTML = yearly
document.getElementById("sideprinter3").innerHTML = yearlyaftertax



}
