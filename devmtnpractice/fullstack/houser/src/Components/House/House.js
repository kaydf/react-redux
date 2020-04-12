import React from "react";


function House(props) {
    let {id, name, address, city, zip, img} = props.val;
        return (
            <div className="body">
                
                <div className="listing">
                <p>Property name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city} </p>
                <p>Zip: {zip} </p>
                <img src={img} alt="house"/>
                </div>
                <div>
                    <button onClick={() => props.method(id)}>Delete Property</button>
                </div>
            </div>
        )
    }


export default House;