document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeAmountNumber = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountNumber);
    console.log(incomeAmount);
    // clear income value
    incomeInput.value = "";
    console.log(incomeAmount);

    // foodValue
    const foodInput = document.getElementById('food-input');
    const foodAmountNumber = foodInput.value;
    const foodAmount = parseFloat(foodAmountNumber);
    console.log(foodAmount);
    // clear food value
    foodInput.value = "";
    console.log(foodAmount);

    // rentValue....
    const rentInput = document.getElementById('rent-input');
    const rentAmountNumber = rentInput.value;
    const rentAmount = parseFloat(rentAmountNumber);
    console.log(rentAmount);
    // clear rent value
    rentInput.value = "";
    console.log(rentAmount);

    // clothesValue......
    const clothesInput = document.getElementById('clothes-input');
    const clothesAmountNumber = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountNumber);
    console.log(clothesAmount);
    // clear clothes value
    clothesInput.value = "";
    console.log(clothesAmount);

    //update total expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalAmountText = totalExpenses.innerText;
    const totalAmount = parseFloat(totalAmountText);
    totalExpenses.innerText = totalAmount + foodAmount + rentAmount + clothesAmount;
    // clear update total
    totalExpenses.value = "";
    console.log(totalExpenses);

    // update total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const balanceTotal = parseFloat(totalBalanceText);
    totalBalance.innerText = incomeAmount - totalExpenses;
})