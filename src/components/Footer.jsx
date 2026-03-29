import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© 2025 Arshiya Singh</span>
      <span className={styles.center}>
        Process <strong> · Iteration ·</strong> Refinement
      </span>
      <a href="mailto:arshiya5280@gmail.com">arshiya5280@gmail.com</a>
    </footer>
  );
}
