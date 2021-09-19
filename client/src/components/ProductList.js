import React from "react";

function ProductList(props) {
    return (
        <div>
            {props.products.map((item, i) => { return(
                <div><a href={`http://localhost:3000/details/${item._id}`}>{item.title}</a></div>) })}
        </div>
    )
}

export default ProductList