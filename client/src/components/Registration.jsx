import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/Registration.module.css";
import Appnavbar from "./Appnavbar";
import {
  TextField,
  Button,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import axios from "axios";


function Registration() {
  const initialValues = {
    name: "",
    email: "",
    role: "Employee",
    password: "",
    confirmPassword: "",
  };
  
  const [values, setValues] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!values["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    if (!values["confirmPassword"]) {
      isValid = false;
      errors["confirmPassword"] = "Please enter your confirm password.";
    }
    if (values["password"] && values["password"].length < 6) {
      isValid = false;
      errors["password"] = "Please add at least 6 characters.";
    }
    if (
      values["password"] !== values["confirmPassword"]
    ) {
      isValid = false;
      errors["confirmPassword"] = "Passwords don't match.";
    }

    setPasswordError(errors); 

    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validate()) { 
        console.log("values", values);
  
        // Reset form values
        setValues(initialValues);
  
        // Display a success message to the user
        alert("Form is submitted");
  
        // Make the Axios POST request
        await axios.post(`/register`, values)
          .then((res) => {
            console.log("res", res);
          });
      }
    } catch (err) {
      console.log("Error while registration", err);
    }
  };
  
  return (
    <>
    <Appnavbar/>
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
            name="name"
            type="text"
            label="Name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            style={{ width: "100%", marginBottom: "1rem" }}
            required
          />
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
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="roles-label">Role</InputLabel>
            <Select
              labelId="roles-label"
              id="demo-simple-select"
              name="role"
              value={values.role}
              label="Role"
              onChange={handleChange}
              style={{ width: "100%", marginBottom: "1rem" }}
              required
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
            </Select>
          </FormControl>

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
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            style={{ width: "100%", marginBottom: "1rem" }}
            InputProps={{
              endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPassword((show) => !show)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            
            required
          />

          <Button type="submit" color="secondary" variant="contained" style={{ width: "100%" }}>
            Sign Up
          </Button>
        </form>

        <div>
          <span>Already have an account?</span><br/>
          <Link to="/login">Login</Link>
        </div>
      </Card>
    </div>
    </>
  );
}

export default Registration;
