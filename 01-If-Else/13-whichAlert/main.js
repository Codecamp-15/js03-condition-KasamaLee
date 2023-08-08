let company = prompt("Which company created JavaScript?");
company == "Netscape" ? alert("Right!") : alert("Wrong.");

// ได้ เพราะเป็นการเขียนแบบ ternary 
// prompt => return string เก็บค่าลง company
// จากนั้นเทียบค่าตัวแปร company กับ "Netscape" 
// if true => alert("Right!"), if false => alert("Wrong.")