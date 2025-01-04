import React, { useState } from "react";
import Layout from "./../../components/layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
  // Define state variables for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // form submit handler
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)} // Bind to state
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Bind to state
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind to state
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter Your Phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Bind to state
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter Your Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)} // Bind to state
            />
          </div>

          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
