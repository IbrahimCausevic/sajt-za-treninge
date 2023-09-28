function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "J1994S1999B") {
    window.location.href = "../calendar";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function WPassword() {
  var password = document.getElementById("password").value;
  if (password === "J941999SB") {
    window.location.href = "../calendarWL/";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function DietPassword() {
  var password = document.getElementById("password").value;
  if (password === "J999MM994SB") {
    window.location.href = "../diet/";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function DietPasswordWL() {
  var password = document.getElementById("password").value;
  if (password === "J994WL999SB") {
    window.location.href = "../dietWL/";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function goBack() {
  window.history.back();
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
