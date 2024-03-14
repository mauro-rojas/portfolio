

function validateForm(nombreValue, emailValue, mensajeValue) {
    
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //console.log(`nombre ${nombreValue}    email ${emailValue}      mensaje ${mensajeValue}`);
    const errors = {};
    
    if(nombreValue === "" || nombreValue.trim().length == 0){
        errors.blankName = "El nombre no puede estar vacio"
        console.log("nombre vacio");
    }
    if(emailValue === "" || emailValue.trim().length == 0){
        errors.blankEmail = "El email no puede estar vacio"
    }else{
        if(!emailValue.match(emailRegex)){
            errors.invalidEmail = "Ingrese un email valido"
        }
    }

    if(mensajeValue === "" || mensajeValue.trim().length == 0){
        errors.blankMessage = "El mensaje no puede estar vacio"
    }
    if(Object.keys(errors).length === 0){
        return null
    }
    return errors
}

export default validateForm;