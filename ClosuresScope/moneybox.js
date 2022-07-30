const myMoneyBox = moneyBoxClosure();
document.getElementById("saveAmmountBtn").onclick = function(){
    let ammount = parseInt(document.getElementById("ammountInput").value);
    document.getElementById("ammountResult").innerHTML = "Your save today: "+ammount;
    myMoneyBox(ammount);
}

//this function doesn't work because is not remember or not saving the coins;
function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);

//This function does remember the coins because the logic has a closure for that
function moneyBoxClosure(){
    let saveCoins=0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBoxClosure: $${saveCoins}`);
        document.getElementById("ammountTotal").innerHTML = "Your total save: "+saveCoins;
    }
    return countCoins;
}


