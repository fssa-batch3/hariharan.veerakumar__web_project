
function createUser(email,sign_user_data) {
    
try {
    
    let array = [];
    let match = false;

    if (localStorage.getItem("usersdetails") != null) {
        array = JSON.parse(localStorage.getItem("usersdetails"));
        
    }
  
    // check email is already registered or not
    for (let i = 0; i < array.length; i++) {
        if (array[i]["user_email"] === email) {
            match = true;
            break;
        }
    }
    // if the email already exists throw an alert
    if (match === true) {
        // alert("The Email is already exists")
        Notify.error("The Email is already exists")
        throw new Error("The Email is already exists")
       
    }
    // If it a new user store the data in DB 
    else {
        array.push(sign_user_data);
        // let arrayupdate = JSON.stringify(array);
        localStorage.setItem("usersdetails", JSON.stringify(array));
        window.location.href = "../pages/Log_in.html"
    }
    
    return true;
}
catch (error){
  console.error(error);
  return false
}
}

function readUser(){

}

function updateUser() {
    
}

function deleteUser() {
    
}