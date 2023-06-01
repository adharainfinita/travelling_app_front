function validate(data){
    let tempErrors = {};
    if(data.name){
        if(data.name.length < 5 || data.name.length > 25) {
            tempErrors.name = "El nombre debe tener entre 5 y 25 caracteres";
        }
        if(!/^[a-zA-Z0-9\s]+$/.test(data.name)){
            tempErrors.name = "No se permiten caracteres especiales"
        }
        if(!/[a-zA-Z]/.test(data.name) && /[0-9]/.test(data.name)) {
            tempErrors.name = "El nombre no puede ser sólo números";
        }
    }
    if(!data.difficulty){
        tempErrors.difficulty = "No olvides seleccionar una dificultad";
    }
    if(!data.season){
        tempErrors.season = "Elige una estación";
    }
    if(data.countries.length < 1){
        tempErrors.countries = "No existe el país elegido";
    }
    return tempErrors;
}
export default validate;