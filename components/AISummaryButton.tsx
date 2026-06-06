"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiSparklingFill } from "@remixicon/react";
import { FiX } from "react-icons/fi";

export default function AISummaryButton() {
  const [open, setOpen] = useState(false);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = async () => {
    setOpen(true);
    if (summary) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/ai-summary");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate summary");
      setSummary(data.summary);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={handleOpen}
        title="AI Summary"
        className="fixed left-8 bottom-8 z-50 flex items-center gap-2 px-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-cyan-400/5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <RiSparklingFill className="w-4 h-4" />
        <span className="hidden sm:inline">AI Summary</span>
      </motion.button>

      {/* Modal backdrop + panel */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
            >
              {/* Gradient glow border */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-400/40 via-blue-500/20 to-transparent" />

              <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
                {/* Decorative top glow */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />

                {/* Header */}
                <div className="relative flex items-center justify-between px-6 pt-6 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-cyan-400/30 blur-md rounded-xl" />
                      <div className="relative p-2.5 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl border border-cyan-400/30">
                        <RiSparklingFill className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight">
                        AI Summary
                      </h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Powered by Gemini
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
                  >
                    <FiX className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Divider */}
                <div className="mx-6 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

                {/* Body */}
                <div className="relative px-6 py-5 max-h-[55vh] overflow-y-auto tiny-scrollbar">
                  {loading && (
                    <div className="flex flex-col items-center justify-center gap-4 py-10">
                      <div className="flex gap-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
                            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{
                              duration: 0.7,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-slate-400">
                        Reading the portfolio & writing a summary…
                      </p>
                    </div>
                  )}

                  {error && !loading && (
                    <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                      <span className="text-red-400 text-sm leading-relaxed">
                        {error}
                      </span>
                    </div>
                  )}

                  {summary && !loading && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      {summary
                        .split("\n\n")
                        .filter(Boolean)
                        .map((para, i) => (
                          <p
                            key={i}
                            className="text-[15px] text-slate-300 leading-relaxed text-justify"
                          >
                            {para}
                          </p>
                        ))}
                    </motion.div>
                  )}
                </div>

                {/* Footer */}
                {!loading && (
                  <div className="relative px-6 py-4 border-t border-slate-700/40 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      AI-generated · may contain inaccuracies
                    </span>
                    <button
                      onClick={() => setOpen(false)}
                      className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Got it
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
