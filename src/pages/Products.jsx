import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import BCard from '../components/BCard';
import axios from 'axios';


const Products = ({loggedIn,setLoggedIn}) => {
    const[productData,setProductData] = React.useState([{}]);
    const navigate = useNavigate();
    useEffect(() => {
        if (!loggedIn) {
            navigate("/rediret-login");
        }
        else{
            axios.get("http://localhost:3001/api/v1/products").then((res) => {
                setProductData(res.data);
            }
            ).catch((err) => {
                console.log(err);
            });
        }
    }, []);
    console.log(productData)
  return (
      <div>
          Products Page
          <div className='cards-container'>
            {productData.map((product) => {
                return (
                    <BCard
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image={product.imageURL}
                    />
                );
            })}
          </div>
      </div>
  );
}

export default Products
