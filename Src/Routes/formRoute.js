const form = require('../Model/formModel');
const express = require('express');
const Path = express.Router();

//Conform to work
Path.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

//Create new form;
Path.post('/CreateForm', (req, res) => {
    try {
        let inward = new form(req.body);
        inward.save().then(() => {
            res.status(201).json({ message: "New form created" })
        })
    } catch (error) {
        res.status(500).json({ error })
    }
})

//Get all forms;
Path.get('/allforms', (req, res) => {
    try {
        form.find().then((data) => {
            res.status(201).json(data)
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//view Specific form
Path.get('/Viewform/:id', async (req, res) => {
    try {
        let find = req.params.id;
        let test = await form.findOne({ _id: find })
        res.status(201).json(test)
    } catch (error) {
        res.status(500).json({ Message: error })
    }
})

//Edit form Routes;
//Get Particular form;
Path.get('/Editform/:id', async (req, res) => {
    try {
        let find = req.params.id;
        let test = await form.findOne({ _id: find })
        res.status(201).json(test)
    } catch (error) {
        res.status(500).json({ Message: error })
    }
})

//update form fields;
Path.put('/UpdateForm/:id',async(req, res) => {
    try {
        let ideate = { _id: req.params.id };
        let data = {
            title: req.body.title,
            fields: req.body.fields
        }
        console.log(req.body.fields);
        await form.findOneAndUpdate(ideate,data, { new: true }).then((data)=>{
            res.status(204).json({message:'update Done'})
            console.log(data);
        })
    } catch (error) {
        res.status(500).json({ Message: error })
    }
})

module.exports = Path;