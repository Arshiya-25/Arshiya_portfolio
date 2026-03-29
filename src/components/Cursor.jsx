import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null); //useRef: stores reference to DOM element
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false); //useState - tracks: is user hovering on clickable element?
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }; // Updates mouse position
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    const addHover = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };
    addHover();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const dotSize = hovered ? 56 : 10;
  const ringSize = hovered ? 56 : 40;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: dotSize,
          height: dotSize,
          borderRadius: "50%",
          background: hovered ? "rgba(193,127,82,0.15)" : "var(--terra)",
          pointerEvents: "none",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.25s ease, height 0.25s ease, background 0.25s ease",
          mixBlendMode: hovered ? "normal" : "multiply",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: `1.5px solid ${hovered ? "var(--terra)" : "var(--terra)"}`,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.2s",
          opacity: hovered ? 0.8 : 0.5,
        }}
      />
    </>
  );
}
