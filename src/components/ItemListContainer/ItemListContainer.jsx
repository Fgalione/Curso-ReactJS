import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import ItemList from '../ItemList/ItemList.jsx';
import {consultarBDD} from '../../assets/funciones.js';
// import { cargarBDD } from '../../assets/firebase.js';


//Consulta base de datos
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        if (category) {
            consultarBDD('../json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
            } else{
            consultarBDD('./json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
    },[category]);


//[] cuando suceden cambios en todo el array
//[propiedad] cuando se modifica un objeto interno del array
    
    return (
        
            
            <div className="row cardProductos">
                {productos}
            </div>
        
    );
}

export default ItemListContainer;
