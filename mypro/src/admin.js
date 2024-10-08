import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [users, setUsers] = useState([]); // User data
  const [services, setServices] = useState([]); // Service request data

  // Simulated fetch for user data and service requests (in a real app, you'd fetch from an API)
  useEffect(() => {
    // Example user data
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", regDate: "2024-08-01", status: "Active" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", regDate: "2024-09-15", status: "Active" }
    ]);

    // Example service request data
    setServices([
      { id: 101, userName: "John Doe", vehicle: "Toyota Camry", service: "Premium", requestDate: "2024-10-01", pickupDate: "2024-10-03", status: "In Progress" },
      { id: 102, userName: "Jane Smith", vehicle: "Honda Accord", service: "Basic", requestDate: "2024-09-28", pickupDate: "2024-09-30", status: "Completed" }
    ]);
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Admin Dashboard</h1>

      {/* User Details Section */}
      <section className="user-details">
        <h2 className="my-4">User Details</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Registration Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.regDate}</td>
                <td>{user.status}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Service Requests Section */}
      <section className="service-requests mt-5">
        <h2 className="my-4">Service Requests</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>User</th>
              <th>Vehicle</th>
              <th>Service</th>
              <th>Request Date</th>
              <th>Pickup Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.userName}</td>
                <td>{service.vehicle}</td>
                <td>{service.service}</td>
                <td>{service.requestDate}</td>
                <td>{service.pickupDate}</td>
                <td>{service.status}</td>
                <td>
                  <button className="btn btn-success btn-sm">Track</button>
                  <button className="btn btn-info btn-sm ml-2">Update Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminPage;
