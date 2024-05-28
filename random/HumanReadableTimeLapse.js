//https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(secondsNumber) {
  if (secondsNumber <= 0) {
    return "now";
  }

  let ocurrencesNumber = 0;
  let message = "";
  const secondsMinute = 60;
  const secondsHour = 3600;
  const secondsDay = 86400;
  const secondsMonth = 2592000;
  const secondsYear = 31104000;

  let format = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };

  let currentSecondsRemaining = secondsNumber;

  if (currentSecondsRemaining >= secondsYear) {
    format.year = Math.trunc(currentSecondsRemaining / secondsYear);
    currentSecondsRemaining = Math.trunc(
      currentSecondsRemaining - format.year * secondsYear
    );
  }

  if (currentSecondsRemaining >= secondsMonth) {
    format.month = Math.trunc(currentSecondsRemaining / secondsMonth);
    currentSecondsRemaining = Math.trunc(
      currentSecondsRemaining - format.month * secondsMonth
    );
  }

  if (currentSecondsRemaining >= secondsDay) {
    format.day = Math.trunc(currentSecondsRemaining / secondsDay);
    currentSecondsRemaining = Math.trunc(
      currentSecondsRemaining - format.day * secondsDay
    );
  }

  if (currentSecondsRemaining >= secondsHour) {
    format.hour = Math.trunc(currentSecondsRemaining / secondsHour);
    currentSecondsRemaining = Math.trunc(
      currentSecondsRemaining - format.hour * secondsHour
    );
  }

  if (currentSecondsRemaining >= secondsMinute) {
    format.minute = Math.trunc(currentSecondsRemaining / secondsMinute);
    currentSecondsRemaining = Math.trunc(
      currentSecondsRemaining - format.minute * secondsMinute
    );
  }

  format.second = currentSecondsRemaining;

  for (let key in format) {
    if (format[key] > 1) {
      ocurrencesNumber++;
      message = `${message} ${format[key]} ${key}s,`;
    }
    if (format[key] === 1) {
      ocurrencesNumber++;
      message = `${message} ${format[key]} ${key},`;
    }
  }

  message = message.split("");
  message.pop();
  message.shift();
  message = message.join("");

  message = message.split("");

  if (message.lastIndexOf(",") !== -1) {
    let leftSide = message.slice(0, message.lastIndexOf(","));
    let rightSide = message.slice(message.lastIndexOf(",") + 1);
    let newMessage = `${leftSide.join("")} and ${rightSide.join("")}`;
    return newMessage.replace("  ", " ");
  } else {
    return message.join("");
  }
}

console.log(formatDuration(3600));
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
console.log(formatDuration(15731080));
console.log(formatDuration(6551889));
