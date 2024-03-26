


function validateEmail( value, setEmailError) {
    
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if(value === "" || value.trim().length == 0){
        setEmailError("El email no puede estar vacio") 
    }
    else{
        if(!value.match(emailRegex)){
            setEmailError("Ingrese un email valido") 
        }
        else{
            setEmailError(null)   
        }
    }

    
        
    
    
    
}

export default validateEmail;