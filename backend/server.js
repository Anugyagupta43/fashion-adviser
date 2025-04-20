const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const Users = require('./models/Users');

app.use(express.json());  // for JSON payloads
app.use(express.urlencoded({ extended: true })); // for form data

mongoose.connect("mongodb+srv://anugyagupta043:anugya043@cluster0.1xrlviu.mongodb.net/outfit_rec?retryWrites=true&w=majority&appName=Cluster0");

http.listen(3000, function(){
  console.log('server is running');
});
//signup
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new Users({ email, password });
    await newUser.save();
    res.status(201).send('User saved!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
  }
});
