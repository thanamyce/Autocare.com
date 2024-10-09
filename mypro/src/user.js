import React from 'react';
import './user.css';

const Profile = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
        joined: "January 2022",
        bio: "I love working with cars and managing garage services.",
        profileImage: "https://via.placeholder.com/150"
      };
  return (
    <div className="profile-page container py-5">
      <h2 className="text-center mb-4">Profile</h2>
      <div className="card profile-card">
        <div className="row g-0">
          <div className="col-md-4 text-center">
            <img
              src={user.profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="img-fluid rounded-circle profile-image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{user.name}</h4>
              <p className="card-text"><strong>Email:</strong> {user.email}</p>
              <p className="card-text"><strong>Role:</strong> {user.role}</p>
              <p className="card-text"><strong>Joined:</strong> {user.joined}</p>
              <p className="card-text"><strong>Bio:</strong> {user.bio || "No bio available"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
