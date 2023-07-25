"use client";
import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";
const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = null; // Initialize response variable

    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Fixed header key
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
    } catch (e) {
      console.log(e);
    }

    if (response && response.status === 200) {
      setUser({
        username: "",
        email: "",
        phone: "",
        message: "",
      });
      setStatus("success");
    } else {
      setStatus("error"); // Fixed typo in "error"
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className={styles.contact_form}>
        <div className={styles.input_field}>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              id=""
              placeholder="Enter your name"
              onChange={handleChange}
              value={user.username}
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="phone">
            <input
              type="text"
              name="phone"
              id=""
              placeholder="Enter your phone number"
              value={user.phone}
              onChange={handleChange}
              required
              min={10}
              max={10}
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="message">
            <textarea
              name="message"
              id=""
              placeholder="Enter your Message"
              rows={5}
              value={user.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          {status === "success" && (
            <p className={styles.success_msg}>Thank you for your message!</p>
          )}
          {status === "error" && (
            <p className={styles.error_msg}>
              There was an error submitting your message. Please try again.
            </p>
          )}

          <button type="submit" className="">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
