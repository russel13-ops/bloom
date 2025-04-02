let correctUsername = "admin123";
let correctPassword = "admin123";
let attempt = 0;
let lockout = false;

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    if (lockout) {
        alert("Please wait 10 seconds before trying again.");
        return;
    }

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        alert("Log in successful!");
        window.location.href = 'index.html'; // Redirect to homepage
    } else {
        attempt++;
        if (attempt >= 2) {
            alert("You have made two incorrect attempts. Please try again in 10 seconds.");
            lockout = true;

            setTimeout(function () {
                alert("You can try again now.");
                attempt = 0;
                lockout = false;
            }, 10000);
        } else {
            alert("Incorrect Username or Password. Try again.");
        }
    }
});
