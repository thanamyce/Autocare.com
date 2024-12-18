import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/service-requests");
        setRequests(res.data);
      } catch (error) {
        console.error("Error fetching service requests:", error);
      }
    };

    fetchRequests();
  }, []);
  const updateStatus = async (requestId) => {
    try {
        // Step 1: Update the service request status to 'accepted'
        const updateResponse = await axios.put(`http://localhost:5000/admin/service-requests/${requestId}`, { status: 'accepted' });

        if (!updateResponse.data.success) {
            throw new Error(updateResponse.data.message);
        }

        // Step 2: Create the service progress entry now that the request is accepted
        const requestDetails = requests.find(req => req._id === requestId);

        if (!requestDetails) {
            throw new Error("Service request details not found");
        }

        const progressResponse = await axios.post("http://localhost:5000/service-progress", {
            requestId: requestDetails._id,
            userId: requestDetails.userId,
            vehicleId: requestDetails.vehicleId,
            servicePackageId: requestDetails.servicePackageId
        });

        if (!progressResponse.data.success) {
            throw new Error(progressResponse.data.message);
        }

        // Step 3: Refetch service requests to update the state
        const updatedRequests = await axios.get("http://localhost:5000/admin/service-requests");
        setRequests(updatedRequests.data.requests);

        alert('Service request accepted and progress created!');
        
    } catch (error) {
        console.error('Error accepting service request:', error);
        alert('Failed to accept service request: ' + (error.response?.data?.message || error.message));
    }
};


  return (
    <div className="card">
      <div className="card-header">Service Requests</div>
      <table className="table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>User</th>
            <th>Vehicle</th>
            <th>Service Package</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>{request._id}</td>
              <td>{request.userId?.username || "Unknown User"}</td>
              <td>{request.vehicleId?.model || "Unknown Vehicle"}</td>
              <td>{request.servicePackageId?.name || "Unknown Package"}</td>
              <td>{request.status}</td>
              <td>
                                    {request.status === "pending" && (
                                        <button onClick={() => updateStatus(request._id)} className="btn btn-outline-success">Accept</button>
                                    )}
                                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceRequests;