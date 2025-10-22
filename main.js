// main.js
import { add, subtract } from './bank/calculator.js';
import { WelcomeMessage } from './bank/greet.js';

const greetingEl = document.getElementById('greetings');
const balanceBubble = document.getElementById('balance-bubble');
const addBtn = document.getElementById('addBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const historyList = document.getElementById('history-list');

let balance = 5000; // initial balance
let transactions = [];

// Greeting
const greeting = WelcomeMessage('Emmy Don');
greetingEl.textContent = greeting;

// Update balance display
function updateUI() {
  balanceBubble.textContent = `$${balance.toLocaleString()}`;
  renderHistory();
}

// Record and display transactions
function addTransaction(type, amount) {
  const date = new Date().toLocaleTimeString();
  transactions.unshift({ type, amount, date });
  updateUI();
}

// Render transaction history
function renderHistory() {
  historyList.innerHTML = "";
  transactions.forEach(tx => {
    const item = document.createElement('div');
    item.className = `flex justify-between items-center p-3 rounded-lg shadow-sm mb-2 ${
      tx.type === 'Deposit'
        ? 'bg-green-100 text-green-800'
        : 'bg-red-100 text-red-800'
    }`;
    item.innerHTML = `
      <span>${tx.type}</span>
      <span>$${tx.amount.toLocaleString()}</span>
      <span class="text-xs text-gray-500">${tx.date}</span>
    `;
    historyList.appendChild(item);
  });
}

// Deposit
addBtn.addEventListener('click', () => {
  const amount = 1000;
  balance = add(balance, amount);
  addTransaction('Deposit', amount);
});

// Withdraw
withdrawBtn.addEventListener('click', () => {
  const amount = 500;
  if (balance >= amount) {
    balance = subtract(balance, amount);
    addTransaction('Withdrawal', amount);
  } else {
    alert("Insufficient funds!");
  }
});

// Initial render
updateUI();
