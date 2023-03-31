const express = require('express');
const router = express.Router();

//student model
const studentSchema = require('../model/Student');

//create student
router.route('/create-student').post(async(req,res) =>{
    try{
        const data =  new studentSchema(req.body);
        const saveData = await data.save();
        res.status(201).json(saveData);
    }catch{
        res.status(404).json(error);
    }
})

//read student
router.route('/').get(async(req,res)=>{
    try{
        const data =  await studentSchema.find();
        res.status(200).json(data)
    }catch(error){
        res.status(404).json(error);
    }
})

// read one student by id
router.route('/edit-student/:id').get(async (req,res)=>{
    try{
        const student = await studentSchema.findById(req.params.id);
        res.status(200).json(student);
    }
    catch(error){
        res.status(404).json(error);
    }
})

//update student
router.route('/update-student/:id').put(async(req,res)=>{
    try{
        const studentUpdate = await studentSchema.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(201).json(studentUpdate );
    }
    catch(error){
        res.status(404).json(error);
    }
})

//delete student
router.route('/delete-student/:id').delete(async(req,res)=>{
    try{
        const studentDelete = await studentSchema.findByIdAndDelete(req.params.id);
        res.status(200).json(studentDelete);
    }
    catch(error){
        res.status(404).json(error);
    }
})

module.exports = router;