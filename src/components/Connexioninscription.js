
import React, { useState, useEffect }  from "react";
//import inscription from "./Inscription";
//import   { useState } from "react";
import validation from "./Valisation";

const Connexioninscription = ({submitForm}) => {
  const [values, setValues] = useState({
    name : " " ,
    prenom : "",
    email: " ",
    password: " ",

  });
  const [error , setErrors] = useState({});
  const [dataIsCorrect , setDataIsCorrect] =useState(false);

  const handleChange = (event) => {
setValues({
  values,
[event.target.name]: event.target.values,

});
  
};
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);


};
useEffect(() =>{
  if(Object.keys(Error).length === 0 && dataIsCorrect){
    submitForm(true);
  }

} ,[Error]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
      <h2 className="title"> creer un compte d'inscription </h2>
      </div>
     <from className= "form-wrapper">
       <div className="name">
         <label className="label">entrer votre le nom</label>
         <input className="input" type="text" name="nom" value={values.nom} onChange={handleChange}  />
         {error.nom && <p className="errors">{error.nom}</p>}
       </div>
       <div className="prenom">
         <label className="label">entrer votre le prenom</label>
         <input className="input" type="text" name="prenom"  value={values.prenom} onChange={handleChange} />
         {error.prenom && <p className="errors">{error.prenom}</p>}
       </div>

       <div className="email">
         <label className="label">entrer votre adresse email</label>
         <input className="input" type="email"   name="email"  value={values.email}  onChange={handleChange} />
         {error.email && <p className="errors">{error.email}</p>}
       </div>
       <div className="password">
         <label className="label">entrer votre mot de passe </label>
         <input className="input" type="password"  name = "password"  value={values.password} onChange={handleChange} />
         {error.password && <p className="errors">{error.password}</p>}
       </div>
      
       <div>
        
         <button className="submit"  onClick= {handleFormSubmit}>valider</button>
       </div>

       </from>
    </div>
    </div>
  );

  }

export default Connexioninscription;
