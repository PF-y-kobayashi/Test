// うるう年の判定
function isLeapYear(year: number): boolean {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

const year: number = 2022;
const isLeap: boolean = isLeapYear(year);
console.log(`Is ${year} a leap year? ${isLeap}`);


