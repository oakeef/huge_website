import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";

export default function Contact() {
    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", message: "hello" }),
        })
            .then(() => alert("Success!"))
            .catch((error) => alert(error));
    };

    return (
        <div className="contactContainer">
            <h1 className="contactHeader">Contact Us</h1>
            <p className="contactText">
                Have a question for the HUGE crew? We'd love to hear from you!
                Send us a message and we'll respond as soon as we can.
            </p>

            <div className="contactFormContainer">
                <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name inputs */}
                    <label className="contactFormLabel" htmlFor="name">
                        Name:
                    </label>

                    <input
                        {...register("name", {
                            required: "Name is a required field",
                        })}
                        className="contactFormInput"
                        type="text"
                        id="name"
                    ></input>

                    <p className="contactErrors">{errors.name?.message}</p>

                    {/* Email inputs */}
                    <label className="contactFormLabel" htmlFor="email">
                        Email:
                    </label>

                    <input
                        {...register("email", {
                            required: "A valid email is required",
                            pattern:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        aria-invalid={errors.email ? true : false}
                        className="contactFormInput"
                        type="text"
                        id="email"
                    ></input>

                    {errors.email?.type === "pattern" && (
                        <p className="contactErrors" role="alert">
                            Email is invalid
                        </p>
                    )}

                    <p className="contactErrors">{errors.email?.message}</p>

                    {/* Message inputs */}
                    <label className="contactFormLabel" htmlFor="message">
                        Message:
                    </label>

                    <textarea
                        {...register("message", {
                            required: "Message is a required field",
                            maxLength: 32000,
                        })}
                        className="contactFormInputMessage"
                        type="text"
                        id="message"
                    ></textarea>

                    <p className="contactErrors">{errors.message?.message}</p>

                    {/* submit */}
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
