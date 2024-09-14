import React from "react";
import Mech from "./mech.jpg";
import Car from "./car.png";

export default function login() {
  return (
    <>
      <div>
        <div
          className="container bg-light mt-lg-4 w-25 pt-5 ps-5 pe-5 pb-3 bg-light"
          style={{
            borderRadius: "20px",
            marginLeft: '29.8%',
            boxShadow: "2px 2px 6px black",
          }}
        >
          <form>
            <p
              className="text-center pb-3  fw-bold"
              style={{ fontSize: "45px" }}
            >
              Login
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
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label HTMLfor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control  border border-success"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input border border-success-subtle"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p className="fs-bold pt-3 text-center">
              Don't Have Account <a href="./sign.js">Sign-in</a>
            </p>
          </form>
        </div>
      </div>
      <img src={Mech} style={{height: '595px', width: '850px', position: 'absolute', left: '-12%', top: '10%', zIndex: '-1'}}/>
      
     
    </>
  );
}
