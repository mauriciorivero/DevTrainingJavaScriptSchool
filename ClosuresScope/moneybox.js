//The following are the lines for hidding the sections of the excercises
document.getElementById("introCase1").style.display="none";
document.getElementById("introCase2").style.display="none";
document.getElementById("sectionWithoutClosure").style.display="none";
document.getElementById("sectionWithClosure").style.display="none";

//The following are the actions for the links (anchor) in the beggning of the screen
document.getElementById("linkCase1").onclick = function(){
    document.getElementById("introCase1").style.display = "flex";
    document.getElementById("sectionWithoutClosure").style.display = "flex";
    document.getElementById("introCase2").style.display = "none";
    document.getElementById("sectionWithClosure").style.display = "none";
}

document.getElementById("linkCase2").onclick = function(){
    document.getElementById("introCase1").style.display = "none";
    document.getElementById("sectionWithoutClosure").style.display = "none";
    document.getElementById("introCase2").style.display = "flex";
    document.getElementById("sectionWithClosure").style.display = "flex";
}

//this is the declaration and inicialization for the moneyBox variable used on the closure
const myMoneyBox = moneyBoxClosure();

//this is the functionality for the button action in the "no closure scenario"
document.getElementById("saveAmmountBtn").onclick = function(){
    let ammount = parseInt(document.getElementById("ammountInput").value);
    document.getElementById("ammountResult").innerHTML = "Your save today: "+ammount;
    moneyBox(ammount);    
}

//this is the functionality for the button action in the "closure scenario"
document.getElementById("saveAmmountBtn2").onclick = function(){
    let ammount = parseInt(document.getElementById("ammountInput2").value);
    document.getElementById("ammountResult2").innerHTML = "Your save today: "+ammount;
    myMoneyBox(ammount);
}


//this function doesn't work because is not remember or not saving the coins;
function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
    document.getElementById("ammountTotal").innerHTML = "Your total save: "+saveCoins;
    return saveCoins;
}

//This function does remember the coins because the logic has a closure for that
function moneyBoxClosure(){
    let saveCoins=0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBoxClosure: $${saveCoins}`);
        document.getElementById("ammountTotal2").innerHTML = "Your total save: "+saveCoins;
    }
    return countCoins;
}


