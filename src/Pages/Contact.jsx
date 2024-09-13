import React, { useState } from 'react';
import style from '../Styles/Contact.module.css';
import axios from 'axios';

const Contact = () => {
  const myInfo = {
    name: '',
    number: '',
    email: '',
    message: ''
  };

  const [data, setData] = useState(myInfo);
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const Change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post('https://66a4bd8f5dc27a3c1909ae82.mockapi.io/stu/det/contact', data)
      .then((res) => {
        setData(myInfo);
        setIsSubmitted(true); 
      })
      .catch((err) => {
        console.error('Data not submitted', err);
        setIsSubmitted(false); 
      });
  };

  return (
    <div id="contact" className={style.container}>
      <h1>Contact Me</h1>
      <h4>
        "Ready to bring your ideas to life with MERN stack expertise? <br />
        Let's connect and build something amazing together. Contact me today!"
      </h4>
      <div className={style.contactForm}>
        <form onSubmit={Submit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={data.name}
                onChange={Change}
                required
              />
            </div>
            <div className="col-md-6" >
              <label className="form-label" id={style.a}>Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your number"
                name="number"
                value={data.number}
                onChange={Change}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
              value={data.email}
              onChange={Change}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter your message"
              name="message"
              value={data.message}
              onChange={Change}
              required
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      {isSubmitted && <h5>Data Submitted Successfully</h5>} 
    </div>
  );
};

export default Contact;