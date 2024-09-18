import React, { useState } from "react";
import axios from "axios";

const Sign = () => {
  const [Email, setEmail] = useState("");
  //const [username, setUsername] = useState('');
  const [Pass, setPass] = useState("");
  const [Cpass, setcPass] = useState("");
  const [Msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Email && Pass !== Cpass) {
      setMsg("Passwords do not match.");
      return;
    }
    const url = "http://localhost:5000/regis";
    try {
      const response = await axios.post(url, { Email, Pass });
      setMsg(response.data);
    } catch (error) {
      setMsg("Error: " + error.response.data);
    }
  };

  return (
    <div>
      <div>
        <div
          className="container bg-light mt-lg-4 w-25 pt-5 ps-5 pe-5 pb-3 bg-light"
          style={{
            borderRadius: "20px",

            boxShadow: "2px 2px 6px black",
          }}
        >
          <form onSubmit={handleSubmit}>
            <p
              className="text-center pb-3  fw-bold"
              style={{ fontSize: "45px" }}
            >
              Registration
            </p>
            <div className="mb-3 ">
              <label HTMLfor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control  border border-success"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label HTMLfor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control  border border-success"
                id="exampleInputPassword1"
                value={Pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label HTMLfor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control  border border-success"
                id="confirmInputPassword1"
                value={Cpass}
                onChange={(e) => {
                  setcPass(e.target.value);
                }}
              />
            </div>
            <p className="fs-bold pt-3 text-center">{Msg}</p>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p className="fs-bold pt-3 text-center">
              Already Have Account <a href="./login.js">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Sign;
