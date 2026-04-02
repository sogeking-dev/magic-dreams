"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const accept = () => {
    setShow(false);
  };

  const decline = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0a0f0a]"
        >
          {/* Background texture */}
          <div className="absolute inset-0 bg-gradient-radial from-[#141a14] via-[#0a0f0a] to-[#0a0f0a]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="relative z-10 text-center px-8 max-w-lg"
          >
            <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] text-[#d4af37] uppercase mb-8">
              Magic Dreams Tilburg
            </p>

            <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light italic text-[#f4f1e8] leading-none mb-4">
              Welkom
            </h1>

            <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#8b8b7e] mb-12">
              Sinds 1998 — Piusstraat 146, Tilburg
            </p>

            <div className="border-t border-[rgba(212,175,55,0.2)] pt-10">
              <p className="font-[family-name:var(--font-space)] text-xs text-[#8b8b7e] tracking-widest uppercase mb-8">
                Bent u 18 jaar of ouder?
              </p>

              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={accept}
                  className="font-[family-name:var(--font-space)] text-xs text-[#0a0f0a] bg-[#f4f1e8] px-10 py-4 tracking-[0.25em] uppercase hover:bg-[#d4af37] transition-colors duration-300"
                >
                  Ja, 18+
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={decline}
                  className="font-[family-name:var(--font-space)] text-xs text-[#8b8b7e] border border-[rgba(139,139,126,0.4)] px-10 py-4 tracking-[0.25em] uppercase hover:border-[#8b8b7e] transition-colors duration-300"
                >
                  Nee
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
