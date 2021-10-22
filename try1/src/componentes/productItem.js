import React from 'react'
import Card from 'react-bootstrap/card';

const productoItem = ({item}) =>{
    return(

        <div className = "col-4 text-light ">
            <Card border = "primary " bg = {item.color}> 
                <Card.Body>
                    <h2>{item.nombre}</h2>
                    <h2>$ {item.precio}</h2>
                    <div className = "row">
                        <div className = "col-3">
                            <button type="button" class="btn btn-light">Agregar</button>
                        </div>
                        <div className = "col-3">
                            <button type="button" class="btn btn-light">detalles</button>
                        </div>
                        
                        
                    </div>
                    
                </Card.Body>
            </Card>
        </div>

        
    );
}

export default productoItem;