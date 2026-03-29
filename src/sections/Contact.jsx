import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import styles from "./Contact.module.css";

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}

const links = [
  {
    label: "LinkedIn",
    value: "arshiya-singh-429a8b291",
    href: "https://www.linkedin.com/in/arshiya-singh-429a8b291/",
    arrow: "↗",
  },
  {
    label: "GitHub",
    value: "github.com/Arshiya-25",
    href: "https://github.com/Arshiya-25",
    arrow: "↗",
  },
  {
    label: "Resume",
    value: "Download Resume",
    href: "/ArshiyaSingh_Resume.pdf",
    arrow: "↓",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        {/* Left */}
        <div className={styles.left}>
          <FadeUp>
            <span className={styles.eyebrow}>(Let's connect)</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className={styles.heading}>
              Let's build
              <br />
              <em>something real.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className={styles.desc}>
              Open to <strong>collaborations</strong>, freelance Work - building
              thoughtful, well-crafted experiences.
              <em> Let's talk.</em>
            </p>
          </FadeUp>
          <FadeUp delay={0.26}>
            <a href="mailto:arshiya5280@gmail.com" className={styles.bigEmail}>
              arshiya5280@gmail.com ↗
            </a>
          </FadeUp>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <FadeUp delay={0.15}>
            <span className={styles.eyebrow}>(Find me at)</span>
          </FadeUp>

          <div className={styles.linkList}>
            {links.map((l, i) => (
              <FadeUp key={l.label} delay={0.2 + i * 0.1}>
                {/* Use CSS hover via className, NOT whileHover on padding */}
                <a
                  href={l.href}
                  target={l.label !== "Resume" ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`${styles.clink} cursor-hover`}
                >
                  <div className={styles.clinkLeft}>
                    <div className={styles.clinkLabel}>{l.label}</div>
                    <div className={styles.clinkValue}>{l.value}</div>
                  </div>
                  <span className={styles.clinkArrow}>{l.arrow}</span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
