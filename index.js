function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    messageDiv.style.display = "none";
    messageDiv.classList.remove("error", "success");

    if (username === '' || password === '') {
        messageDiv.textContent = "Both fields are required!";
        messageDiv.classList.add("error");
        messageDiv.style.display = "block";
        return false;
    }


    if (username === 'admin' && password === '123') {
        messageDiv.textContent = "Login successful!";
        messageDiv.classList.add("success");
        messageDiv.style.display = "block";
        return true; 
    } else {
        messageDiv.textContent = "Invalid username or password!";
        messageDiv.classList.add("error");
        messageDiv.style.display = "block";
        return false; 
    }
}