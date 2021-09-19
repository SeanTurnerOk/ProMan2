import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Edit(props) {
    const [object, setObject] = useState({})
    const _id = useParams()
    console.log(_id)
    useEffect(() => {
        axios.post(`http://localhost:8000/api/findById`,  _id)
            .then(res => setObject(res.data))
            .catch(err => console.log("There was an error", err))
    }, [])
    function submitHandler(e){
        e.preventDefault()
        axios.post('http://localhost:8000/api/updateProduct', object)
        .catch(err=>console.log("There was an error",err))
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" placeholder={object.title} onChange={e=>setObject({...object, title : e.target.value})}/>
            <input type="text" placeholder={object.price} onChange={e=>setObject({...object, price: e.target.value})}/>
            <input type="text" placeholder={object.description} onChange={e=>setObject({...object, description : e.target.value})}/>
            <input type="submit"/>
            </form>
        </div>
    )
}

export default Edit