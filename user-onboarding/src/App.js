import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from "axios";

//Initial States
const initialFormValues = {
  /* Text */
  name: "",
  username: "",
  email: "",
  password: "",
  /* DropDown */
  genre: "",
  /* Radio */
  choice: "",
  /* Checkbox */
  tos: false,
} 

const initialFormErrors = {
   name: "",
   username: "",
   email: "",
   password: "",
   genre: "",
   choice: "",
}

const initialGamers = []
const initialDisabled = true

function App() {
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To The Gamer Zone!!!</h1>
      </header>
    
    </div>
  );
}

export default App;
