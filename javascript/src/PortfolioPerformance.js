// const moment = require( "moment");
// const collect = require("collect.js")

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



function getDates (startDate, endDate) {
    const dates = []
    let currentDate = startDate
    const addDays = function (days) {
        const date = new Date(this.valueOf())
        date.setDate(date.getDate() + days)
        return date
    }
    while (currentDate < endDate) {
        dates.push(currentDate)
        currentDate = addDays.call(currentDate, 1)
    }
    return dates
}
const dates = getDates(new Date(2021, 8, 1), new Date(2021, 8, 9))

var startDate = new Date (2021, 8, 1, 0, 59)
var endDate = new Date(2021, 8, 8,0, 59)
const portfolioHoldings = prices.filter(function (trans){
    return trans.effectiveDate >= startDate && trans.effectiveDate <= endDate
})
console.log(portfolioHoldings)




// console.log(getDates(new Date(2021, 8, 1), new Date(2021, 8, 8)))
//
// Usage
// dates.forEach(function (date) {
//     console.log(date.toISOString().slice(0,10))
// })

// const reportingPeriods = []
// const dateFormat = "YYYY-MM-DD"
// const timeFormat = 'HH:mm:ss.SSS'
// const dateTimeFormat = dateFormat + 'T' + timeFormat + 'Z'
// function getTimestops(start, end, interval = 1, unit = 'day') {
//     let startDateTime = moment(start, dateFormat);
//     let endDateTime = moment(end, dateFormat);
//     if (endDateTime.isBefore(startDateTime)) {
//         endDateTime.add(1, 'day');
//     }
//     let timeStops = [];
//     while (startDateTime.isBefore(endDateTime)) {
//         timeStops.push(new moment(startDateTime).format(dateFormat));
//         startDateTime.add(interval, unit);
//     }
//     timeStops.push(endDateTime.format(dateFormat))
//
//     // if (timeStops.length % 2 !== 0) {
//     //     timeStops.pop()
//     //     timeStops.push(timeStops[timeStops.length - 1])
//     //     timeStops.push(endDateTime.format(da))
//     // }
//     return timeStops;
// }
//
// const timeStops = getTimestops("2021-09-01", "2021-09-07");
// console.log(timeStops)
//
// var getDailyPortfolioValueReport = timeStops.map(item => {
//     return {effectiveDate: item, value: 0}
// })
// // console.log(getDailyPortfolioValueReport)
//
// let newPrices =collect(prices).groupBy((item)=>{
//     return item.effectiveDate.toISOString().slice(0,10)
// })

// console.log('prices: ',newPrices)

// newPrices.each((item)=>{
//     console.log(item)
// })

// let newTransactions = collect(transactions).groupBy((item)=>{
//     return item.effectiveDate.toISOString().slice(0,10)
// })
// let newTransactionss = newTransactions.map((item)=>{
//     console.log(item)
//     return {item:item.sum('value')}
// })
// console.log('newTransactions: ',newTransactionss)
// var getDailyPortFolioValue = transactions.map((item)=>{
//     let effectiveDate = item.effectiveDate.toISOString().slice(0,10)
//     let date = newPrices.get(effectiveDate)

    // console.log(effectiveDate,maxDatePrice)
// })

// function getDailyPortfolioValues() {
//     let dailyPortfolioValue = []
//     let currentCoinPrice = 0;
//     let portfolioHoldings = 0;
//     let dateRange = []
//
//     for(let day = 2; day <= 8; day++ ) {
//         let dates = new Date(2021, 8, day).toISOString().slice(0,10)
//         dateRange.push(dates)
//     }
//
//
//
//
//     return dateRange
// }
// console.log(getDailyPortfolioValues())


// console.log(reportingPeriods)
// export function getDailyPortfolioValues()  {
//     const dailyPortfolioValues = [];
//     dates.forEach((date) => {
//         dailyPortfolioValues.push({"effectiveDate": date.toISOString().slice(0,10), "value": 0 });
//     })
//     // transactions.forEach((transaction) => {
//     //     dailyPortfolioValues.push({"effectiveDate": transaction.effectiveDate.sort(function (a, b) {
//     //         return new Date(a.effectiveDate) - new Date(b.effectiveDate)
//     //         })
//     // })
//     return dailyPortfolioValues
// }

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
