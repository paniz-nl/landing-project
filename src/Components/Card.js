import React, { Component } from 'react';
import styles from "./Card.module.css";
import up from "../images/up.svg";
import down from "../images/down.svg";
import { Link } from "react-router-dom";

class Card extends Component {
    
    constructor(){
        super();
        this.state={
            counter:0,
        }
    }

    downHandler = () => {
        if (this.state.counter>=1) {
            this.setState(prevState  => ({
                counter:prevState.counter - 1,
            }))
            }
        }
        
    upHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }

    render() {
        const {img,count,name,id}=this.props;
        const {counter}=this.state;
        return (
            <div className={styles.container}>
                
                <img src={img} alt="pic"/>
                <div className={styles.container2}>
                    <h3>
                        <Link to={`/product/${id}`}>{name}</Link>
                        </h3>
                    <p>{count} {counter ? `* ${counter} = ${counter * Number(count.split(" ")[0])}` : ""}</p>
                </div>
                
                <div className={styles.counter}>
                    <img src={down} className={!counter ? styles.deactive : ""} alt="arow" onClick={this.downHandler}/>
                    <span>{counter}</span>
                    <img src={up} alt="arow" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;