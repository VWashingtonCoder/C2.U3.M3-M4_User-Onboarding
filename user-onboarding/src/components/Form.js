import React from "react";

export default function Form(props) {
    const{
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    const onChange = evt => {
        const { name, value, type, checked} = evt.target;
        const useValue = type === "checkbox" ? checked : value;
        change(name, useValue)
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className = "form-group headers">
                <h2>Join Our Gamer Squad Today!</h2>
                <p>Please fill out our profile builder below!</p>
            </div>
            <div className = "form-group errors">
                <div className="name">{errors.name}</div>
                <div className="username">{errors.username}</div>
                <div className="email">{errors.email}</div>
                <div className="password">{errors.password}</div>
                <div className="genreSelect">{errors.genre}</div>
                <div className="choiceRadio">{errors.choice}</div>
                <div className="tosCheckbox">{errors.tos}</div>
            </div>
            <div className="form-group inputs">
                <h4>General Profile Information</h4>
                {/* text */}
                <label>Name
                    <input 
                        value = {values.name}
                        onChange = {onChange}
                        name = "name"
                        type = "text"
                    />
                </label>
                <label>Username
                    <input 
                        value = {values.username}
                        onChange = {onChange}
                        name = "username"
                        type = "text"
                    />
                </label>
                <label>Email
                    <input 
                        value = {values.email}
                        onChange = {onChange}
                        name = "email"
                        type = "text" 
                    />
                </label>
                <label>Password
                       <input  
                            value = {values.password}
                            onChange = {onChange}
                            name = "password"
                            type = "text"
                       />
                </label>
                {/* DropDown */}
                <label>Fav Genre
                    <select
                        onChange = {onChange}
                        value = {values.genre}
                        name = "genre"
                    >
                        <option value="">---Default---</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="roleplay">Role-Playing</option>
                        <option value="simulation">Simulation</option>
                        <option value="strategy"></option>
                        <option value="multiplayer">Multiplayer</option>
                    </select>
                </label>
                {/* Radio BTNs */}
                <label>Console (PS, Xbox, Nintendo, etc)
                    <input 
                        type = "radio"
                        name = "choice"
                        value = "console"
                        onChange = {onChange}
                        checked = {values.choice === "console"}
                    />
                </label>
                <label>PC
                    <input
                        type = "radio"
                        name = "choice"
                        value = "pc"
                        onChange = {onChange}
                        checked = {values.choice === "pc"}
                    />
                </label>
                <label>Neither/Both (No Interest in The War...)
                    <input
                        type = "radio"
                        name = "choice"
                        value = "noInterest"
                        onChange = {onChange}
                        checked = {values.choice === "noInterest"}
                    />
                </label>
                {/* Checkbox */}
                <label>Terms Of Service
                    <input
                        type = "checkbox"
                        name = "tos"
                        checked = {values.tos}
                        onChange = {onChange}
                    />
                </label>
            </div>
            <div className="form-group submit">
                <button disabled = {disabled}>Submit</button>
            </div>
        </form> 
    )
}