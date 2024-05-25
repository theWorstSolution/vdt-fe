import { useState } from "react";
import { apiHost } from "../config";


export default function CreateStudent() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (<form onSubmit={(e) => {
        e.preventDefault()
        console.log(inputs);
        fetch(apiHost + '/students', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', // Set the headers
            }, 
            body: JSON.stringify(inputs)
        }).then((res) => {
            console.log(res);
            alert('created')
        })
    }}>
        <label>Name</label>
        <input type="text" name='name' onChange={handleChange} />
        <label>Gender</label>
        <input type="text" name='gender' onChange={handleChange} />
        <label>School</label>
        <input type="text" name='school' onChange={handleChange} />
        <input type="submit" />
    </form>)
}