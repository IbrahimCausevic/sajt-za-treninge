function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "123") {
    window.location.href = "./calendar/";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function WPassword() {
  var password = document.getElementById("password").value;
  if (password === "321") {
    window.location.href = "../calendar/";
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
