import './App.css';
import Form from './components/Form';
import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from "axios";
import { initialFormValues, initialFormErrors, initialGamers, initialDisabled } from "./components/Initials"
import User from './components/User';
import formSchema from './components/FormSchema';

function App() {
  /* States */
  const [users, setUsers] = useState(initialGamers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  /* Event Handlers */
  // Post newUser
  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
  }
  // Validation
  const validate = (name, value)  => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...setFormErrors, [name]: "" }))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  // Input Change
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }
  // Form Submission
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      genre: formValues.genre.trim(),
      choice: formValues.choice.trim(),
      tos: !!formValues.tos
    }
    postNewUser(newUser);
  } 
  /* Side Effects*/
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To The Gamer Zone!!!</h1>
      </header>
      
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      
      {users.map(user => {
        return(
          <User key={user.username} profile={user} />
        )
      })}    
    </div>
  );
}

export default App;
