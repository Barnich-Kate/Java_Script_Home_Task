let message;
let WeekDay = [];

while (message !== '0') {
    message = prompt("Введіть значення у форматі 'рік-місяць-день'. Для завершення - натисніть 0");
    if (message === '0') {
        break;
    }
}
    let date = new Date(message);

function getDayOfTheWeek (d) {
    var d = new Date(message);
    var dayOfWeek = d.getDay();
    
    switch (d.getDay()) {
        
        case 0:
            console.log("Неділя");
            break;
        case 1:
            console.log("Понеділок");
            break;
        case 2: 
            console.log("Вівторок");
            break;
        case 3:
            console.log("Середа");
            break;
        case 4: 
            console.log("Четвер");
            break;
        case 5:
            console.log("П'ятниця");
            break;
        case 6:
            console.log("Субота");
            break;
    }
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        WeekDay.push(date);
    }
    for (let i = 0; i < WeekDay.length; i++) {
        console.log(dayOfWeek(i));
    }
}

getDayOfTheWeek(parseInt(message));