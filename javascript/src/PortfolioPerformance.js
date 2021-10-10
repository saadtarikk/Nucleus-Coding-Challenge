
const prices = [
    { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 },
    { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 },
    { effectiveDate: new Date(2021, 8, 3, 5, 0, 0), price: 36080.06 },
    { effectiveDate: new Date(2021, 8, 3, 13, 0, 0), price: 37111.11 },
    { effectiveDate: new Date(2021, 8, 6, 5, 0, 0), price: 38041.47 },
    { effectiveDate: new Date(2021, 8, 7, 5, 0, 0), price: 34029.61 },
];

const transactions = [
    { effectiveDate: new Date(2021, 8, 1, 9, 0, 0), value: 0.012 },
    { effectiveDate: new Date(2021, 8, 1, 15, 0, 0), value: -0.007 },
    { effectiveDate: new Date(2021, 8, 4, 9, 0, 0), value: 0.017 },
    { effectiveDate: new Date(2021, 8, 5, 9, 0, 0), value: -0.01 },
    { effectiveDate: new Date(2021, 8, 7, 9, 0, 0), value: 0.1 },
];

export function getDailyPortfolioValues() {
    const dailyValues = [];
    //const dateValues = {};
    let portfolioTotal = 0;
    let coinTotal = 0;
    let currentPrice = 0;

    // Get date range and change to ISO string
    for(let date = 1; date < 8; date++){
        const dateRange = {};
        dateRange["effectiveDate"] = new Date(2021, 8, date, 23, 59).toISOString().slice(0,10)
        dateRange["value"] = portfolioTotal;
        dailyValues.push(dateRange);
    }
    // Filter transaction and prices on given dates
    for(let i = 0; i < 7; i++){
        let indexDate = dailyValues[i]["effectiveDate"];
        console.log("The date is " + indexDate);
        const trans = transactions.filter(item => item.effectiveDate.toISOString().slice(0,10) === indexDate);
        const price = prices.filter(item => item.effectiveDate.toISOString().slice(0,10) === indexDate);
        if(price.length !== 0){
            currentPrice = price[price.length - 1].price;
        }
        // update portfolio total and coin total on each iteration
        if(trans.length >= 1){
            for(let i = 0; i < trans.length; i++){
                portfolioTotal +=  parseFloat((trans[i].value * currentPrice).toFixed(5))
                // console.log("portfolio total is " + portfolioTotal);
                coinTotal += parseFloat((trans[i].value).toFixed(4));
                // console.log("total coin is " + coinTotal);
            }
        } else {
            console.log("No transactions");
            portfolioTotal = parseFloat((coinTotal * currentPrice).toFixed(5));
        }
        dailyValues[i]["value"] = portfolioTotal

        console.log("current price is " + currentPrice)
        console.log("total coin is " + coinTotal);
        console.log("Portfolio value is " + portfolioTotal);
    }
    return dailyValues;
}
console.log(getDailyPortfolioValues())








//Nucleus has a requirement to report on the portfolio performance of our clients’ bitcoin investments.
// Skeleton implementations have been provided in Java and JavaScript.
// Choose one of the two languages, implement getDailyPortfolioValues and get the unit test passing.
// In the PortfolioPerformance file, a list of bitcoin prices and a list of transactions are provided.
// Both lists are sorted by date in ascending order.
// At the beginning of the reporting period, assume that the client has 0 bitcoins.
// The reporting period is 01-09-2021 to 07-09-2021.
// For each day in the reporting period, output the date and the portfolio value.
// This should be output in ascending order by date.
// Portfolio value = number of units held at the end of the given day * most recent fund price for the given day.
