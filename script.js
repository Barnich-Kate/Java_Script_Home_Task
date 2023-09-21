let x;
let i; 
let y;
let message;

function showResult (i){
    while (i < 1) {
    message = confirm ("Type yes or no");
    if (message == false) {
        console.log ("Робота програми завершена");
    } else if (message == true){

        x = prompt("Type X");
        y = prompt("Type Y from 0 to 4");
        switch (x) {
            case 4:
                console.log (x*y);
                break;
            case 3: 
                console.log (x*y);
                break;
            case 2: 
                console.log (x*y);
                break;
            case 1:
                console.log (x*y);
                break;
            case 0:
                console.log (x*y);
                break;
        }

    }

}

}
showResult (0);