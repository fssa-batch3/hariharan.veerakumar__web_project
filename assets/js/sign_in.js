
const signUp = document.getElementById("Form");
signUp.addEventListener("click",function (event){

let array = [];
// function onPageLoad(){
//   let recollect = JSON.parse(localStorage.getItem("usersdetails"));
//   if (recollect){
//     array = recollect;
//   }
// }
// onPageLoad();


    event.preventDefault();
    if (localStorage.getItem("usersdetails") != null){
        array = JSON.parse(localStorage.getItem("usersdetails"));
    }
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    let conpassword = document.getElementById("conpwd").value;
    // let emailId = isEmailExist(email);
    // if (password != conpassword){
    //     alert("Invalid credentials");
    // } else if (emailId){
    //     alert("Email already exists")
    // }else{
    //     let sign_user_data ={
    //         name: user_name,
    //         email: user_email,
    //         pwd: user_pass,
    //         conpwd:user_confirmpass,
    //     }
    let sign_user_data ={
        name,
         email,
        pwd,
        conpwd,
    }

    console.log(sign_user_data)


    if (password === conpassword){  
           
            window.location.href = "../pages/Home_workout.html";
        } 
        else{
            alert("Invalid credentials");
        }
        array.push(sign_user_data);
        let arrayupdate = JSON.stringify(array);
        localStorage.setItem("usersdetails",arrayupdate);
       
        document.querySelector("Form").reset();
    }
);
// for email
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
// for password visible
function visiblevalue(){
    const vari = document.getElementById("check");

    if(vari.checked){
        document.getElementById("password").type = "text";
    }else {
        document.getElementById("password").type = "password";
    }
}