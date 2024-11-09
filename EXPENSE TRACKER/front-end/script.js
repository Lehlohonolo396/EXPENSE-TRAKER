function fetchExpenses() {
    fetch('http://localhost:3000/api/expenses')
        .then(response => response.json())
        .then(data => {
            const expenseList = document.getElementById('expense-list');
            expenseList.innerHTML = ''; 
            data.forEach(expense => {
                const li = document.createElement('li');
                li.textContent = `${expense.description} - $${expense.amount} on ${expense.date}`;
                expenseList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching expenses:', error));
}


document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;

    
    fetch('http://localhost:3000/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description, amount, date })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Expense added:', data);
        fetchExpenses(); 
        document.getElementById('expense-form').reset();
    })
    .catch(error => console.error('Error adding expense:', error));
});


window.onload = fetchExpenses;