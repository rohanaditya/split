const addExpenseButton = document.querySelector('.add-expense');
const modal = document.getElementById('add-expense-modal');
const closeModalButton = document.querySelector('.close-modal');
const expenseForm = document.getElementById('expense-form');
const payerSelect = document.getElementById('payer');
const sharedBySelect = document.getElementById('shared-by');

// Replace with your actual list of names
const namesList = ['Alice', 'Bob', 'Charlie', 'Diana'];

// Function to populate dropdown menus with names
function populateDropdowns() {
  namesList.forEach(name => {
    const payerOption = document.createElement('option');
    payerOption.value = name;
    payerOption.text = name;
    payerSelect.appendChild(payerOption);

    const sharedByOption = document.createElement('option');
    sharedByOption.value = name;
    sharedByOption.text = name;
    sharedByOption.selected = true; // Select all names by default (can be adjusted)
    sharedBySelect.appendChild(sharedByOption);
  });
}

populateDropdowns(); // Call the function to populate dropdowns on page load

// Open modal on clicking "Add Expense" button
addExpenseButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal on clicking "X" button or pressing Esc key
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});

// Handle form submission (log data and close modal)
expenseForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const expenseName = document.getElementById('expense-name').value;
  const expenseCost = parseFloat(document.getElementById('expense-cost').value);
  const payer = document.getElementById('payer').value;
  const sharedBy = Array.from(document.getElementById('shared-by').selectedOptions)
                     .map(option => option.value);

  console.log(`Expense Name: ${expenseName}`);
  console.log(`Expense Cost: ${expenseCost}`);
  console.log(`Payer: ${payer}`);
  console.log(`Shared By: ${sharedBy.join(', ')}`); // Join selected names into a comma-separated string

  modal.style.display = 'none'; // Close modal after logging data
});
