
let message = prompt ("Type some information: ");

if (message !== "" && message !== " ") {
    console.log("It is number");
} else if ( message == "false" && message == "true") {
    console.log("It is Boolean");
} else {
    console.log ("It is string");
}

