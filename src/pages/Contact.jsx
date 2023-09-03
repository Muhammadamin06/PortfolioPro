import  React, { useState } from "react";
import NavBar from "../components/NavBar";

const tg_token = "6595979432:AAHyCadkWcY215pogMpJqackyO9JQ5aw8HI";
const tg_id = "2023424372";


function Contact() {
  const [messages, setMessages] = useState({ name: "", email: "", area: "" });

  const handleChange = (e) => {
    setMessages((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let message = `Name: ${messages.name} %0AEMAIL: ${messages.email} %0AMessage: ${messages.area}`;
    fetch(
      `https://api.telegram.org/bot${tg_token}/sendMessage?chat_id=${tg_id}&text=${message}`
    );
    setMessages({ name: "", email: "", area: "" });
  };
  return (
    <>
    <NavBar classname={"contact__navbar"} />
    <div className="contact container">
      <div className="contact__work">
        <h5 className="contact__title">Let's work</h5>
        <p className="contact__text">I would love to hear from you!</p>
      </div>
      <form onSubmit={onSubmit} className="contact__form">
        <div className="contact__message">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={messages.name}
            onChange={handleChange}
            className="contact__input"
            required
          />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={messages.email}
              onChange={handleChange}
              className="contact__input"
              required
            />
          <textarea
            type="text"
            placeholder="Message"
            name="area"
            value={messages.area}
            onChange={handleChange}
            className="contact__area"
            required
          />
        <button type="submit" className="contact__btn">Send message</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Contact;
