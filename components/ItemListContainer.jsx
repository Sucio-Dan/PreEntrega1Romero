function ItemListContainer(props){
    return (
        <div className="item" >
            <h3> {props.prenda} </h3>
            <p> {props.precio} </p>
             </div>
    );

}

export default ItemListContainer; 