import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from "axios";
import { initialFormValues, initialFormErrors, initialGamers, initialDisabled } from "./components/Initials"

function App() {
  /* States */
  const [users, setUsers] = useState(initialGamers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  /* Helper Functions */

  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To The Gamer Zone!!!</h1>
      </header>
    
    </div>
  );
}

export default App;
