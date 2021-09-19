import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Details(props) {
    const [object, setObject] = useState({})
    const _id = useParams()
    console.log(_id)
    useEffect(() => {
        axios.post("http://localhost:8000/api/findById", _id)
            .then(thing => setObject(thing.data))
            .catch(err => console.log("Could not set object", err))
    }, [])
    return (
        <div>
            <div>
                <p>{object.title}</p>
                <p>{object.price}</p>
                <p>{object.description}</p>
            </div>
            <a href={`http://localhost:3000/edit/${_id.id}`}>Edit </a>
            <a href={`http://localhost:3000/delete/${_id.id}`}> Delete</a>
        </div>
    )
}
export default Details