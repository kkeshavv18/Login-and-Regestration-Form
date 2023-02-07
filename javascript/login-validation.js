function validateForm(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let err = document.getElementById('login_error');


    if(username=="" && password==""){
        err.innerHTML=("Please enter Username and Password!");
        err.style.display="block";
        return false;
    }
    if(username==""){
        err.innerHTML=("Please enter the Username!");
        err.style.display="block";
        return false;
    }
    if(password==""){
        err.innerHTML=("Please enter the Password!");
        err.style.display="block";
        return false;
    }
    
    
}