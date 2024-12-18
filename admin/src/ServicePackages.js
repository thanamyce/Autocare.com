import React, { useEffect, useState } from "react";
import axios from "axios";

const ServicePackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/service-packages");
        setPackages(res.data); // Assuming the response is an array of packages
      } catch (error) {
        console.error("Error fetching service packages:", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Service Packages</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Package ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg._id}>
              <td>{pkg._id}</td>
              <td>{pkg.name}</td>
              <td>{pkg.description}</td>
              <td>Rs.s{pkg.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicePackages;