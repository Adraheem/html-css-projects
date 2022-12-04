let username = prompt("Enter your username");
while (username.length > 10) {
  username = prompt(
    "Username cannot be more than 10\nEnter your username again"
  );
}

let password = prompt("Enter your password");
while (password.length < 6) {
  password = prompt(
    "Password cannot be less than 6 characters\nEnter your password again"
  );
}

let confirmPassword = prompt("Confirm your password");
while (password !== confirmPassword) {
  confirmPassword = prompt("Passwords do not match\nEnter your password again");
}

let customer = {
  username: username,
  password: password,
  confirmPassword: confirmPassword,
};

console.log(customer);

let usernameSpan = document.getElementById("usernameSpan");
let passwordSpan = document.getElementById("passwordSpan");
let confirmPasswordSpan = document.getElementById("confirmPasswordSpan");

usernameSpan.innerHTML = customer.username;
passwordSpan.innerHTML = customer.password;
confirmPasswordSpan.innerHTML = customer.confirmPassword;
