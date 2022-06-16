import React  from 'react';
import styled from 'styled-components';

const Carrito = ({carrito}) => {
    return ( 
        <div>
        <h2>Carrito de compras</h2>   
        {carrito.length > 0 ? 
            carrito.map((producto, index) => {
                return(
                    <Producto key={index}>
                        <Nombreproducto>
                            {producto.nombre}
                        </Nombreproducto>
                        Cantidad: { producto.cantidad}
                    </Producto>
                );
            } )
        :
            <p> Aún no hay productos</p>
        }
    </div> 

    );
}
 
const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;

`;

const Nombreproducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;

`;
export default Carrito;