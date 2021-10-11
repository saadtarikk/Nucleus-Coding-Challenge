
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

function getDailyPortfolioValues() {
    let dailyValues = [];
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
        const transaction = transactions.filter(item => item.effectiveDate.toISOString().slice(0,10) === indexDate);
        const price = prices.filter(item => item.effectiveDate.toISOString().slice(0,10) === indexDate);
        if(price.length > 0){
            currentPrice = price[price.length - 1].price;
        }
        console.log("Current Price: " + currentPrice);
        // update portfolio total and coin total on each iteration
        if(transaction.length > 0){
            for(let i = 0; i < transaction.length; i++){
                coinTotal += transaction[i].value;
                console.log("total coin is " + coinTotal);
                portfolioTotal +=  parseFloat((transaction[i].value * currentPrice).toFixed(5))
                console.log("portfolio total is " + portfolioTotal);
            }
        } else {
            console.log("No transactions");
            portfolioTotal = parseFloat((coinTotal * currentPrice).toFixed(5))
        }
        dailyValues[i]["value"] = portfolioTotal

        // console.log("current price is " + currentPrice)
        // console.log("total coin is " + coinTotal);
        // console.log("Portfolio value is " + portfolioTotal);
    }
    return dailyValues;
}

console.log(getDailyPortfolioValues())