function myValidation(){  
    if(validation())
    {
        
    }
    return false;     
}

function validation(){
    var name = document.reg.name.value;
    var password = document.reg.psw.value;
    var email = document.reg.email.value; 
    if (name==null || name==""){
        alert("Вы забыли что то ввести");  
        var error = document.getElementById("font-formname3");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("font-formname3");
        sucess.classList.remove("error"); 
    }

    if (email==null || email==""){
        alert("Вы забыли что то ввести");  
        var error = document.getElementById("font-formname2");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("font-formname2");
        sucess.classList.remove("error"); 
    }

    if(password.length<6){  
        alert("Пароль должен включать в себя 6 символов");
        var error = document.getElementById("font-formpassword2");
        error.classList.add("error");  
      return false;  
      }
      else {
        var sucess = document.getElementById("font-formpassword2");
        sucess.classList.remove("error");
    }
    window.location.href = 'index3.html';
}
    