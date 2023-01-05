import Item from '../Item/Item';
//Modificar array de objeto
const ItemList = ({productsList}) => {

    
    return (
        <>
            {productsList.map (producto => <Item key={producto.id} prod = {producto}/>)}
        </>
    );
}

export default ItemList;
