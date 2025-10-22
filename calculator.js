// calculator.js
export function add(balance, amount) {
  return balance + amount;
}

export function subtract(balance, amount) {
  return balance - amount;
}

export function getBalance(credit, debit) {
  return {
    CreditBalance: credit,
    DebitBalance: debit,
  };
}
