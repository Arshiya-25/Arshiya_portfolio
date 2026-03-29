import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--dark)",
        zIndex: 9998,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.25rem",
      }}
    >
      {/* Name reveal */}
      <div style={{ overflow: "visible" }}>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 900,
            color: "var(--soft)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Arshiya
        </motion.div>
      </div>

      <div style={{ overflow: "visible" }}>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.18,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--terra)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Singh.
        </motion.div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 160,
          height: 1,
          background: "rgba(247,243,238,0.15)",
          marginTop: "1rem",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ height: "100%", background: "var(--terra)" }}
        />
      </div>
    </motion.div>
  );
}
