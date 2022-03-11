
import React, { useState} from "react";
import Connexioninscription from  "./Connexioninscription"; 
import Inscriptionreussi from "./Inscriptionreussi";

const Inscription = () => {
  const [formIsSubmitted, setFormIsSubmitted]= useState(false);


 const submitForm = () => {
   setFormIsSubmitted(true);
 };
  return (
    <div>
      {!formIsSubmitted ? ( <Connexioninscription submitForm={submitForm}/>) : <Inscriptionreussi/>}

    </div>
  );
};

export default Inscription;
