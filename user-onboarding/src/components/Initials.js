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
  
  const initialGamers = [];
  const initialDisabled = true;

export { initialFormValues, initialFormErrors, initialGamers, initialDisabled }