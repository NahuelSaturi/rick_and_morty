export default function validation(input) {
    const errors = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[1-9]");
    //email
    if (!input.email.length) errors.email = 'ingrese su mail';
    else{
        if (!regexEmail.test(input.email)) errors.email = 'debe ingresar un mail valido';
        if (input.email.length > 35) errors.email = 'debe ingresar menos de 35 caracteres';
    }
    //pass
    if (!input.password.length) errors.password = 'ingrese su password';
    if (!regexPassword.test(input.password)) errors.password = 'debe tener al menos un numero';
    if (input.password.length < 6) errors.password = 'debe ingresar al menos 6 caracteres';
    if (input.password.length > 10) errors.password =  'maximo 10 caracteres';
        
    return errors;
}