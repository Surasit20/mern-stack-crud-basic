import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';
import { useState , useEffect} from 'react';
export default function StudentList() {
  
  const [dataStudents,setDatasetStudents] = useState({
    students:[]
  })

  useEffect(() => {
    axios.get('http://localhost:4000/students').then((res)=>{
      setDatasetStudents({
        students: res.data
      })
    }).catch((error)=>{
      console.log(error)
    })
  }, []);

  return (
    <div className='table-wrapper mt-4'>
      <h1 className='mb-4'>Student List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
             dataStudents.students.map((res,i)=>{
             return <StudentTableRow obj={res} key={i}/>
           })
          }
        </tbody>
      </Table>
    </div>
  )
}
