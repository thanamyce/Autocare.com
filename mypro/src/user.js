/*import React, { useEffect, useState } from 'react';
import './user.css';
import axios from "axios";
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [user, setUser] = useState(null); // State to hold user data
    const [vehicle, setVehicle] = useState({ model: '', number: '' }); // State to hold vehicle data
    const [isAddingVehicle, setIsAddingVehicle] = useState(false);
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
        
        fetchUserData(); // Call the fetch function
    }, []);
    const handleVehicleChange = (e) => {
      setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleVehicleSubmit = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.put('http://localhost:5000/user/vehicle', { vehicle }); // Send vehicle data to backend
          if (res.data.success) {
              setUser({ ...user, vehicle: vehicle }); // Update user state with vehicle data
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
            <button onClick={lout} className="logout-button">
            logout</button>
          </div>
        </div>
      </div>
       


    );
  };


export default Profile;*/
import React, { useEffect, useState } from 'react';
import './user.css';
import axios from "axios";
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [user, setUser] = useState(null); // State to hold user data
    const [vehicle, setVehicle] = useState({ model: '', number: '' }); // State to hold vehicle data
    const [isAddingVehicle, setIsAddingVehicle] = useState(false); // Toggle to show/hide vehicle form

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/user'); // Fetch user data
                if (res.data.success) {
                    setUser(res.data.user); // Set user data in state
                    setVehicle(res.data.user.vehicle || { model: '', number: '' }); // Fetch vehicle data if available
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        
        fetchUserData(); // Call the fetch function
    }, []);

    const handleVehicleChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    };

    const handleVehicleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put('http://localhost:5000/user/vehicle', { vehicle }); // Send vehicle data to backend
            if (res.data.success) {
                setUser({ ...user, vehicle: vehicle }); // Update user state with vehicle data
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
            <button onClick={lout} className="logout-button">
              Logout
            </button>
          </div>
        </div>

        {/* Vehicle Details Section - Positioned After the Profile Block */}
        <div className="vehicle-section">
          <h3>Vehicle Details</h3>
          {user.vehicle && user.vehicle.model ? (
              <div>
                <p><strong>Model:</strong> {user.vehicle.model}</p>
                <p><strong>Number:</strong> {user.vehicle.number}</p>
              </div>
          ) : (
              <div>
                  <p>No vehicle information available</p>
                  <button onClick={() => setIsAddingVehicle(true)} className="add-vehicle-button">
                      Add Vehicle Details
                  </button>
              </div>
          )}

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
              <button type="submit" className="save-vehicle-button">
                Save Vehicle Details
              </button>
            </form>
          )}
        </div>
      </div>
    );
};

export default Profile;


