let num = prompt("number : ");

if (num === null || num.trim() === '' || isNaN(num)) {
    alert("Invalid number");

} else {
    if (+num > 0) alert("Positive number"); // force ให้เปลี่ยน datatype เป็น number
    else if (+num === 0) alert("Zero");
    else if (+num < 0) alert("Negative number");
}