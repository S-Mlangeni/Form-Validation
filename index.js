// Login page:

const loginbutton = document.getElementById("loginbutton");
const usernamelabel = document.getElementById("usernamelabel");
const usernameinputbox = document.getElementById("usernameinputbox")
const passwordlabel = document.getElementById("passwordlabel");
const passwordinputbox = document.getElementById("passwordinputbox");


loginbutton.addEventListener("click", Submission);

function Submission(event) { //Note that, unlike React, errors are given when a line function is used instead.
    event.preventDefault(); // To prevent page from refreshing.
    
    // Validation of username:
    if (usernameinputbox.value.trim() == "") { //the trim() method removes the spaces before and after the characters of a string, which is the input value in this case.
        //Note that the "localStorage.getItem()" returns null when server is first initialized. Thereafter, it will take the stored value or set item once its triggered.
        usernamelabel.innerHTML = "Username is blank"; //This overrides the previously set content of the element.
        usernamelabel.className = "errormessagedisplayed"; //This overrides the previously set class of the element.
        usernameinputbox.className = "inputboxincorrect";
    } else if (usernameinputbox.value.trim() != localStorage.getItem("registeredUserName")) { 
        usernamelabel.innerHTML = "Incorrect username"; 
        usernamelabel.className = "errormessagedisplayed";
        usernameinputbox.className = "inputboxincorrect";
    } else {
        usernamelabel.className = "errormessagehidden";
        usernameinputbox.className = "inputboxcorrect";
    }
    
    // Validation of password:
    if (passwordinputbox.value.trim() == "") { 
        passwordlabel.innerHTML = "Password is blank"; 
        passwordlabel.className = "errormessagedisplayed"; 
        passwordinputbox.className = "inputboxincorrect";
    } else if (passwordinputbox.value.trim() != localStorage.getItem("registeredPassWord")) { 
        passwordlabel.innerHTML = "Incorrect password"; 
        passwordlabel.className = "errormessagedisplayed";
        passwordinputbox.className = "inputboxincorrect";
    } else {
        passwordlabel.className = "errormessagehidden";
        passwordinputbox.className = "inputboxcorrect";
    }

    if (usernameinputbox.value.trim() != "" && usernameinputbox.value.trim() == 
        localStorage.getItem("registeredUserName") &&
        passwordinputbox.value.trim() != "" && passwordinputbox.value.trim() == 
        localStorage.getItem("registeredPassWord")) {
            window.location.href = "firstpage.html";
    }
}