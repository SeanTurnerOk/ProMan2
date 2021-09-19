import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProManForm from "../components/ProManForm"
import ProductList from "../components/ProductList"
const Main = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/AllProducts')
            .then(res => setProducts(res.data))
            .catch(err => console.log("there was an error", err))
    },[])
    return (
        <div>
            <ProManForm />
            <ProductList products={products} />
        </div>
    )
}

export default Main