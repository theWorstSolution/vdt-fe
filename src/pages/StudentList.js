import { useEffect, useState } from "react"
import { apiHost } from "../config"
import { Link, useOutletContext } from "react-router-dom";
import axiosInstance from '../axiosInstance'

export default function StudentList() {
    const [students, setStudents] = useState()
    useEffect(() => {
        axiosInstance({
            method: 'GET',
            url: apiHost + '/students'
        }).then(({ data }) => { setStudents(data) })
    }, [])
    return (<div>
        <Link to='/create-student'>Add student</Link>
        <table>
            <thead><tr>
                <th>Name</th><th>Gender</th><th>School</th><th>Action</th>
            </tr></thead>
            <tbody>{students?.map((student, idx) => <tr>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.school}</td>
                <td>
                    <Link to={'/students/' + student._id}><button>Edit</button></Link>
                    <button onClick={() => {
                        axiosInstance({
                            method: 'DELETE',
                            url: apiHost + '/students/' + student._id
                        }).then((res) => {
                            alert('deleted')
                            const newStudents = [...students]
                            newStudents.splice(idx, 1)
                            setStudents(newStudents)
                        })
                    }}>Delete</button>
                </td>
            </tr>)}</tbody>
        </table>
    </div>)
}