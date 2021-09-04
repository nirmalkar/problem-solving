//calculate total amount of total cash in all the accounts in the bank
var bankDetails = {
  bankId: 13,
  accounts: [
    { accountName: "abc", currentBalance: { cash: 2000 }, subAccounts: [] },
    {
      accountName: "bcd",
      currentBalance: { cash: 5000 },
      subAccounts: [
        {
          accountName: "efg",
          currentBalance: { cash: 7000 },
          subAccounts: [
            {
              accountName: "kge",
              currentBalance: { cash: 6000 },
              subAccounts: [],
            },
          ],
        },
        { accountName: "der", currentBalance: { cash: 8000 }, subAccounts: [] },
      ],
    },
  ],
};

function calculateTotalAmount(accounts) {
  let total = 0;
  accounts.forEach((account) => {
    total += account.currentBalance.cash;
    if (account.currentBalance && account.currentBalance.cash) {
      total += calculateTotalAmount(account.subAccounts);
    }
  });
  return total;
}

console.log(calculateTotalAmount(bankDetails.accounts));
