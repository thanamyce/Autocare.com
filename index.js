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

const vehicleSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    model: { type: String, required: true },
    registrationNumber: { type: String, required: true },
});

const activeUserSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    loginTime: { type: Date, default: Date.now }
});
const serviceRequestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    servicePackageId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServicePackage', required: true },
    status: { type: String, enum: ['pending', 'accepted'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }});
const servicePackageSchema = new mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        createdAt: { type: Date, default: Date.now }
    });

const ActiveUser = mongoose.model('ActiveUser', activeUserSchema);
const Vehicle = mongoose.model('Vehicle', vehicleSchema);
const User = mongoose.model('User', userSchema);
const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);
const ServicePackage = mongoose.model('ServicePackage', servicePackageSchema);

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

// Login route
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

// Logout route
app.post('/logout', async (req, res) => {
    const result = await ActiveUser.deleteMany({});
    if (result) {
        return res.json({ success: true, message: 'Logout successful' });
    }
});

// Add vehicle route
app.put('/add-vehicle', async (req, res) => {
    const { model, registrationNumber } = req.body;

    try {
        const activeUser = await ActiveUser.findOne();
        if (!activeUser) {
            return res.status(404).json({ success: false, message: 'No active user found' });
        }

        const newVehicle = new Vehicle({
            userId: activeUser.userId,
            model,
            registrationNumber
        });

        await newVehicle.save();
        res.status(201).json({ success: true, message: 'Vehicle added successfully', vehicle: newVehicle });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Fetch user data and vehicles route
app.get('/user', async (req, res) => {
    const activeUser = await ActiveUser.findOne(); // Get the active user
    if (!activeUser) {
        return res.status(404).json({ success: false, message: 'No active user found' });
    }

    const user = await User.findById(activeUser.userId);
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    const vehicles = await Vehicle.find({ userId: user._id }); // Fetch all vehicles for the user

    res.json({ success: true, user: { _id: user._id, email: user.username, vehicles } }); // Include vehicles in the response
});
//service request
app.post('/book-service', async (req, res) => {
    const { userId, vehicleId, servicePackageId } = req.body; // Include vehicleId

    const newRequest = new ServiceRequest({
        userId,
        vehicleId, // Set vehicleId
        servicePackageId,
    });

    try {
        await newRequest.save();
        res.status(200).json({ success: true, message: 'Service request created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating service request', error });
    }
});
//request
app.get('/service-requests/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const requests = await ServiceRequest.find({ userId }); // Assuming ServiceRequest is your service request model
        res.json({ success: true, requests });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
