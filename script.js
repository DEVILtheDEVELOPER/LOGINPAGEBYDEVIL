function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("errorMessage");

  // Simple validation
  if (username === "your_username" && password === "your_password") {
    alert("Login successful!");
  } else {
    errorMessage.innerText = "Invalid username or password";
  }
}
