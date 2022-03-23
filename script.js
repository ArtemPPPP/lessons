let title = "Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 15000;
let rollback = 50;
let fullPrice = 15000;
let adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + screenPrice + "рублей" + " " + "Стоимость разработки сайта" + fullPrice + "рублей");

console.log(screens.toLowerCase);
console.log(screens.split(","));

console.log((fullPrice * (rollback/100)));