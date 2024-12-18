import React, { useEffect, useState } from 'react';
import './user.css';
import axios from "axios";
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    
    const [serviceProgress, setServiceProgress] = useState([]);
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);// State to hold user data
    // Toggle to show/hide vehicle form
    const [serviceRequests, setServiceRequests] = useState([]); // State to hold service requests
const done = async (id) =>{

    try{
        const res = await axios.post("http//localhost:5000/pay",{
            id
        });
        if(res.data.success){
            alert("payment succesfull");
            setServiceProgress(res.data);
        }
        else{
            alert("payment failed");
        }
    }
    catch(error){
        alert(error);
    }
}
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

        const fetchServiceRequests = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/service-requests/${user?._id}`); // Fetch service requests for the user
                if (res.data.success) {
                    setServiceRequests(res.data.requests); // Set service requests in state
                }
                
            } catch (error) {
                console.error('Error fetching service requests:', error);
            }
        };

        fetchUserData(); // Call the fetch user data function

        // Fetch service requests only if user data is available
        if (user) {
            fetchServiceRequests();
        }
        const fetchServiceProgress = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/service-progress/${user?._id}`);
                setServiceProgress(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching service progress:', error);
                setError('Failed to load service progress data.');
                setLoading(false);
            }
        };
        
        

        

        fetchServiceProgress();
    }, [user]); // Add user to the dependency array

    
   
       

    

    // Show loading or error if user data is not yet loaded
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page" style={{marginTop: '50px'}}>
            <h2>All your service process Tracking</h2>

                {/* Service Requests Section */}
                <div className="vehicle-section">
                    <h3>Service Requests</h3>
                    {serviceRequests.length > 0 ? (
                        serviceRequests.map((request, index) => (
                            <div key={index}>
                                <p><strong>Request ID:</strong> {request._id}</p>
                                <p><strong>Vehicle Model:</strong> {request.vehicleId.model}</p>
                                <p><strong>Status:</strong> {request.status}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>No service requests available</p>
                        </div>
                    )}
                </div>

                <div className="vehicle-section">
            <h2>Service Progress Management</h2>
            {serviceProgress.length === 0 ? (
                <p>No service progress available.</p>
            ) : (
                serviceProgress.map((progress) => (
                    <div key={progress._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                        <h3>Request ID: {progress._id}</h3>
                        <p>User ID: {progress.userId}</p>
                        <p>Package: {progress.servicePackageId.name}</p>

                        {/* Safely access vehicle details */}
                        {progress.vehicleId && (
                            <div>
                                <h4>Vehicle Details:</h4>
                                <p>Model: {progress.vehicleId.model}</p>
                                <p>Registration Number: {progress.vehicleId.registrationNumber}</p>
                            </div>
                        )}

                        {/* Stages Checkboxes */}
                        <div>
                        <div>
                        <span>{progress.stages?.diagnostics ? '✔️' : '❌'} Diagnostics</span>
                        <span>{progress.stages?.mechanicalWorks ? '✔️' : '❌'} Mechanical Works</span>
                        <span>{progress.stages?.finalTouches ? '✔️' : '❌'} Final Touches</span>
                        <span>{progress.stages?.readyToPick ? '✔️' : '❌'} Ready to Pick</span>
                        
                        {
                         progress.stages?.readyToPick  && progress.isPaid &&   
                         <p className="text-success text-center pt-3">Payment Successful</p>
                        }
                    </div>
                        </div>
                    </div>
                ))
            )}
        </div>
            </div>
        
    );
};

export default Profile;