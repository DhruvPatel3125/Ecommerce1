import React from "react";
import Layout from "../components/layouts/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row policy-page" style={{ margin: "0 auto", maxWidth: "1200px" }}>
        {/* Image Section */}
        <div className="col-md-6" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src="/img/policies.webp"
            alt="Privacy Policy"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>

        {/* Privacy Policy Content */}
        <div className="col-md-6" style={{ padding: "20px" }}>
          <h1 className="bg-dark p-2 text-white text-center" style={{ borderRadius: "4px" }}>
            Privacy Policy
          </h1>
          <p className="text-justify mt-3">
            At <strong>eCommerce App</strong>, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
          </p>
          <h4 className="mt-4">1. Information We Collect</h4>
          <p className="text-justify">
            We may collect personal details such as your name, email address, phone number, billing address, and payment details when you use our platform.
          </p>
          <h4 className="mt-4">2. How We Use Your Information</h4>
          <p className="text-justify">
            Your information is used to process orders, improve user experience, provide customer support, and send promotional offers with your consent.
          </p>
          <h4 className="mt-4">3. Data Protection</h4>
          <p className="text-justify">
            We implement advanced security measures to protect your personal data from unauthorized access, alteration, or disclosure.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
