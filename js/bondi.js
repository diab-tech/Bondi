// Update Copyright Year
let yearEl = document.querySelector(".footer .year");
let currentYear = new Date().getFullYear();

yearNum = document.createTextNode(currentYear);
yearEl.appendChild(yearNum);
