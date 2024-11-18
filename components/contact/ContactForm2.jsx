"use client";
import { sendEmail } from "@/utils/api-calls";
import React, { useRef } from "react";

const ContactForm2 = () => {
  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    // "use server";
    // event.preventDefault();
    // console.log(event);
    const data = await sendEmail({
      name: formData.get("name"),
      message: formData.get("message"),
      email: formData.get("email"),
    });
    formRef.current.reset();
    window.alert("Form has been submitted");
    console.log(data);
  };

  return (
    <form ref={formRef} action={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label className="d-block">Name*</label>
            <input type="text" placeholder="Your Name" name="name" required="required" />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label className="d-block">Email*</label>
            <input type="email" placeholder="Enter you email" name="email" required="required" />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              placeholder="Your message*"
              name="message"
              required="required"
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <button className="btn-one fw-500 w-100 text-uppercase fs-14 d-block">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm2;
