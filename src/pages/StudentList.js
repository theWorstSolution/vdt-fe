import { useEffect, useState } from "react"
import { apiHost } from "../config"
import { Link, useOutletContext } from "react-router-dom";


export default function StudentList() {
    const [students, setStudents] = useState()
    useEffect(() => {
        fetch(apiHost + '/students').then((res) => {
            return res.json()
        }).then((data)=>{setStudents(data)})
    },[])
    return (<div>
        <Link to='/create-student'>Add student</Link>
        <table>
            <thead><tr>
                <th>Name</th><th>Gender</th><th>School</th><th>Action</th>
            </tr></thead>
            <tbody>{students?.map((student, idx)=><tr>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.school}</td>
                <td>
                    <Link to={'/students/'+student._id}><button>Edit</button></Link>
                    
                </td>    
            </tr>)}</tbody>
        </table>
    </div>)
}