import React from "react";
import '../../assets/styles/Entradas.css';
import "../../assets/styles/header.css";
import Header from "../../components/Header.jsx";
import Navbar from "../../components/Navbar.jsx";
import { PRODUCTS } from '../../products.js'
import { Product } from "../Menu/Product.jsx";


const Entradas = () => {
    

    return (
        
        <>  
            <div className="headerc"><Header/></div>
            <div className="nav-menu"><Navbar /></div>

            <div className="products">
                {" "}
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}

            </div>

            
            

        </>
    );
    } 
export default Entradas; 