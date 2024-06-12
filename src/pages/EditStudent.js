import { useCallback, useEffect, useState } from "react";
import { apiHost } from "../config";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";


export default function EditStudent() {
    const { studentId } = useParams()
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    useEffect(() => {
        axiosInstance({
            method: 'GET',
            url: apiHost + '/students/'+studentId
        }).then(({data})=>{setInputs(data)})
    },[])

    const onSubmit = useCallback((e) => {
        e.preventDefault()
        console.log('hehehehehehe');
        console.log(inputs);
        axiosInstance({
            method: 'PATCH',
            url: apiHost + '/students/'+studentId,
            data: inputs
        }).then((res) => {
            console.log(res);
            alert('edited')
        })
    },[inputs])
    return (<form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" name='name' onChange={handleChange} defaultValue={inputs.name}  />
        <label>Gender</label>
        <input type="text" name='gender' onChange={handleChange} defaultValue={inputs.gender}  />
        <label>School</label>
        <input type="text" name='school' onChange={handleChange} defaultValue={inputs.school}  />
        <input type="submit" />
    </form>)
}