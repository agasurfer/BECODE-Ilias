import React, 
{useState} from 'react';
import './App.css'

const App = () => {

/*déclaration formData qui va servir à contenir les information
  et setFormData (la clé qui va servir à modifier formData)
  dans useState on set les valeurs initiales de chaque key */

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  
  })

 /*déclaration errors qui va stocker les messages d'erreurs et setErrors
  la fonction qui va modifier errors. Démarre avec un object vide.
 */
    const [errors, setErrors] = useState({});

  /*déclaration isSubmitted qui va garder en mémoire l'état du formulaire
  en boolean. setIsSubmitted va permettre de modifier l'état de 
  isSubmited. dans le useState, on set l'état à false au démarrage de la page*/

    const [isSubmitted, setIsSubmitted] = useState(false);

  /*déclaration de la fonction qui va déterminer si un input contient une erreur.
  prend pour arguments name et value qui sont des attributs de l'élément input*/ 

  const validateField = (name, value) => {
    
    /*si isSubmitted est falsy, ne pas lancer la fonction
    ainsi l'affichage des erreurs n'aura lieu qu'un fois le 
    formulaire envoyé une première fois */

    if (!isSubmitted) return;
    
    /*On apelle setErrors pour créer un message d'erreur (et le 
    stocker dans errors
    prev représente les données déjà présentes dans errors à ce 
    moment là
    [name] est entre crochet pour que Js l'interprète comme une variable
    et non pas comme une key littérale*/ 

    setErrors((prev) => {
      return { ...prev, [name]: "" }; //vide la valeur pour éviter dysfonctionnements
    });

    /* Si un champ ayant un name (attribut) de firstName
    et une valeur (input de l'utilisateur) inferieure à 1
    setErrors envoie dans l'objet errors une paire key /value
    comportant le nom du champ concerné et le message d'erreur correspondant */ 

    if (name === "firstName" && value.length < 1) {
      setErrors((prev) => {
        return { ...prev, [name]: "First name must be at least 1 characters" };
      });
    }

    if (name === "lastName" && value.length < 2) {
      setErrors((prev) => {
        return { ...prev, [name]: "Last name must be at least 2 characters" };
      });
    }

    if (name === "age" && value < 18) {
      setErrors((prev) => {
        return { ...prev, [name]: "You must be at least 18" };
      });
    }

    if (name === "age" && value > 120) {
      setErrors((prev) => {
        return { ...prev, [name]: "I don't believe you" };
      });
    }

    if (name === "phoneNumber" && (!/^\+?[\d\s-]{10,}$/.test(value))) {
      setErrors((prev) => {
        return { ...prev, [name]: "Must be a valid phone number" };
      });
    }

    if (name === "email" && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
      setErrors((prev) => {
        return { ...prev, [name]: "Must be a valid email" };
      });
    }

    if (name === "password" && value.length < 8  ){ 
      setErrors((prev) => {
        return { ...prev, [name]: "Password must be at least 8 characters" };
      });
    }

   if (name === "confirmPassword" && value !== formData.password  ){ 
      setErrors((prev) => {
        return { ...prev, [name]: "Doesn't match password" };
      });
    }
  };

/*Fonction définissant ce qui se passe pour tout changement
dans les inputs (parce que lié à l'attribut onChange dans la partie 
html*/  

const handleChange = (e) => {

  /*Simplification de target.name et target.value par lisibilité
  ces variables désignent l'élément html visé par l'event */ 

  const name = e.target.name;
  const value = e.target.value

  /*Appel de SetFormData qui va remplir l'objet formData
  de key (nom de l'input concerné) et de value (input de l'utilisateur) 
  */

    setFormData((prev) => {
      return {...prev,[name]: value};
    })
    
  /*appel de la fonction qui lance la verification des données */  
    validateField(name, value);
    
}

  /*déclaration de la fonction qui dicte ce qui se passe au
  submit de la page  */

    const handleSubmit = (e) => {
    e.preventDefault();
   

    setIsSubmitted(true); //change l'état de isSubmitted à true

    /*Création d'un nouvel objet fonctionnant comme errors
    pas besoin de useState parceque l'on ne l'utilise qu'une fois
    au submit, le useState prend le relai par la suite */

      const newErrors = {}; 

    /*Même logique que plus haut mais en comparant directement avec les 
    données stockées dans formData */

  if (formData.firstName.length < 1) {
    newErrors.firstName = "First name must be at least 1 characters";
  }

  if (formData.lastName.length < 2) {
    newErrors.lastName = "Last name must be at least 2 characters";
  }

  if (formData.age < 18) {
    newErrors.age = "You must be at least 18";
  }

  if (formData.age > 120) {
    newErrors.age = "I don't believe you";
  }

  if (!/^\+?[\d\s-]{10,}$/.test(formData.phoneNumber)) {
    newErrors.phoneNumber = "Must be a valid phone number";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Must be a valid email";
  }

  if (formData.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
  }

  if (formData.confirmPassword !== formData.password) {
    newErrors.confirmPassword = "Doesn't match password";
  }

  /*transfère les données de newErrors dans errors
  ainsi les erreurs peuvent s'afficher suivant les règles dictées 
  plus bas */
  setErrors(newErrors);

  
  /*Object.keys() est une methode Js rendant les
  keys d'un objet sous forme d'array. Si son length avec
  newErros pour argument = 0 cela signifie qu'il n'ya pas eu d'erreur */

  if (Object.keys(newErrors).length === 0) {
    console.log("form submitted");
    console.log(formData);
  }
}

