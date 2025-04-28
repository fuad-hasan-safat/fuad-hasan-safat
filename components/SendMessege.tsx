"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMessageSquare, FiAlertCircle } from "react-icons/fi";
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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <DialogueModal
        ref={dialogRef}
        alert={dialog.alert}
        type={dialog.type}
        onYes={sendMail}
      />

      <div className="max-w-2xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-slate-400 text-lg">
            Have a question or want to collaborate? Let&apos;s connect!
          </p>
        </motion.div>

        <div className="space-y-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
          {/* Email Input */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-3">
              <FiMail className="w-6 h-6 text-cyan-400 ml-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent py-4 px-4 text-slate-200 placeholder-slate-500 focus:outline-none"
                placeholder="Your email address"
              />
            </div>
            <div className="h-px bg-slate-700/50 group-focus-within:bg-gradient-to-r from-cyan-400 to-blue-500 transition-colors" />
          </div>

          {/* Subject Input */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-3">
              <FiMessageSquare className="w-6 h-6 text-cyan-400 ml-3" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent py-4 px-4 text-slate-200 placeholder-slate-500 focus:outline-none"
                placeholder="Subject"
              />
            </div>
            <div className="h-px bg-slate-700/50 group-focus-within:bg-gradient-to-r from-cyan-400 to-blue-500 transition-colors" />
          </div>

          {/* Message Input */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-3">
              <FiSend className="w-6 h-6 text-cyan-400 ml-3 mt-4" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent py-4 px-4 text-slate-200 placeholder-slate-500 focus:outline-none resize-none h-32"
                placeholder="Your message..."
              />
            </div>
            <div className="h-px bg-slate-700/50 group-focus-within:bg-gradient-to-r from-cyan-400 to-blue-500 transition-colors" />
          </div>

          {/* Submit Button */}
          <motion.button
            onClick={handleSend}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <FiSend className="w-5 h-5" />
            Send Message
          </motion.button>
        </div>

        {/* Error/Success Messages */}
        {dialog.type === "Error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-red-400 bg-red-900/30 p-4 rounded-lg"
          >
            <FiAlertCircle className="w-6 h-6" />
            <span>{dialog.alert}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}