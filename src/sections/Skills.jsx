import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { skills } from "../data";
import styles from "./Skills.module.css";

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}

function SkillRow({ items, direction = "left", dark = false, speed = "30s" }) {
  return (
    <div className={styles.rowWrap}>
      <div
        className={`${styles.row} ${direction === "right" ? styles.rowRight : styles.rowLeft}`}
        style={{ animationDuration: speed }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className={`${styles.pill} ${dark ? styles.pillDark : ""}`}
          >
            <span className={styles.pillDot} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <FadeUp>
          <span className={styles.eyebrow}>(What I work with)</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className={styles.heading}>
            Skills &amp; <em>Stack</em>
          </h2>
        </FadeUp>
      </div>

      <div className={styles.rows}>
        <SkillRow
          items={skills.row1}
          direction="left"
          dark={true}
          speed="34s"
        />
        <SkillRow
          items={skills.row2}
          direction="right"
          dark={false}
          speed="48s"
        />
        <SkillRow
          items={skills.row3}
          direction="left"
          dark={false}
          speed="38s"
        />
      </div>
    </section>
  );
}