/*Déclaration de la fonction gérant le border des inputs
portant ne name de l'imput comme paramètre  */

  const getInputStyle = (name) => {

    /*applique les changement de styles seulement si
    send à été appuyé */

    if (!isSubmitted) return {};
    return {
      border: errors[name]  //if errors[champ concerné] est truthy
        ? '2px solid red'   // ce qu'il faut appliquer
        : formData[name]      //else if formData[champ concerné] est truthy
        ? '2px solid green'   //ce qu'il faut appliquer
        : '1px solid gray'    // else ce qu'il faut faire
    };
  };




  return (
    <div className="container">
    <form onSubmit={(e) => handleSubmit(e)}> 
      {/* apelle la fonction au submit du form */}
      <label htmlFor="firstName">First Name</label>
      <input 
      type="text"
      id='firstName'
      placeholder='Write first name here'
      name='firstName'
      onChange={(e) => handleChange(e)} /* apelle la fonction pour tout changement dans l'input */
      style={getInputStyle('firstName')} /* apelle la fonction pour styliser la bordure avec le name comme paramètre */
      />
      {errors.firstName && <p className='notValid'>{errors.firstName}</p>}
      {/* fonctionne comme un if, && fonctionne ici comme le ? d'un ternaire
      pour introduire la logique qui va suivre. If (...) est truthy,
      appliquer le message d'erreur  */}
      <label htmlFor="lastName">Last Name</label>
      <input 
      type="text"
      id='lastName'
      placeholder='Write last name here'
      name='lastName'
      onChange={(e) => handleChange(e)}
      style={getInputStyle('lastName')} 
      />
      {errors.lastName && <p className='notValid'>{errors.lastName}</p>}
      <label htmlFor="age">Age</label>
      <input 
      type="text"
      id='age'
      placeholder='Write age here'
      name='age'
      onChange={(e) => handleChange(e)} 
      style={getInputStyle('age')}
      />
      {errors.age && <p className='notValid'>{errors.age}</p>}
      <label htmlFor="phoneNumber">Phone Number</label>
      <input 
      type="text"
      id='phoneNumber'
      placeholder='Write phone number here'
      name='phoneNumber'
      onChange={(e) => handleChange(e)} 
      style={getInputStyle('phoneNumber')}
      />
      {errors.phoneNumber && <p className='notValid'>{errors.phoneNumber}</p>}
      <label htmlFor="email">Email</label>
      <input 
      type="email"
      id='email'
      placeholder='Write email here'
      name='email'
      autoComplete="email" 
      onChange={(e) => handleChange(e)}
      style={getInputStyle('email')} 
      />
      {errors.email && <p className='notValid'>{errors.email}</p>}
      <label htmlFor="password">Password</label>
      <input 
      id='password'
      type="password"
      placeholder='Write password here'
      name='password'
      onChange={(e) => handleChange(e)}  
      style={getInputStyle('password')}
      />
      {errors.password && <p className='notValid'>{errors.password}</p>}
      <label htmlFor="confirmPassword">Password Confirmation</label>
      <input 
      id='confirmPassword'
      type="password"
      placeholder='Confirm password'
      name='confirmPassword'
      onChange={(e) => handleChange(e)} 
      style={getInputStyle('confirmPassword')}
      />
      {errors.confirmPassword && <p className='notValid'>{errors.confirmPassword}</p>}

    <button type='submit'>Send</button>
    </form>
    {/* logique pour afficher la ul contenant les données  */}
        {isSubmitted && Object.keys(errors).length === 0 && (
      <ul className="dataList">
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Age: {formData.age}</li>
        <li>Phone Number: {formData.phoneNumber}</li>
        <li>Email: {formData.email}</li>
        <li>Password: {'*'.repeat(formData.password.length)}</li>
      </ul>
    )}
    </div>
  )
}

export default App
