import React from "react";
import "./contact.css";

export const Contact = () => {
  return <div><header>
  {}
</header>

<main>
  <h1 className="contact">Contact Us</h1>

  <section>
      <h2>Contact Information</h2>
      <p>
          <strong>Customer Support Email:</strong>{' '}
          <a href="mailto:www.gmail.com">storehook@gmail.com</a>
          <br />
          <strong>Customer Support Phone:</strong> 0123456789
          <br />
          <strong>Business Address:</strong> Store Hook ,Venkat Tower , Trivandrum . Kerala 
      </p>
  </section>
  <section>
                        <h2>Contact Form</h2>
                        <form action="your_form_processing_script.php" method="post" encType="multipart/form-data">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required /><br />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required /><br />

                            <label htmlFor="subject">Subject:</label>
                            <select id="subject" name="subject">
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Order Inquiry">Order Inquiry</option>
                                <option value="Product Inquiry">Product Inquiry</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Other">Other</option>
                            </select><br />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea><br />

                            <label htmlFor="file">Attach File (if necessary):</label>
                            <input type="file" id="file" name="file" /><br />

                            <input type="submit" value="Submit" />
                        </form>
                    </section>
                </main></div>;
};
    

export default Contact;
