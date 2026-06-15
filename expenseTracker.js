let expenses = [];

// Add Expense
function addExpense(description, amount) {
    expenses.push({
        description: description,
        amount: amount
    });

    console.log("Expense Added Successfully");
}

// Display Expenses
function displayExpenses() {

    console.log("\nExpense List");

    expenses.forEach((expense, index) => {
        console.log(
            (index + 1) + ". " +
            expense.description +
            " - ₹" +
            expense.amount
        );
    });
}

// Calculate Total Expense
function calculateTotal() {

    let total = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    console.log("\nTotal Expense: ₹" + total);
}

// Delete Expense
function deleteExpense(index) {

    if(index >= 0 && index < expenses.length){

        expenses.splice(index, 1);

        console.log("Expense Deleted");
    }
    else{
        console.log("Invalid Index");
    }
}

// Sample Data
addExpense("Food", 500);
addExpense("Travel", 1000);
addExpense("Shopping", 2000);

displayExpenses();

calculateTotal();

deleteExpense(1);

displayExpenses();

calculateTotal();