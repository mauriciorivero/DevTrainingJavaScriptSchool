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
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = money    BoxClosure();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(8);

