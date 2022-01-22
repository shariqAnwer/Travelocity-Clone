let login = document.querySelector("#login");

document.querySelector("#login-menu").onclick = (e) => {
    login.classList.toggle('active');
    e.preventDefault();
}

// homepage starts 
document.getElementById("btn-id-homepage").onclick = function () {
    location.href = "hotels.html";
  };



  var users = JSON.parse(localStorage.getItem("userData"));
  // console.log('users:', users[0].fname);

  document.getElementById("login-menu").innerHTML = "Hello" + " " + users[0].fname;


  


