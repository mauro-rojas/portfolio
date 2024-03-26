function validateBlank(value, valueName, setFunction) {
    
    
    if(value === "" || value.trim().length == 0){
        //console.log("esta blanco");
        setFunction(`El ${valueName} no puede estar vacio`); 
    }
    else{
        setFunction( null )
    }
    
    
}

export default validateBlank;