const moment = require("moment-timezone");

function daysBirthday(today, Birthday) {
  const todayNow = new moment(today);
  const myBirthday = new moment(Birthday);
  const differeceofDays = todayNow.diff(myBirthday, "days");
  return Math.abs(differeceofDays);
}
console.log(daysBirthday("1998-05-25", "2024-05-22"));

// Display the number of years, months, and days.
function myAge(Birthday) {
  const todayDay = moment();
  const myBirthday = moment(Birthday);
  let years = todayDay.diff(myBirthday, "years");
  myBirthday.add(years, "years");
  let months = todayDay.diff(myBirthday, "months");
  myBirthday.add(months, "months");
  let days = todayDay.diff(myBirthday, "days");

  return { years, months, days };
}
const { years, months, days } = myAge("1998-05-25");
console.log(`I am ${years} years, ${months} months, and ${days} days old`);

//display the date closest to the current date

function closestDate(date1, date2) {
  const today = moment();
  const momentDate1 = moment(date1);
  const momentDate2 = moment(date2);

  const diff1 = Math.abs(today.diff(momentDate1));
  const diff2 = Math.abs(today.diff(momentDate2));

  return diff1 < diff2
    ? momentDate1.format("YYYY-MM-DD")
    : momentDate2.format("YYYY-MM-DD");
}

const date1 = "2024-05-27";
const date2 = "2023-05-27";

console.log(`The date closest is: ${closestDate(date1, date2)}`);

// display whether the first date is before or after the second date

function compareDates(date1, date2) {
  const momentDate1 = moment(date1);
  const momentDate2 = moment(date2);
  return momentDate1.isBefore(momentDate2)
    ? "date1 is before date2"
    : "date is after date2";
}
console.log(compareDates("2024-05-27", "2024-05-26"));

//Display current time in London

function currenttimeLondon() {
  return moment().tz("Europe/London").format("MMMM Do YYYY, h:mm:ss a");
}
console.log(`Current time in London: ${currenttimeLondon()}`);
