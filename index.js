/*
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
// Fetch all users
app.get('/admin/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch users', error });
    }
});

// Fetch all service packages
app.get('/admin/service-packages', async (req, res) => {
    try {
        const packages = await ServicePackage.find({});
        res.status(200).json({ success: true, packages });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch service packages', error });
    }
});


// Fetch all service requests
app.get('/admin/service-requests', async (req, res) => {
    try {
        const requests = await ServiceRequest.find({})
            .populate('userId', 'username')
            .populate('vehicleId', 'model registrationNumber')
            .populate('servicePackageId', 'name');
        res.status(200).json({ success: true, requests });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch service requests', error });
    }
});
// Fetch active users
// Fetch all active users
app.get('/admin/active-users', async (req, res) => {
    try {
        const activeUsers = await ActiveUser.find().populate('userId', 'username'); // Assuming userId has a reference to the User collection
        res.json({ success: true, users: activeUsers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
// Update service request status
app.put('/service-request/:id/status', async (req, res) => {
    const { id } = req.params; // Get the service request ID from the URL
    const { status } = req.body; // Get the new status from the request body

    try {
        const updatedRequest = await ServiceRequest.findByIdAndUpdate(
            id,
            { status },
            { new: true } // Return the updated document
        );

        if (!updatedRequest) {
            return res.status(404).json({ success: false, message: 'Service request not found' });
        }

        res.json({ success: true, message: 'Status updated successfully', request: updatedRequest });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});



// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
*/
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
    const serviceProgressSchema = new mongoose.Schema({
        requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceRequest', required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
        servicePackageId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServicePackage', required: true },
        stages: {diagnostics:{type: Boolean, default: true},
                 mechanicalWorks:{type: Boolean, default: false}, 
                 finalTouches:{type: Boolean, default: false}, 
                 readyToPick:{type: Boolean, default: false},    },
        isPaid: {type: Boolean, default: false},
        createdAt: { type: Date, default: Date.now }
        
    });
    const paymentSchema = new mongoose.Schema({
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        serviceRequestId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceRequest', required: true },
        amount: { type: Number, required: true },
        paymentMethod: { type: String, enum: ['Card', 'UPI', 'QR'], default: 'UPI' },
        paymentStatus: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
        paymentDate: { type: Date, default: Date.now }
    });

const ActiveUser = mongoose.model('ActiveUser', activeUserSchema);
const Vehicle = mongoose.model('Vehicle', vehicleSchema);
const User = mongoose.model('User', userSchema);
const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);
const ServicePackage = mongoose.model('ServicePackage', servicePackageSchema);
const ServiceProgress = mongoose.model('ServiceProgress', serviceProgressSchema);
const Payment = mongoose.model('Payment', paymentSchema);

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
        const requests = await ServiceRequest.find({ userId }).populate('vehicleId'); // Assuming ServiceRequest is your service request model
        res.json({ success: true, requests });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
