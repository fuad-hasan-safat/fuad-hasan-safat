"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiMessageSquare, FiCheck, FiAlertCircle, FiLoader } from "react-icons/fi";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

export default function SendMessage() {
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const validate = () => {
    const { email, subject, message } = formData;
    if (!email || !subject || !message) return "Please fill out all fields.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email address.";
    return null;
  };

  const handleSend = async () => {
    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setFormData({ email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Failed to send message. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-lg">
            Have a question or want to collaborate? Let&apos;s connect!
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 space-y-6"
        >
          {/* Email */}
          <div className="group space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Your Email
            </label>
            <div className="flex items-center gap-3 bg-slate-700/30 border border-slate-600/50 group-focus-within:border-cyan-400/50 rounded-xl px-4 py-3 transition-colors duration-200">
              <FiMail className="w-4 h-4 text-cyan-400 shrink-0" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="group space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Subject
            </label>
            <div className="flex items-center gap-3 bg-slate-700/30 border border-slate-600/50 group-focus-within:border-cyan-400/50 rounded-xl px-4 py-3 transition-colors duration-200">
              <FiMessageSquare className="w-4 h-4 text-cyan-400 shrink-0" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="group space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Message
            </label>
            <div className="flex items-start gap-3 bg-slate-700/30 border border-slate-600/50 group-focus-within:border-cyan-400/50 rounded-xl px-4 py-3 transition-colors duration-200">
              <FiSend className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                rows={5}
                className="w-full bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* Feedback */}
          <AnimatePresence mode="wait">
            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2.5 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3"
              >
                <FiAlertCircle className="w-4 h-4 shrink-0" />
                {errorMsg}
              </motion.div>
            )}
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2.5 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-4 py-3"
              >
                <FiCheck className="w-4 h-4 shrink-0" />
                Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <motion.button
            onClick={handleSend}
            disabled={status === "sending" || status === "success"}
            whileHover={status === "idle" || status === "error" ? { scale: 1.02 } : {}}
            whileTap={status === "idle" || status === "error" ? { scale: 0.98 } : {}}
            className="w-full py-3.5 px-8 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
          >
            {status === "sending" ? (
              <>
                <FiLoader className="w-4 h-4 animate-spin" />
                Sending…
              </>
            ) : status === "success" ? (
              <>
                <FiCheck className="w-4 h-4" />
                Sent!
              </>
            ) : (
              <>
                <FiSend className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
