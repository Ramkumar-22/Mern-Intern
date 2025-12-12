const users = {}; 
function showMessage(text, type) {
  const msg = document.getElementById("message");
  msg.textContent = text;
  msg.className = type ? type : "";
}
function showView(name) {
  document.getElementById("view-login").classList.remove("active");
  document.getElementById("view-register").classList.remove("active");
  document.getElementById("view-forgot").classList.remove("active");
  if (name === "login")
    document.getElementById("view-login").classList.add("active");
  if (name === "register")
    document.getElementById("view-register").classList.add("active");
  if (name === "forgot")
    document.getElementById("view-forgot").classList.add("active");

  showMessage("", "");
}
function registerUser() {
  const user = document.getElementById("reg-username").value.trim();
  const pass1 = document.getElementById("reg-password").value;
  const pass2 = document.getElementById("reg-password2").value;
  if (!user || !pass1 || !pass2) {
    showMessage("Please fill in all fields.", "error");
    return;
  }
  if (pass1 !== pass2) {
    showMessage("Passwords do not match.", "error");
    return;
  }

  if (users[user]) {
    showMessage("Username already exists.", "error");
    return;
  }

  users[user] = pass1;
  showMessage("Registered successfully! You can log in now.", "success");

  document.getElementById("reg-username").value = "";
  document.getElementById("reg-password").value = "";
  document.getElementById("reg-password2").value = "";
  showView("login");
}

function login() {
  const user = document.getElementById("login-username").value.trim();
  const pass = document.getElementById("login-password").value;

  if (!user || !pass) {
    showMessage("Please enter username and password.", "error");
    return;
  }

  if (!users[user]) {
    showMessage("User not found. Please register.", "error");
    return;
  }

  if (users[user] !== pass) {
    showMessage("Incorrect password.", "error");
    return;
  }

  showMessage("Login successful! 🎉", "success");

}

function forgotPassword() {
  const user = document.getElementById("forgot-username").value.trim();

  if (!user) {
    showMessage("Please enter your username.", "error");
    return;
  }

  if (!users[user]) {
    showMessage("This username does not exist.", "error");
    return;
  }

  showMessage("Password reset link would be sent to this user (demo).", "success");
}
