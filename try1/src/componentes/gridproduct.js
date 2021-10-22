import React from 'react'
import ProductItem from './productItem';
import Card from 'react-bootstrap/card';
const gridProduct =()=>{
    const items = 
    [{nombre:'Mouse', precio: 25000, color: 'primary'},
     {nombre:'Teclado', precio: 45000, color: 'secondary'},
     {nombre:'Audifonos', precio: 70000, color: 'success'},
     {nombre:'Chasis', precio:130000, color: 'danger'},
     {nombre:'Ventilador', precio:27000, color: 'warning'},
     {nombre:'Disipador', precio:70000, color: 'info'},
     {nombre:'Escritorio', precio:250000, color: 'dark'},
     {nombre:'Parlantes', precio:75000, color: 'secondary'},
     {nombre:'Pantalla', precio:150000, color: 'danger'}
    ];

    return(
        <div className ="container-fluid">
            <card>
                <Card.Body>    
                    <div className = "row py-2" >
                        <ProductItem item = {items [0]}/>
                        <ProductItem item = {items [1]}/>
                        <ProductItem item = {items [2]}/>  
                    </div>

                    <div className = "row py-2" >
                        <ProductItem item = {items [3]}/>
                        <ProductItem item = {items [4]}/>
                        <ProductItem item = {items [5]}/>
                    </div>

                    <div className = "row py-2" >
                        <ProductItem item = {items [6]}/>
                        <ProductItem item = {items [7]}/>
                        <ProductItem item = {items [8]}/>
                    </div>

                </Card.Body>   
            </card>
        </div>
         
    );
}

export default gridProduct;