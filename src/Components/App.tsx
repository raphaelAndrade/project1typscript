import React from "react";
import pizzas from '../data/pizzas.json';
import Pizza from "./Pizza/index";
import { List, MainTitle } from "./style.js";
import PizzaSVG from '../svg/pizza.svg';
import Cart from './Cart';


const App = () => {
    return (
      <>
        <PizzaSVG width={120} height={120} />
        <MainTitle> Delicius Pizza</MainTitle>
        <Cart />
        <List>{pizzas.map(pizza=> {
            return <Pizza key={pizza.id} pizza={pizza} />
        })}</List>
      </>
    )
}

export default App;