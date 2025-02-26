"use client";
import React, {useRef, useState } from "react";
import DialogueModal from "./DialugueModal";

export default function SendMessage() {
  const [dialog, setDialog] = useState({
    type: "Confirmation", // Confirmation or Error
    alert: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, subject, message } = formData;

    if (!email || !subject || !message) {
      setDialog({
        type: "Error",
        alert: "Please fill out all fields.",
      });
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setDialog({
        type: "Error",
        alert: "Invalid email address.",
      });
      return false;
    }

    return true;
  };

  const handleSend = () => {
    if (!validateForm()) {
      dialogRef.current?.showModal();
      return;
    }

    setDialog({
      type: "Confirmation",
      alert: "Are you sure you want to send this email?",
    });
    dialogRef.current?.showModal();
  };

  const sendMail = () => {
    const { email, subject, message } = formData;
    const mailtoLink = `mailto:fuadsafat16@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;

    // Reset form after sending
    setFormData({ email: "", subject: "", message: "" });
    dialogRef.current?.close();
  };

  return (
    <section className="">
      <DialogueModal
        ref={dialogRef}
        alert={dialog.alert}
        type={dialog.type === "Confirmation" ? "Confirmation" : "Error"}
        onYes={sendMail}
      />

      <div className="flex flex-col items-center space-y-6 md:p-8">
        <h1 className="font-exo_2 text-2xl md:text-5xl">CONTACT</h1>

        <h2 className="font-bold font-exo_2 text-left text-xl md:text-2xl">Send an Email</h2>

        {/* Email Input */}
        <div className="relative w-full md:w-1/2">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border-gray-300 p-3 border rounded-md focus:ring-2 focus:ring-amber-300 w-full text-gray-800 focus:outline-none peer placeholder-transparent"
            placeholder="Your Email Address"
            aria-label="Your Email Address"
          />
          <label
            htmlFor="email"
            className="-top-2 peer-focus:-top-2 peer-placeholder-shown:top-3 left-3 absolute bg-white px-1 rounded-md text-gray-500 text-sm peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
          >
            Your Email Address
          </label>
        </div>

        {/* Subject Input */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-gray-300 p-3 border rounded-md focus:ring-2 focus:ring-amber-300 w-full text-gray-800 focus:outline-none peer placeholder-transparent"
            placeholder="Subject"
            aria-label="Subject"
          />
          <label
            htmlFor="subject"
            className="-top-2 peer-focus:-top-2 peer-placeholder-shown:top-3 left-3 absolute bg-white px-1 rounded-md text-gray-500 text-sm peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
          >
            Subject
          </label>
        </div>

        {/* Message Textarea */}
        <div className="relative w-full md:w-1/2">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="border-gray-300 p-3 border rounded-md focus:ring-2 focus:ring-amber-300 w-full h-32 text-gray-800 focus:outline-none peer placeholder-transparent"
            placeholder="Message"
            aria-label="Message"
          ></textarea>
          <label
            htmlFor="message"
            className="-top-2 peer-focus:-top-2 peer-placeholder-shown:top-3 left-3 absolute bg-white px-1 rounded-md text-gray-500 text-sm peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
          >
            Message
          </label>
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          className="px-6 py-2 rounded-md focus:ring-2 focus:ring-blue-400 w-full md:w-1/2 font-exo_2 font-semibold text-white transition-all duration-1000 ease-in-out bg-amber-500 hover:bg-blue-600 hover:text-amber-400"
        >
          Send
        </button>
      </div>
    </section>
  );
}