app.get('/admin/users', async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

// Fetch all service packages
app.get('/admin/service-packages', async (req, res) => {
    try {
        const packages = await ServicePackage.find({});
        res.json(packages);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Fetch all service requests
app.get('/admin/service-requests', async (req, res) => {
    const requests = await ServiceRequest.find({}).populate('userId').populate('servicePackageId').populate('vehicleId');
    res.json(requests);
});

// Update service request status
app.put('/admin/service-requests/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        // Validate that status is provided
        if (!status) {
            return res.status(400).json({ success: false, message: 'Status is required' });
        }

        // Find the service request and update it
        const updatedRequest = await ServiceRequest.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        // If the request is not found, return a 404 error
        if (!updatedRequest) {
            return res.status(404).json({ success: false, message: 'Service request not found' });
        }

        // Return the updated request
        res.json({ success: true, message: 'Status updated successfully', updatedRequest });
    } catch (error) {
        console.error('Error updating service request status:', error);
        res.status(500).json({ success: false, message: 'Error updating status', error });
    }
});

// Add service progress for accepted requests
// Add service progress for accepted requests
app.post('/service-progress', async (req, res) => {
    const { requestId } = req.body;

    try {
        const serviceRequest = await ServiceRequest.findById(requestId);
        if (!serviceRequest || serviceRequest.status !== 'accepted') {
            return res.status(400).json({ success: false, message: 'Invalid request ID or request not accepted' });
        }

        const newProgress = new ServiceProgress({
            requestId,
            userId: serviceRequest.userId,
            vehicleId: serviceRequest.vehicleId,
            servicePackageId: serviceRequest.servicePackageId,
            stages: {
                diagnostics: false,
                mechanicalWorks: false,
                finalTouches: false,
                readyToPick: false
            }
        });

        await newProgress.save();
        res.status(201).json({ success: true, message: 'Service progress created successfully', progress: newProgress });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


// Update service progress stages
app.put('/service-progress/:id', async (req, res) => {
    const { id } = req.params;
    const { diagnostics, mechanicalWorks, finalTouches, readyToPick } = req.body.stages;

    try {
        const updatedProgress = await ServiceProgress.findByIdAndUpdate(
            id,
            { stages: { diagnostics, mechanicalWorks, finalTouches, readyToPick } },
            { new: true }
        );

        if (!updatedProgress) {
            return res.status(404).json({ success: false, message: 'Service progress not found' });
        }

        res.json({ success: true, message: 'Service progress updated', updatedProgress });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating service progress', error });
    }
});

app.get('/admin/service-progress', async (req, res) => {
    try {
        const progress = await ServiceProgress.find({})
        .populate('vehicleId')
        .populate('servicePackageId'); // Ensure ServiceProgress is your model
        res.json(progress);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});
app.get('/api/service-progress/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const progress = await ServiceProgress.find({userId: id})
        .populate('vehicleId')
        .populate('servicePackageId'); // Ensure ServiceProgress is your model
        res.json(progress);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});



// 2. Handle payment process
app.post('/pay/:serviceRequestId', async (req, res) => {
    const { serviceRequestId } = req.params;
    const { paymentMethod } = req.body;

    // Assuming userId comes from session or authentication middleware
    const userId = req.user._id; // Replace this line based on your authentication method

    try {
        // Fetch the service request to get the servicePackageId
        const serviceRequest = await ServiceRequest.findById(serviceRequestId).populate('servicePackageId');

        if (!serviceRequest) {
            return res.status(404).json({ error: 'Service request not found.' });
        }

        // Fetch the amount from the ServicePackage table
        const amount = serviceRequest.servicePackageId.price;

        // Create payment record
        const payment = new Payment({
            userId,
            serviceRequestId,
            paymentMethod,
            amount,
            paymentStatus: 'Completed'
        });

        await payment.save();
        res.json({ message: 'Payment successful', payment });
    } catch (error) {
        console.error('Payment Error:', error);
        res.status(500).json({ error: 'Failed to process payment.' });
    }
});
app.post('/servicepayment',async (req, res) => {
  const {userId, serviceRequestId} = req.body;
  try{
  const payment = await payment.find({userId:userId,serviceRequestId:serviceRequestId});
  if(!payment){
    const payment = new Payment({
        userId,
        serviceRequestId,
        paymentStatus: 'pending'
    });
    await payment.save(); 
  }
  res.json({message: "payment is pending"});
}
catch(error){
    console.error('Payment Error:', error);
    res.status(500).json({ error: 'Failed to process payment.' });
}
});
app.post('/donepayment', async (req, res) =>{
    const {userId, serviceRequestId, amount} = req.body;
    try{
const payment = new Payment({
    userId,
    serviceRequestId,
    amount,
    paymentStatus: 'completed'
});
await payment.save();
const updatedProgress = await ServiceProgress.findAndUpdate(
    serviceRequestId,
    { isPaid : true },
    { new: true }
);
if(updatedProgress){
    res.json({success: true});
}
    }
    catch(error){
        console.error('Payment Error:', error);
        res.status(500).json({ error: 'Failed to process payment.' });
    }

});
app.post('/pay', async (req, res) =>{
const {id} = req.data;
try{
    const res = await ServiceProgress.findByIdAndUpdate(
        id,
        { isPaid : true },
        { new: true }
    );
    if(res){
        res.json({success: true, res});
    }
}
catch(error){
    console.error('Payment Error:', error);
    res.status(500).json({ error: 'Failed to process payment.' });
}
});
// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});