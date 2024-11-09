import React from 'react';
import './Contact.css';
import white_arrow from '../../assets/white-arrow.png';

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1d1a1274-b0a3-44cb-91f3-42013d9d8a5e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission failed", error);
      setResult("Submission failed, please try again later.");
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col1">
        <h3>Send us a message</h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional services to our
          university community.
        </p>
        <ul>
          <li>Contact@anujSingh.dev</li>
          <li>+9175556554155</li>
          <li>
            77 civil lines Prayagraj
            <br />
            211011, India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />
          <label>Write your message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};
