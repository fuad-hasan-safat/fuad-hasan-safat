"use client";
import { motion } from "framer-motion";
import { FiMail, FiEdit, FiMessageSquare } from "react-icons/fi";

export default function ClassicSendMessage() {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif font-semibold text-slate-800 text-3xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-md text-slate-600">
            Have a question or want to work together? Send me a message.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6 mx-auto max-w-lg"
        >
          {/* Email Field */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-slate-700">
              <FiMail className="w-4 h-4" />
              Your Email
            </label>
            <input
              type="email"
              className="px-4 py-2 border border-slate-300 focus:border-blue-500 rounded-md outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all"
              required
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-slate-700">
              <FiEdit className="w-4 h-4" />
              Subject
            </label>
            <input
              type="text"
              className="px-4 py-2 border border-slate-300 focus:border-blue-500 rounded-md outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all"
              required
            />
          </div>

          {/* Message Field */}
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-slate-700">
              <FiMessageSquare className="w-4 h-4" />
              Message
            </label>
            <textarea
              rows={4}
              className="px-4 py-2 border border-slate-300 focus:border-blue-500 rounded-md outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-700 py-3 rounded-md w-full font-medium text-white transition-colors"
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Confirmation Message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-green-600 text-center"
        >
          Thank you! Your message has been sent.
        </motion.div>
      </div>
    </section>
  );
}