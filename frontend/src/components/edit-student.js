import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import { useParams , useNavigate} from "react-router-dom"

export default function EditStudent() {
  const [name,setName] = useState("");
  const [subject,setSubject] = useState("");
  const [score,setScore] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:4000/students/edit-student/'+ id)
    .then((res)=>{
     setName(res.data.name);
     setSubject(res.data.subject);
     setScore(res.data.score);

    }).catch((error)=>{
      console.log(error);
    })
    
  },[])
  
  

  const OnSubmit = (e) =>{
    e.preventDefault();
    const data = {
      name:name,
      subject:subject,
      score:score
    }
    console.log(data)
    axios.put('http://localhost:4000/students/update-student/'+id , data).then(res=>{
      console.log(res.data);
      console.log("Student updated complate");
    }).catch((error)=>{
      console.log(error);
    })
    navigate("/student-list");
  } 
  const changeName = (e) =>{
    setName(e.target.value)
    console.log(name)
  }

  const changeSubject= (e)=>{
    setSubject(e.target.value)
  }
  const changeScore= (e)=>{
    setScore(e.target.value)
  }
  return (
    <div className='form-wrapper mt-4'>
      <h1> Edit Student</h1>
      <Form onSubmit={OnSubmit}>

        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name="name" onChange={changeName} value={name}></Form.Control>
        </Form.Group>

        <Form.Group controlId='Subject'>
          <Form.Label>Subject</Form.Label>
          <Form.Control type='text'name="subject" onChange={changeSubject} value={subject}></Form.Control>
        </Form.Group>

        <Form.Group controlId='Score'>
          <Form.Label>Score</Form.Label>
          <Form.Control type='number'name="score" onChange={changeScore} value={score}></Form.Control>
        </Form.Group>
        <div className="d-grid">
          <Button variant='success' size="lg"  type='submit' className='mt-3'  >
            Edit
          </Button>
        </div>
      </Form>
    </div>
  )
}
