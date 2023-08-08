let user = prompt("What's you name ?");

if (user === 'codecamp') {
    let password = prompt('password:');
    if (password === '123456') {
        alert(`Welcome ${user}`)
        end
    } else {
        alert("Wrong password");
    }
} else {
    let user = 'guest';
    alert(`Welcome ${user}`)
}