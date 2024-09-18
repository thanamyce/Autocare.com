const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();
//creating schema and collection for user
mongoose.connect('mongodb://localhost:27017/mypro');
const schema = mongoose.schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const user = mongoose.model('user',schema);
app.post('http://localhost:5000/regis',async (req,res)=>{
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password:hashedPassword });
        await user.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(400).send(error.message);
    }

});
app.listen(3000,()=>{
    console.log("server setup done");
})