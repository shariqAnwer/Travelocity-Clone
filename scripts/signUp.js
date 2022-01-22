function validate(e) {
    e.preventDefault()

    var email = document.getElementById("email").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var pass = document.getElementById("pass").value;
    
    

    if(email == "") {
        alert("Please fill all the details");
        return false;
    }
    if(fname == "") {
        alert("Please fill all the details");
        return false;
    }     
    if(lname == "") {
        alert("Please fill all the details");
        return false;
    } 
    if(pass == "") {
        alert("Please fill all the details");
        return false;
    }

    // console.log(name, contact, email, pass);

    var users = JSON.parse(localStorage.getItem("userData")) || [];

    var user = {
        email: email,
        fname: fname,
        lname: lname,
        pass: pass,
    };

    users.push(user);
    localStorage.setItem("userData", JSON.stringify(users));

    console.log(users);


    window.location.href = "/signIn.html"

}
