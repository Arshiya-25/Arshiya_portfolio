import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import styles from "./About.module.css";

const cards = [
  {
    icon: "✦",
    title: "Design First",
    desc: "Every project starts with empathy, research, and wireframes — not code.",
  },
  {
    icon: "⚡",
    title: "Build & Iterate",
    desc: "Ideas move quickly into working prototypes, refined through iteration rather than overthinking.",
  },
  {
    icon: "◎",
    title: "Attention to Detail",
    desc: "Focus on spacing, flow, and interaction — the small decisions that shape how something feels.",
  },
  {
    icon: "↗",
    title: "Lead & Mentor",
    desc: "Leading a design community, organizing initiatives, and working closely with students and teams.",
  },
];

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        {/* Sticky left */}
        <div className={styles.left}>
          <FadeUp>
            <span className={styles.eyebrow}>(Who I am)</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className={styles.heading}>
              A bit
              <br />
              about <em>me.</em>
            </h2>

            <div className={styles.aboutAccent} />
          </FadeUp>
        </div>

        {/* Right content */}
        <div className={styles.right}>
          <FadeUp>
            <p className={styles.leadP}>
              I started with design — obsessively tweaking spacing in Figma,
              thinking about how people <em>feel</em> when they use an
              interface. Over time, that became understanding what works and
              what doesn't. So most of what I do is
              <strong> explore, refine, and rebuild </strong>- focusing on how
              things behave and flow.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className={styles.bodyP}>
              Right now, I'm learning how to bring those ideas to life through
              frontend — keeping the same attention to detail from design to
              implementation. I also have a{" "}
              <strong>published paper in Springer ICICC 2025</strong> — all as a
              3rd year student.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className={styles.bodyP}>
              The goal is simple: build experiences that feel —{" "}
              <strong>natural, thoughtful,</strong> and actually make sense to
              use.
            </p>
          </FadeUp>

          {/* 2x2 cards */}
          <div className={styles.cardsGrid}>
            {cards.map((c, i) => (
              <FadeUp key={c.title} delay={0.08 * i}>
                <div className={styles.card}>
                  <span className={styles.cardIcon}>{c.icon}</span>
                  <strong className={styles.cardTitle}>{c.title}</strong>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
