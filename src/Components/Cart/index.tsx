import React, {useState} from "react";
import { Button, SubMenu } from "../style.js";


interface Props {}



const Cart: React.FC<Props> = ({}) => {
 const [isOpen, setIsOpen] = useState(true);
 
 const checkIsOpen = (): void => {
    setIsOpen((isOpen) => !isOpen);
 }
      return (
          <>
          <Button onClick={()=> checkIsOpen()}>2 Pizzas</Button>
            {isOpen && <SubMenu>
                <li>Napoletana</li>
                <li>Marinada</li>
            </SubMenu>}
          </>
      )

}

export default Cart;