export function timeAgo(time) {
  if (!time) {
    return null;
  }

  const date = typeof time === "object" ? time : new Date(time);
  const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
  const today = new Date();
  const yesterday = new Date(today - DAY_IN_MS);
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
  const isThisYear = today.getFullYear() === date.getFullYear();

  if (seconds < 5) {
    return "şimdi";
  } else if (seconds < 60) {
    return `${seconds} saniye önce`;
  } else if (seconds < 90) {
    return "yaklaşık 1 dakika önce";
  } else if (minutes < 60) {
    return `${minutes} dakika önce`;
  } else if (isToday) {
    return "bugün";
  } else if (isYesterday) {
    return "dün";
  } else if (isThisYear) {
    return  getFormattedDate(date);
  }

  return "bir seneden önce";
}

const MONTH_NAMES = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık"
];

function getFormattedDate(date) {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    // Adding leading zero to minutes
    minutes = `0${minutes}`;
  }
  
    return `${day}. ${month} ${hours}:${minutes}`;
}