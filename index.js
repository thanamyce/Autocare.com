/*const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();
const cors = require('cors');
const router = express.Router();
app.use(cors());
app.use(express.json());
//creating schema and collection for user
mongoose.connect('mongodb://localhost:27017/mypro');
const schema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const u1 = mongoose.model('user',schema);
router.post('/regis', async (req,res)=>{
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new u1({ username, password:hashedPassword });
        await user.save();
        res.send('User created');
    } catch (error) {
        res.send(error.message);
    }

});
router.get('/test',(req,res)=>{
    const {name} = req.body;
    res.send("hello"+name);
});
app.listen(5000,()=>{
    console.log("server setup done");
});*/

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mypro', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Registration route
app.post('/regis', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Test route
app.get('/test', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Hello ${name}`);
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: 'Invalid credentials' });
    }
  
    res.json({ success: true, message: 'Login successful' });
  });
// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});