import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../assets/css/Login.module.css'; 
import Navbar from "./Appnavbar";
import {
  TextField,
  Button,
  Card,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import axios from "axios";


function Login() {
  const initialValues = {
    email: "",
    password: ""
  };

  const [values, setValues] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log("values", values);
      await axios.post(`/login`, values)
      .then((res) => {
        console.log("res", res);
      })
      setValues({initialValues})
    }
    catch(err) {
      console.log("Error while reegistration", err)
    }
    console.log("sd", values);  
  };

  return (
    <>
    <Navbar/>
    <br/>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
      <Card className={styles.container}>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            type="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ width: "100%", marginBottom: "1rem" }}
            required
          />
          
          <TextField
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            placeholder="Create a password"
            style={{ width: "100%", marginBottom: "1rem" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}            
            required
          />
          
          <Button type="submit" color="secondary" variant="contained" style={{ width: "100%" }}>
            Login In
          </Button>
        </form>

        <div>
          <span>If u donn't have an account?</span><br/>
          <Link to="/registration">Register</Link>
        </div>
      </Card>
    </div>
    </>
  );
}

export default Login;
