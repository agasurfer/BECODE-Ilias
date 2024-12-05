import React, 
{useState} from 'react';
import './App.css'

const App = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  
  })

    const [errors, setErrors] = useState({});

    const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    
    if (!isSubmitted) return;
    
    setErrors((prev) => {
      return { ...prev, [name]: "" };
    });

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

  

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value

    setFormData((prev) => {
      return {...prev,[name]: value};
    })
    

    validateField(name, value);
    
}

  
    const handleSubmit = (e) => {
    e.preventDefault();
   

    setIsSubmitted(true);

      const newErrors = {};

  
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

  
  setErrors(newErrors);

  
  if (Object.keys(newErrors).length === 0) {
    console.log("form submitted");
    console.log(formData);
  }
}

  const getInputStyle = (fieldName) => {
    if (!isSubmitted) return {};
    return {
      border: errors[fieldName] 
        ? '2px solid red' 
        : formData[fieldName] 
        ? '2px solid green' 
        : '1px solid gray'
    };
  };




  return (
    <div className="container">
    <form onSubmit={(e) => handleSubmit(e)}>
      
      <label htmlFor="firstName">First Name</label>
      <input 
      type="text"
      id='firstName'
      placeholder='Write first name here'
      name='firstName'
      onChange={(e) => handleChange(e)} 
      style={getInputStyle('firstName')}
      />
      {errors.firstName && <p className='notValid'>{errors.firstName}</p>}
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
