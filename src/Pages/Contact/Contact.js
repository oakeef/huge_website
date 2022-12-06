import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contactContainer">
            <h1 className="contactHeader">Contact Us</h1>
            <p className="contactText">
                Have a question for the HUGE crew? We'd love to hear from you.
                Send us a message and we'll respond as soon as we can.
            </p>

            <div className="contactFormContainer">
                <form className="contactForm">
                    <label className="contactFormLabel" for="name">
                        Name:
                    </label>
                    <input
                        className="contactFormInput"
                        type="text"
                        id="name"
                    ></input>
                    <label className="contactFormLabel" for="email">
                        Email:
                    </label>
                    <input
                        className="contactFormInput"
                        type="text"
                        id="email"
                    ></input>
                    <label className="contactFormLabel" for="message">
                        Message:
                    </label>
                    <input
                        className="contactFormInputMessage"
                        type="text"
                        id="message"
                    ></input>
                    <input
                        className="contactFormSubmit"
                        type="submit"
                        value="Submit"
                    ></input>
                </form>
            </div>
        </div>
    );
}
