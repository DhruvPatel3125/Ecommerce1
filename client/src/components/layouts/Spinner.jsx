import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5); // Fixed typo
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => {
        if (prevValue <= 1) {
          navigate("/login",{
            state: location.pathname,
          }); // Navigate when count reaches 0
          clearInterval(interval); // Clear interval to avoid memory leaks
          return 0;
        }
        return prevValue - 1; // Decrement count
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [navigate]); // Added `navigate` to dependency array

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-center">Redirecting you in {count} seconds</h1>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
