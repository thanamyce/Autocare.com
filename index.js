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
const activeUserSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true},
    loginTime: { type: Date, default: Date.now }
  });
  
  const ActiveUser = mongoose.model('ActiveUser', activeUserSchema);

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
    const activeUser = new ActiveUser({ userId: user._id });
    await activeUser.save();
    res.json({ success: true, message: 'Login successful' });
  });
  app.post('/logout',async(req, res) =>{
    const suc = await ActiveUser.deleteMany({});
    if(suc){
        return res.json({ success: true, message: 'logout successfull' });
    }
  });
  app.get('/user', async (req, res) => {
    const activeUser = await ActiveUser.findOne(); // Assuming single active user for simplicity
    if (!activeUser) {
        return res.status(404).json({ success: false, message: 'No active user found' });
    }

    const user = await User.findById(activeUser.userId);
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, user: { _id: user._id, email: user.username } });
});
// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});