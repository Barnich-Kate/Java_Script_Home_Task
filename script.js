
/*let date1 = prompt ("Type number from 1 to 7");
switch (Number(date1)) {
    case 1:
        alert ( "Monday" );
        break;
    case 2:
        alert ( "Tuesday" );
        break;
    case 3: 
        alert ( "Wednesday" );
        break;
    case 4:
        alert ( "Thursday" );
        break;
    case 5:
        alert ( "Friday" );
        break;
    case 6:
        alert ( "Saturday" );
        break;
    case 7: 
        alert ( "Sunday" );
        break;
}*/



function getDayWeek (y, m, d) {
    let date = new Date();
    let weekday = date.getDay();
    console.log(weekday);
    return weekday;
}

let year = prompt ("Type year: ");
let month = prompt ("Type month: ");
let day = prompt ("Type day: ");

getDayWeek (parseInt(year, month, day));




