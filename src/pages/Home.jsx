import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link, Navigate } from 'react-router-dom';

const Home = ({ loggedIn, setLoggedIn }) => {
    console.log(loggedIn);
    return (
        <div>
            <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <h1>Home</h1>
            <Link to="/Products">
                <Button
                    variant="contained"
                    color="primary"
                    
                >
                    Products
                </Button>
            </Link>
        </div>
    );
};

export default Home
