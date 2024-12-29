import React from "react";
import Layout from "../components/layouts/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row aboutus">
        <div className="col-md-6">
          <img
            src="/img/about.jpeg"
            alt="About Us"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className=" mt-4 bg-dark p-2 text-white text-center">About Us</h1>
          <p className="text-justify mt-2">
            Welcome to <strong>eCommerce App</strong>, your trusted destination for premium products at unbeatable prices. We are committed to delivering a seamless online shopping experience, ensuring that our customers enjoy convenience, quality, and reliability with every purchase.
          </p>
          <p className="text-justify mt-3">
            Founded with the vision of revolutionizing online retail, we aim to bridge the gap between quality products and affordable pricing. Our dedicated team works tirelessly to curate a diverse range of products, from everyday essentials to exclusive finds, catering to your unique needs and preferences.
          </p>
          <p className="text-justify mt-3">
            Thank you for choosing us as your shopping partner. Together, let’s redefine the online shopping experience. If you have any questions, feel free to contact us—we’re here to help!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
