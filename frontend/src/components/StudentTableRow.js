import React from 'react'
import { Link } from 'react-router-dom'
import  Button  from 'react-bootstrap/Button'
import axios from 'axios'
import {useEffect} from 'react';
export default function StudentTableRow(props) {

  const deleteStudent = () =>{
    axios.delete("http://localhost:4000/students/delete-student/" + props.obj._id)
    .then((res)=>{
      console.log("Student Deleted complate")
    })
    .catch((error)=>{
      console.log(error)
    })

    window.location.reload();
  }

  
  return (
   
    <tr>
        <td>{props.obj.name}</td>
        <td>{props.obj.subject}</td>
        <td>{props.obj.score}</td>
        <td>
           
                <Link className='edit-link btn btn-primary mx-2' to={"/edit-student/" + props.obj._id}>
                    Edit
                </Link>
          

            <Button variant='danger' onClick={deleteStudent}>
                Delete
            </Button>
        </td>
    </tr>
  )
}
