function getInputValueById(elementid){
    const inputField = document.getElementById(elementid);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);

    inputField.value = '';

     return inputValue;
}


function getTextValueById(elementid){
    const inputField = document.getElementById(elementid);
    const inputFieldString = inputField.innerText;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}




document.getElementById('btn-calculate').addEventListener('click', function(){
    
    const playerBudget = getInputValueById('per-player-budget');

    
    if(isNaN(playerBudget)){
        alert('please enter a number');
        return;
    }
    
    const totalPlayerBudgetField = document.getElementById('total-player-budget');

    const totalPlayerBudget = playerBudget * 5 ;

    totalPlayerBudgetField.innerText = totalPlayerBudget;
})


document.getElementById('btn-total-calculate').addEventListener('click', function(){
    const managerBudget = getInputValueById('manager-budget');

    const coachBudget = getInputValueById('coach-budget');

    if(isNaN(managerBudget)){
        alert('please enter a number');
        return;
    }

    if(isNaN(coachBudget)){
        alert('please enter a number');
        return;
    }

    const totalPlayerBudget = getTextValueById('total-player-budget');

    const totalExpense = document.getElementById('total-expense-field')

    const totalCost = managerBudget + coachBudget + totalPlayerBudget;

    totalExpense.innerText = totalCost;

})