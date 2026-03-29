import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { projects, designProjects } from "../data";
import styles from "./Work.module.css";

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

/* ── Single project row ── */
function ProjectRow({ project, index }) {
  const { ref, inView } = useReveal();
  return (
    <motion.a
      ref={ref}
      href={project.links?.live || project.links?.github || "#"}
      target={project.disabled ? undefined : "_blank"}
      rel="noreferrer"
      className={`${styles.projRow} ${project.disabled ? styles.projDisabled : ""}`}
      onClick={project.disabled ? (e) => e.preventDefault() : undefined}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: project.disabled ? 0.4 : 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.08,
      }}
      whileHover={project.disabled ? {} : { paddingLeft: "1.5rem" }}
    >
      <span className={styles.projNum}>{project.id}</span>

      <div className={styles.projBody}>
        <div className={styles.projTitle}>{project.title}</div>
        <div className={styles.projMeta}>
          <span className={styles.projStack}>{project.stack}</span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`${styles.badge} ${
                project.tagType === "gold"
                  ? styles.badgeGold
                  : project.tagType === "wip"
                    ? styles.badgeWip
                    : ""
              }`}
            >
              {tag}
            </span>
          ))}
          <span className={styles.badge}>{project.date}</span>
        </div>
      </div>

      <motion.span className={styles.projArrow} transition={{ duration: 0.25 }}>
        ↗
      </motion.span>
    </motion.a>
  );
}

/* ── Design card ── */
function DesignCard({ p, index }) {
  const { ref, inView } = useReveal();
  return (
    <motion.a
      ref={ref}
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className={styles.dcard}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.dthumb} style={{ background: p.bg }}>
        <motion.img
          src={p.image}
          alt={p.title}
          className={styles.dImage}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        />
      </div>
      <div className={styles.dbody}>
        <div className={styles.dtype}>{p.type}</div>
        <div className={styles.dtitle}>{p.title}</div>
        <p className={styles.ddesc}>{p.desc}</p>
        <span className={styles.dlink}>View Prototype ↗</span>
      </div>
    </motion.a>
  );
}

/* ── Main section ── */
export default function Work() {
  const [tab, setTab] = useState("dev");

  return (
    <section id="work" className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <FadeUp>
            <span className={styles.eyebrow}>(Selected Work)</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className={styles.heading}>
              Things I've
              <br />
              <em>actually built.</em>
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className={styles.tabs}>
            {["dev", "design"].map((t) => (
              <button
                key={t}
                className={`${styles.tab} ${tab === t ? styles.tabOn : ""}`}
                onClick={() => setTab(t)}
              >
                {t === "dev" ? "Dev Projects" : "Design Work"}
              </button>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Tab panels */}
      <AnimatePresence mode="wait">
        {tab === "dev" && (
          <motion.div
            key="dev"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className={styles.projList}
          >
            {projects.map((p, i) => (
              <ProjectRow key={p.id} project={p} index={i} />
            ))}
          </motion.div>
        )}

        {tab === "design" && (
          <motion.div
            key="design"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className={styles.designGrid}
          >
            {designProjects.map((p, i) => (
              <DesignCard key={p.title} p={p} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
