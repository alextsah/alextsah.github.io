document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Admin' && password === 'Admin') {
        window.location.href = 'hello.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
