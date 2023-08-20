import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { useState } from "react";
import axios from "axios";
import "./Signup.css";

const SignUp = () => {
    const submitHandeler = (e) => {
        e.preventDefault();
        const data = axios.post();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPhoneNumber("");
        axios
            .post("http://localhost:3001/api/v1/users", user)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const user = {
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        contactNumber: phoneNumber,
    };

    return (
        <div>
            <NavBar />
            <div className="app-container">
                <form className="form-container">
                    <h2>Sign Up</h2>
                    <label htmlFor="firstname">firstName</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <label htmlFor="lastname">lastName</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                    />
                    <button type="submit" onClick={submitHandeler}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
