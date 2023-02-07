function validateForm(){
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
   
    let err = document.getElementById('login_error');
    var pattern = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;


    

    if(username=="" && password=="" && email=="" && cpassword==""){
        err.innerHTML=("The form is empty!");
        err.style.display="block";
        return false;
    }

    if(email==""){
        err.innerHTML=("Please enter the Email!");
        err.style.display="block";
        return false;
    }

   
    if(!pattern.test(email)){
        err.innerHTML=("Invalid Email!");
        err.style.display="block";
        return false;
    }

    if(username==""){
        err.innerHTML=("Please enter the Username!");
        err.style.display="block";
        return false;
    }
    if(username.length<8){
        err.innerHTML=("Username should at least 8 characters long");
        err.style.display="block";
        return false; 
    }

    if(password==""){
        err.innerHTML=("Please enter the Password!");
        err.style.display="block";
        return false;
    }
    if(password.length<8){
        err.innerHTML=("Password should at least 8 characters long");
        err.style.display="block";
        return false; 
    }

    if(cpassword==""){
        err.innerHTML=("Confirm password field cannot be empty!");
        err.style.display="block";
        return false;
    }

    if(password!==cpassword){
        err.innerHTML=("Password donot match");
        err.style.display="block";
        return false;
    }
   

return true;
}
