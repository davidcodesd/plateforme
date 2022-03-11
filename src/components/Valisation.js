
const validation = (values) => {
    let errors = {};
    if(!values.nom){
        errors.nom="le champs nom est requis"
    }
    if(!values.prenom){
        errors.prenom="le champs prenom est requis"
    }
    if(!values.email){
        errors.email="le champs email est requis"
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email="email est invalide."

    }
    if(!values.password){
        errors.password="le password est requis"
    }
    
    else if (values.password.lenght < 5){
        errors.password="le mot de passe doit contenir aumoins 5 caractere"
    }
    if(!values.password){
        errors.password="le password est requis"
    }
    
    else if (values.password.lenght < 5){
        errors.password="le mot de passe doit contenir aumoins 5 caractere"
    }
    
    return errors;
}

export default validation;