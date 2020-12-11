// Registration page:
/* Email validation still needs to be done. Registration page needs to redirect to the login
page after all details are entered correctly. Furthermore, registration details need to stored
and reused when logging in after redirecting. */ 

const registrationbutton = document.getElementById("registrationbutton");
const usernamelabel = document.getElementById("usernamelabel");
const usernameinputbox = document.getElementById("usernameinputbox")
const newpasswordlabel = document.getElementById("newpasswordlabel");
const newpasswordinputbox = document.getElementById("newpasswordinputbox");
const confirmnewpasswordlabel = document.getElementById("confirmnewpasswordlabel");
const confirmnewpasswordinputbox = document.getElementById("confirmnewpasswordinputbox");
const emailinputbox = document.getElementById("emailinputbox");
const emaillabel = document.getElementById("emaillabel");


registrationbutton.addEventListener("click", Registration);

function Registration(event) { //Note that, unlike React, errors are given when a line function is used instead.
    event.preventDefault(); // To prevent page from refreshing.
    
    // Validation of username:
    if (usernameinputbox.value.trim() == "") { //the trim() method removes the spaces before and after the characters of a string, which is the input value in this case.
        usernamelabel.innerHTML = "Username is blank"; //This overrides the previously set content of the element.
        usernamelabel.className = "errormessagedisplayed"; //This overrides the previously set class of the element.
        usernameinputbox.className = "inputboxincorrect";
    } else {
        usernamelabel.className = "errormessagehidden";
        usernameinputbox.className = "inputboxcorrect";
        const userName = usernameinputbox.value.trim(); 
        localStorage.setItem("registeredUserName", userName); //Sets item to be transferred from this js file to another js file.
    }
    
    // Validation of email:
    if (emailinputbox.value.trim() == "") { 
        emaillabel.innerHTML = "Email is blank"; 
        emaillabel.className = "errormessagedisplayed"; 
        emailinputbox.className = "inputboxincorrect";
    } /*else if (passwordinputbox.value.trim() != "super7") { 
        passwordlabel.innerHTML = "Incorrect password"; 
        passwordlabel.className = "errormessagedisplayed";
        passwordinputbox.className = "inputboxincorrect";
    } */else {
        emaillabel.className = "errormessagehidden";
        emailinputbox.className = "inputboxcorrect";
    }
    
    // Validation of new password:
    if (newpasswordinputbox.value.trim() == "") { 
        newpasswordlabel.innerHTML = "Password is blank"; 
        newpasswordlabel.className = "errormessagedisplayed"; 
        newpasswordinputbox.className = "inputboxincorrect";
    } else {
        newpasswordlabel.className = "errormessagehidden";
        newpasswordinputbox.className = "inputboxcorrect";
    }
    
    // Validation and confirmation of new password:
    if (confirmnewpasswordinputbox.value.trim() == "") { 
        confirmnewpasswordlabel.innerHTML = "Password is blank"; 
        confirmnewpasswordlabel.className = "errormessagedisplayed"; 
        confirmnewpasswordinputbox.className = "inputboxincorrect";
    } else if (confirmnewpasswordinputbox.value.trim() != newpasswordinputbox.value.trim()) {
        confirmnewpasswordlabel.innerHTML = "Password does not match"; 
        confirmnewpasswordlabel.className = "errormessagedisplayed"; 
        confirmnewpasswordinputbox.className = "inputboxincorrect";
    } else {
        confirmnewpasswordlabel.className = "errormessagehidden";
        confirmnewpasswordinputbox.className = "inputboxcorrect";
        const passWord = confirmnewpasswordinputbox.value.trim();
        localStorage.setItem("registeredPassWord", passWord); //Sets item to be transferred from this js file to another js file.
    }

    //Redirecting
    if (usernameinputbox.value.trim() != "" && emailinputbox.value.trim() != "" && 
        newpasswordinputbox.value.trim() != "" && confirmnewpasswordinputbox.value.trim() != ""
        && confirmnewpasswordinputbox.value.trim() == newpasswordinputbox.value.trim()) {
            window.location.href = "index.html"; //Redirects to specified page/address.
    }
}