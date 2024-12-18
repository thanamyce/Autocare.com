import React, { useState } from "react";
import axios from "axios";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass !== cPass) {
      setMsg("Passwords do not match.");
      return;
    }

    const url = "http://localhost:5000/regis";
    try {
      const res = await axios.post(url, { username: email, password: pass });
      setMsg(res.data);
    } catch (error) {
      setMsg("Error: " + (error.response ? error.response.data : "Network Error"));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="container bg-light  w-md-50 p-5"
        style={{ borderRadius: "20px", boxShadow: "2px 2px 6px black", width: '390px' }}
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pb-3 fw-bold">Registration</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control border border-success"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control border border-success"
              id="exampleInputPassword1"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmInputPassword1" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control border border-success"
              id="confirmInputPassword1"
              value={cPass}
              onChange={(e) => setCPass(e.target.value)}
              required
            />
          </div>
          <p className="text-danger text-center">{msg}</p>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setEmail('');
                setPass('');
                setCPass('');
                setMsg('');
              }}
            >
              Reset
            </button>
          </div>
          <p className="text-center pt-3">
            Already have an account? <a href="./login.js">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign;
