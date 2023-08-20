import axios from "axios";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Navigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const LogIn = ({ loggedIn, setLoggedIn }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const submitHandeler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/api/v1/auth", user)
            .then((res) => {
                console.log(res.data);
                setLoggedIn(res.data.isAuthenticated);
                if (res.data.isAuthenticated) {
                    return <Navigate replace to="/" />;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const user = {
        email: email,
        password: password,
    };
    console.log(loggedIn);
    return (
        <>
            {loggedIn &&  <Navigate replace to="/" /> }
            
            <div>
                <NavBar />
                <div className="app-container">
                    <form className="form-container">
                        <h2>Log In</h2>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />

                        <Button type="submit" onClick={submitHandeler}>
                            Log In
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;
