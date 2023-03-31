import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function CreateStudent() {

  const [name,setName] = useState("");
  const [subject,setSubject] = useState("");
  const [score,setScore] = useState("");
  const OnSubmit = (e) =>{
    e.preventDefault();
    const data = {
      name:name,
      subject:subject,
      score:score
    }
    axios.post('http://localhost:4000/students/create-student',data).then(res=>{
      console.log(res.data);
    });
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
      <h1> Create Student</h1>
      <Form onSubmit={OnSubmit}>

        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text'  onChange={changeName} value={name} ></Form.Control>
        </Form.Group>

        <Form.Group controlId='Subject'>
          <Form.Label>Subject</Form.Label>
          <Form.Control type='text'onChange={changeSubject} value={subject}></Form.Control>
        </Form.Group>

        <Form.Group controlId='Score'>
          <Form.Label>Score</Form.Label>
          <Form.Control type='number'onChange={changeScore} value={score}></Form.Control>
        </Form.Group>
        <div className="d-grid">
          <Button variant='success' size="lg"  type='submit' className='mt-3'  >
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}
