import React, { useEffect, useState } from 'react';
import './user.css';
import axios from "axios";
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [user, setUser] = useState(null); // State to hold user data
    const [vehicle, setVehicle] = useState({ model: '', number: '' }); // State to hold new vehicle data
    const [isAddingVehicle, setIsAddingVehicle] = useState(false); // Toggle to show/hide vehicle form
    const [serviceRequests, setServiceRequests] = useState([]); // State to hold service requests

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/user'); // Fetch user data
                if (res.data.success) {
                    setUser(res.data.user); // Set user data in state
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

      

        fetchUserData(); // Call the fetch user data function

        // Fetch service requests only if user data is available
        if (user) {
           console.log("okay");
        }
    }, [user]); // Add user to the dependency array

    const handleVehicleChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    };

    const handleVehicleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send vehicle data to backend, assuming user can have multiple vehicles
            const res = await axios.put('http://localhost:5000/add-vehicle', { model: vehicle.model, registrationNumber: vehicle.number });
            if (res.data.success) {
                // Add the new vehicle to the user's existing vehicle array
                setUser({ ...user, vehicles: [...user.vehicles, { model: vehicle.model, registrationNumber: vehicle.number }] });
                setVehicle({ model: '', number: '' }); // Clear the form for adding another vehicle
                setIsAddingVehicle(false); // Hide the form after submission
            }
        } catch (error) {
            console.error('Error saving vehicle data:', error);
        }
    };

    const lout = async () => {
        logout();
        try {
            const res = await axios.post('http://localhost:5000/logout');
            if (res.data.success) {
                setTimeout(() => {
                    navigate('/'); // Redirect to home after successful logout
                }, 500);
            }
        } catch (error) {
            console.error('There was an error with the logout request!', error);
        }
    };

    // Show loading or error if user data is not yet loaded
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page">
            <div>
                {/* Profile Block */}
                <div className="profile-container">
                    <div className="profile-image-container">
                        <img
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9J5GIkG7MgDapJPTAec7xirKI3MivVvsFew&s"}
                            alt="Profile"
                            className="profile-image"
                        />
                    </div>
                    <div className="profile-details">
                        <p><strong>User Id:</strong> {user._id}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <button onClick={lout} className="logout-button">Logout</button>
                    </div>
                </div>

                {/* Vehicle Details Section */}
                <div className="vehicle-section">
                    <h3>Vehicle Details</h3>
                    {user.vehicles && user.vehicles.length > 0 ? (
                        user.vehicles.map((vehicle, index) => (
                            <div key={index}>
                                <p><strong>Model:</strong> {vehicle.model}</p>
                                <p><strong>Number:</strong> {vehicle.registrationNumber}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>No vehicle information available</p>
                        </div>
                    )}

                    <button onClick={() => setIsAddingVehicle(true)} className="add-vehicle-button">
                        Add Vehicle Details
                    </button>

                    {isAddingVehicle && (
                        <form className="vehicle-form" onSubmit={handleVehicleSubmit}>
                            <div className="form-group">
                                <label htmlFor="model">Vehicle Model:</label>
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    value={vehicle.model}
                                    onChange={handleVehicleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Vehicle Number:</label>
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    value={vehicle.number}
                                    onChange={handleVehicleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="save-vehicle-button">Save Vehicle Details</button>
                        </form>
                    )}
                </div>

                {/* Service Requests Section */}
                
            </div>
        </div>
    );
};

export default Profile;
