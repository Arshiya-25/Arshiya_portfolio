import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { experience } from '../data'
import styles from './Experience.module.css'

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useReveal()
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}>
      {children}
    </motion.div>
  )
}

function ExpItem({ item, index }) {
  const { ref, inView } = useReveal(0.15)

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
    >
      {/* Animated left accent bar */}
      <motion.div
        className={styles.accentBar}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 + 0.2 }}
      />

      <div className={styles.itemDate}>{item.date}</div>

      <div className={styles.itemBody}>
        <div className={styles.itemRole}>{item.role}</div>
        <div className={styles.itemOrg}>{item.org}</div>

        <ul className={styles.bullets}>
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {/* Stats row */}
        {item.stats && (
          <div className={styles.stats}>
            {item.stats.map((s) => (
              <div key={s.n} className={`${styles.stat} ${item.isLeadership ? styles.statDark : ''}`}>
                <div className={styles.statN}>{s.n}</div>
                <div className={styles.statL}>{s.l}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <FadeUp>
        <span className={styles.eyebrow}>(Where I've shown up)</span>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className={styles.heading}>
          Experience &amp;<br /><em>Leadership.</em>
        </h2>
      </FadeUp>

      <div className={styles.list}>
        {experience.map((item, i) => (
          <ExpItem key={item.role + item.org} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
