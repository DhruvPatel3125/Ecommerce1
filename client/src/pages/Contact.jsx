import React from "react";
import Layout from "../components/layouts/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="/img/contactus.jpeg" // Correct relative path to public folder
            alt="Contact Us"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* Contact Details Section */}
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any query or info about our products, feel free to call us anytime. We are available 24x7!
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
