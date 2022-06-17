import React from "react";
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { useState } from "react";
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vuke0zb",
        "template_hk41lqa",
        formRef.current,
        "1whEtRTB_9-u4nG9h"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's talk about your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +111 555 6666
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              aleatrengrouse@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              PO Box 200
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Tell me your Story?</b> Get in touch. Always freelancing if the
            right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            <br></br>
            {done && "Thank you for your Email"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
