import { useCallback, useEffect, useState } from "react";
import { apiHost } from "../config";
import { useParams } from "react-router-dom";


export default function EditStudent() {
    const { studentId } = useParams()
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    useEffect(() => {
        fetch(apiHost + '/students/'+studentId).then((res) => {
            return res.json()
        }).then((data)=>{setInputs(data)})
    },[])

    const onSubmit = useCallback((e) => {
        
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