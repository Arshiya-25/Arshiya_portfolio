import { useEffect, useState } from "react";

const links = ["about", "skills", "work", "experience", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.35rem 5vw",
    transition: "background 0.4s, border-color 0.4s",
    background: scrolled ? "rgba(247,243,238,0.94)" : "transparent",
    backdropFilter: scrolled ? "blur(14px)" : "none",
    borderBottom: scrolled
      ? "1px solid var(--border)"
      : "1px solid transparent",
  };

  const logoStyle = {
    fontFamily: "var(--font-serif)",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: scrolled ? "var(--ink)" : "var(--soft)",
    letterSpacing: "-0.01em",
    transition: "color 0.3s",
  };

  const linkStyle = {
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: scrolled ? "var(--muted)" : "rgba(247,243,238,0.65)",
    transition: "color 0.2s",
    fontWeight: 400,
  };

  const ctaStyle = {
    fontSize: "0.72rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: 500,
    color: scrolled ? "var(--ink)" : "var(--soft)",
    border: `1px solid ${scrolled ? "var(--border)" : "rgba(247,243,238,0.3)"}`,
    padding: "0.5rem 1.2rem",
    transition: "all 0.2s",
  };

  return (
    <nav style={navStyle}>
      <a href="#hero" style={logoStyle}>
        AS
      </a>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l}`}
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "var(--terra)")}
              onMouseLeave={(e) =>
                (e.target.style.color = scrolled
                  ? "var(--muted)"
                  : "rgba(247,243,238,0.65)")
              }
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/ArshiyaSingh_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        style={ctaStyle}
        onMouseEnter={(e) => {
          e.target.style.background = "var(--terra)";
          e.target.style.borderColor = "var(--terra)";
          e.target.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.borderColor = scrolled
            ? "var(--border)"
            : "rgba(247,243,238,0.3)";
          e.target.style.color = scrolled ? "var(--ink)" : "var(--soft)";
        }}
      >
        Resume ↗
      </a>
    </nav>
  );
}
