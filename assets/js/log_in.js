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