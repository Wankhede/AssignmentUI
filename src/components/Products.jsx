import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Container = styled.div`
    padding: 5px;
    display: flex;
    background-color: #FFE4E1;
    flex-wrap: wrap;
    object-fit: cover;
    justify-content: space-between;
`;

const Products = () => {

      const [product, setProduct] = useState([]);
      // const [state, dispatch] = useReducer(reducer, initialState, init);

      useEffect(() => {

        product.length= 0;
        console.log(product.length)
        const key=window.location.pathname;
        let search=key.split('/');
        let url="https://shopperstopee.herokuapp.com/api/book/";
        if(key.includes("list"))
        {
          console.log(key)
          url=url+search[search.length-1]
        }

       console.log(url)
        axios
          .get(url)
          .then((response) => setProduct(response.data));
      } );

      // const removeItem = (product) => {
      //   return dispatch({
      //     type: "REMOVE_ITEM"
      //     payload: product
      //   })
      // }
      
  return (
    <Container>
      {product.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
   
  );
};

export default Products;
