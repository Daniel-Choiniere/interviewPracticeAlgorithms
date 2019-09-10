var readlineSync = require("readline-sync");

// annualInterestCalculated = (deposit, time, rate) => {
//   let decimalRate = rate * 0.01;
//   return deposit * decimalRate;
// };

monthlyInterestCalculated = (balance, time, rate) => {
  let decimalRate = (rate * 0.01) / 12;
  return balance * decimalRate * time;
};

const calculateInterest = () => {
  totalBalance = 0;

  let rate = readlineSync.question("What is the APR? ");
  let time = readlineSync.question(
    "How many months do you want to calculate interest for? "
  );

  let depositYesNo = "yes";
  while (depositYesNo !== "no") {
    //   let balance = readlineSync.question("What is your current account balance? ");
    //   totalBalance += parseInt(balance);

    let deposit = readlineSync.question(
      "How much would you like to deposit today? "
    );

    //   let annualInterestMade = annualInterestCalculated(deposit, time, rate);
    let monthlyInterestMade = monthlyInterestCalculated(
      totalBalance,
      time,
      rate
    );

    let balanceAfterDeposit =
      monthlyInterestMade + parseInt(totalBalance) + parseInt(deposit);

    console.log("Balance before deposit: $" + totalBalance);

    totalBalance = balanceAfterDeposit;

    depositYesNo = readlineSync.question(
      "Do you need to make another deposit? yes or no:  "
    );

    console.log(
      "Total interest made: $" +
        monthlyInterestMade +
        " " +
        "over " +
        time +
        " " +
        "months."
    );
    console.log("Balance after deposit: $" + balanceAfterDeposit);
  }
  console.log("Total balance: $" + totalBalance);
};

calculateInterest();
