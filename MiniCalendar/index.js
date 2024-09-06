const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthNameEl.innerHTML = date.toLocaleDateString("en",{month:"long"});
const dayName = date.getDay();
dayNameEl.innerHTML = date.toLocaleDateString("en",{weekday:"long"});
const dayNum = date.getDay();
dayNumEl.innerHTML = date.toLocaleDateString("en",{day:"numeric"});
const year = date.getFullYear();
yearEl.innerHTML = date.toLocaleDateString("en",{year:"numeric"});
