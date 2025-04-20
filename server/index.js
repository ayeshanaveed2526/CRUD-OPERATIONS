const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModal = require('./model/Users');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/crud")
app.get('/', (req, res) => {
    UserModal.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.get('/getUser/:id', (req, res) => { 
    const id = req.params.id;
    UserModal.findById(id)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))

})
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findByIdAndUpdate (id, {name: req.body.name, email: req.body.email, age: req.body.age}, {new: true})
    .then(user => res.json(user))
    .catch(err => res.json(err));
});
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findByIdAndDelete(id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.post('/createUser', (req, res) => {
    UserModal.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.listen(3001, () => {
    console.log('Server is running on port 3001');
    })