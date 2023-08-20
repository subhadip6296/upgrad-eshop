import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";




const NavBar = ({ loggedIn, setLoggedIn }) => {
    
    
    return (
        <div className="nav-container">
            <Link to="/" className="Link">
                <h1>upGrad Eshop</h1>
            </Link>
            {loggedIn ? (
                <div className="logged-in-container">
                    
                    <Link to="/cart">
                        <Button leftIcon={<ShoppingCartIcon />}>Cart</Button>
                    </Link>
                    <button onClick = {() => {setLoggedIn(false)}}>Log Out</button>
                    
                </div>
            ) : (
                <div>
                    <Link to="/log-in">
                        <button>Log In</button>
                    </Link>
                    <Link to="/sign-up">
                        <button>Sign Up</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NavBar;
