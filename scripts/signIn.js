function validate(e) {
    e.preventDefault()

    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;    
    
     
    if(email == "") {
        alert("Please fill all the details");
        return false;
    }
    if(pass == "") {
        alert("Please fill all the details");
        return false;
    }

    // console.log(email, pass);

    var users = JSON.parse(localStorage.getItem("userData"));

    for(var i = 0; i < users.length; i++){
        if(users[i].email == email && users[i].pass == pass) {
            window.location.href = "/index.html"
        }else {
            window.location.href = "/signIn.html"
            alert("Invalid username and password");
            
        }
    }

    // users.forEach(function (user) {

    //     console.log("user:", user.email, user.pass);

    //     if (email === user.email && password === user.pass) {

    //         window.location.href = "home.html";
    //     }

    //     else {
    //         //alert("invalid Credentials")

    //         window.location.href = "signIn.html";
    //     }
    // });

}