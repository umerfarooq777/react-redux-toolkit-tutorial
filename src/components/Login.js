import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Umer", age: 23, email: "uf80902@gmail.com" }));
        }}
      >
        user1
      </button><br/>

      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      
      <input
      type="text"
      onChange={(event) => {
        setAge(event.target.value);
      }}
    />
    
    <input
    type="text"
    onChange={(event) => {
      setEmail(event.target.value);
    }}
    />

      <button
        onClick={() => {
          dispatch(login({ name: name, age: age, email: email }));
        }}
      >
        Update User
      </button><br/>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Login;
