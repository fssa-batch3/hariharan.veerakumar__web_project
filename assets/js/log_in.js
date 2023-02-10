let array = [];
function onPageLoad(){
  let recollect = JSON.parse(localStorage.getItem("usersdetails"));
  if (recollect){
    array = recollect;
  }
}
onPageLoad();

function userInput(){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    
    let emailId = isEmailExist(email);
    let pass = isPasswordExist(password);
    if (pass == false){
        alert("Invalid login credentials");
    }
    if (emailId == false){
        alert("Invalid login credentials");
    }
    if (pass === true && emailId === true){
        window.location.html = "../pages/Home_workout.html"
    }
}

function isEmailExist(inputEmail){
    let isExist = false;
    for(let i = 0; i < array.length; i++){
        if (inputEmail == array[i].email){
            isExist = true;
            break;
        }
    }
    return isExist
}

function isPasswordExist(inputPassword){
    let isExist = false;
    for (let i = 0; i< array.length;i++){
        if (inputPassword == array[i].password){
            isExist = true;
            break;   
        }
    }
    return isExist
}

// for password visible
function visiblevalue(){
    const vari = document.getElementById("check");

    if(vari.checked){
        document.getElementById("password").type = "text";
    }else {
        document.getElementById("password").type = "password";
    }
}


// kamalesh code

​
//             signUpform = document.getElementById("form");
// ​
// ​
//             signUpform.addEventListener("submit", function (event) {
// ​
//                 event.preventDefault();
//                 let userData = []
//                 if (localStorage.getItem("register") != null) {
//                     userData = JSON.parse(localStorage.getItem("register"))
//                 }
                // let userData = lo calStorage.getItem('register');
                // localStorage.setItem(userData)
​
                // if (userData === undefined) {
                // const userData = [];
                // }
// ​
//                 let match = false;
//                 const FullName = document.getElementById('FullName').value;
//                 const Email = document.getElementById('email').value.toLowerCase();
//                 const UserName = document.getElementById('UserName').value;
//                 const Password = document.getElementById('password').value;
//                 const RPassword = document.getElementById('Rpassword').value;
//                 if (Password != RPassword) {
//                     alert("Password and Repeat password not match")
//                 }
// ​
//                 else {
//                     for (let i = 0; i < userData.length; i++) {
//                         if (Email == userData[i]["Email"]) {
//                             match = true;
//                         }
//                     }
//                 }
// ​
//                 if (match == true) {
//                     alert("Email is already Exist");
//                 }
// ​
//                 else {
//                     let userObj = {
//                         FullName, Email, UserName, Password, RPassword
//                     }
//                     console.log(userObj)
// ​
//                     userData.push(userObj);
//                     const str = JSON.stringify(userData);
//                     localStorage.setItem("register", str)
//                     console.log(str)
                    // window.location.href = "Bio.html";
                