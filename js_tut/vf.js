function validateForm(){
    let username=document.form.name.value;
    let password=document.form.passwrd.value;

    if(username=="" && password.length<6 )
        {alert("username field must not be empty and password should be more than 6 chars");
    return false;}
   
    else if(username!="" && password.length<6)
        {alert(" password should not be empty");
    return false;}

    else if(username=="" && password.length>6){
        alert("username field must not be empty");
        return false;
    }
   

}