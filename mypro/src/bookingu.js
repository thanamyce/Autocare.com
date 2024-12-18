import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './booking.css'; // Add your styles here

const BookService = () => {
  const [user, setUser] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    // Fetch the logged-in user and their vehicles
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/user');
        if (res.data.success) {
          setUser(res.data.user);
          setVehicles(res.data.user.vehicles || []); // Assuming user.vehicles contains the vehicles
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    const bookingData = {
      userId: user._id,
      email: user.email,
      vehicleId: selectedVehicle,
      servicePackageId: '670e6387925a0eaa818e6e65',
      date,
      time,
    };
    
    try {
      const res = await axios.post('http://localhost:5000/book-service', bookingData);
      if (res.data.success) {
        // Handle successful booking, e.g., show a confirmation message
        alert('Service booked successfully!');
      }
    } catch (error) {
      console.error('Error booking service:', error);
    }
  };
  return (
    <div className="booking-page">
      <h1 className="text-center">Premium Service</h1>
      <div className="user-info">
        <p><strong>User ID:</strong> {user?._id}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Vehicle Type:</label>
          <select
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
            required
          >
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle._id} value={vehicle._id}>
                {vehicle.model} - {vehicle.registrationNumber}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Book Service</button>
      </form>
    </div>
  );
};

export default BookService;
