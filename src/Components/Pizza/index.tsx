import React from 'react';
interface Pizza {
    id: number,
    name: string,
    description: string,
    price: number
}

interface Props {
    pizza: Pizza
}

const Pizza: React.FC<Props> = ({pizza}) => {
    const { name, description, price } = pizza;
    return (
        <>
            
            <li>
                <h2>{name}</h2>
                <div>{description}</div>
                <div>{price}</div>
            </li>
        </>
    )
}

export default Pizza;
