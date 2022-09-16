import React, { Component } from 'react';
import Card from './Card';
import styles from "./Cards.module.css";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import iphone10 from "../images/iphone10.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {
    constructor() {
        super()
        this.state = {
            phoneData: [
                { id:1, image:iphone11 , count: "1000 $", name: "iphone11" },
                { id:2, image:iphone12 , count:"2700 $", name:"iphone12"},
                { id:3, image:iphone10 , count:"3300 $", name:"iphone10"},
                { id:4, image:s21 , count:"2500 $", name:"s21"},
                
            ]
        }
    }
    render() {
        
        return (
            <div className={styles.container}>
                {/* <Card img={iphone11} count="1000 $" name="iphone11" />
                <Card img={iphone12} count="2700 $" name="iphone11" />
                <Card img={iphone10} count="3300 $" name="iphone11" />
                <Card img={s21} count="2500 $" name="iphone11" /> */}
                {this.state.phoneData.map( phone => <Card key={phone.name} img={phone.image} count={phone.count} name={phone.name} id={phone.id}/>)}
            </div>
        );
    }
}

export default Cards;