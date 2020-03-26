const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const apiKey = "dc1d776dbd3a0997b42ca8767eb533ab";

const dateBuilder = date => {
  let day = days[date.getDay()];
  let dated = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  return `${day} ${dated} ${month} ${year}`;
};
export { months, apiKey, dateBuilder };
