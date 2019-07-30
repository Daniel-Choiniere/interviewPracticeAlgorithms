function yearCheck(month, year) {
    let today = new Date();
    let userDate = new Date(year + '-' + month);
    console.log(today);
    console.log(userDate);

    let timePassed = today - userDate;

    let days = (timePassed / (1000 * 60 * 60 * 24)).toFixed(1);
    let years = days / 365
    console.log(years.toFixed(2));
}

console.log(yearCheck(6, 1985));
console.log(yearCheck(7, 2018));
console.log(yearCheck(2, 2018));