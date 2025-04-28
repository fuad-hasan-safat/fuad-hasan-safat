import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Decorative Gradient */}
      <div className="absolute inset-0 top-1/3 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Back to Top */}
        <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group p-4 bg-white/90 backdrop-blur-lg shadow-lg rounded-full border border-slate-200 hover:border-cyan-300 transition-all
          flex items-center justify-center aspect-square"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <FiArrowUp className="w-6 h-6 text-slate-600 group-hover:text-cyan-500 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors" />
          </div>
        </motion.button>
      </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200 p-8">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener"
              whileHover={{ y: -2 }}
              className="p-3 rounded-lg bg-slate-100 hover:bg-cyan-100 text-slate-600 hover:text-cyan-600 transition-colors"
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener"
              whileHover={{ y: -2 }}
              className="p-3 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="mailto:your@email.com"
              whileHover={{ y: -2 }}
              className="p-3 rounded-lg bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-600 transition-colors"
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <div className="h-px bg-slate-200/50 mx-auto w-32 mb-4" />
            <p className="text-sm text-slate-600 font-medium">
              &copy; {new Date().getFullYear()} Fuad Hasan Safat
              <span className="mx-2">•</span>
              Built with passion
            </p>
            <p className="text-xs text-slate-400">
              All rights reserved • Made in Bangladesh
            </p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}