import axios from 'axios';
import React, { Component } from 'react';
import Card from './Card';
import styles from "./Product.module.css";

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
        .then(response => this.setState({
            products: response.data,
        }))
    }

    render() {
        const { products } = this.state;
        return (
            <div className={styles.container}>
                {
                products.length ? this.state.products.map(product => <Card key={product.id} img={product.image} count={`${product.price} $`} name={product.title} />) :
                <h1>Loading...</h1>
                }
                
            </div>
        );
    }
}

export default Product;