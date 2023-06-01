
function userValidate(data){
    let tempErrors = {};
    if(data.name){
        if(data.name.length < 5 || data.name.length > 25) {
            tempErrors.name = "El nombre debe tener entre 5 y 25 caracteres";
        }
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
        tempErrors.email = "El email no tiene la estructura correcta"
    }
    if (data.password.length < 5) {
        tempErrors.password = "La contraseña debe tener más de 6 caracteres";
        }
    if(!/[0-9]/.test(data.password)) {
        tempErrors.password = "La contraseña necesita un número"
    };
    return tempErrors;
}
export default userValidate;
