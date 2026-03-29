import styles from "./Ticker.module.css";

const items = [
  "Frontend Developer",
  "UI/UX Designer",
  "Node · MongoDB",
  "Figma",
  "Springer Published",
  "Adobe Top 4%",
  "Design Society President",
  "Mentored 14 Students",
  "EY Techathon QF",
  "UI/UX Designer",
  "Node · MongoDB",
  "Figma",
  "Springer Published",
  "Adobe Top 4%",
  "Design Society President",
  "Mentored 14 Students",
  "EY Techathon QF",
];

export default function Ticker() {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  );
}
