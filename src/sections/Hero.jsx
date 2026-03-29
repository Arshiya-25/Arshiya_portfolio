import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const bgTextRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const bottomRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    // Parallax on background giant text
    gsap.to(bgTextRef.current, {
      yPercent: 28,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.8, // number = seconds of lag/damping, makes it silky not abrupt
      },
    });

    // Word entrance — stagger each .word span
    const words = titleRef.current.querySelectorAll(".word span");
    gsap.fromTo(
      words,
      { y: "110%" },
      {
        y: "0%",
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        delay: 0.3,
      },
    );

    // Fade-in desc + stats
    gsap.fromTo(
      [tagRef.current, descRef.current, statsRef.current, bottomRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.75,
      },
    );
  }, []);

  const stats = [
    { n: "2.6L+", l: "Adobe Top 4%" },
    { n: "40", l: "Students Led" },
    { n: "1", l: "Publication" },
  ];

  return (
    <section id="hero" className={styles.hero}>
      {/* Big background text */}
      <div ref={bgTextRef} className={styles.bgText}>
        ARSHIYA
      </div>

      <div className={styles.inner}>
        {/* Tag */}
        <div ref={tagRef} className={styles.tag} style={{ opacity: 0 }}>
          <span className={styles.tagLine} />
          <span className={styles.statusDot} />
          Open to internships · Delhi, India
          <span className={styles.tagLine} />
        </div>

        {/* Title */}
        <h1 ref={titleRef} className={styles.title}>
          {["I design", "and build", "things."].map((word, i) => (
            <span key={i} className={`word ${styles.wordWrap}`}>
              <span>{word}</span>
              {i === 1 && <em className={styles.italic}></em>}
            </span>
          ))}
        </h1>

        {/* Bottom row */}
        <div className={styles.bottomRow}>
          <p ref={descRef} className={styles.desc} style={{ opacity: 0 }}>
            Frontend Developer · UI/UX Designer
            <br />
            <br />
            <strong>3rd year ECE at IGDTUW.</strong> Focused on building
            thoughtful, well-crafted interfaces — where the small details do the
            work.
          </p>

          <div ref={statsRef} className={styles.right} style={{ opacity: 0 }}>
            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.n} className={styles.stat}>
                  <div className={styles.statN}>{s.n}</div>
                  <div className={styles.statL}>{s.l}</div>
                </div>
              ))}
            </div>
            <a href="#work" className={styles.cta}>
              See my work ↓
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div ref={bottomRef} className={styles.bottom} style={{ opacity: 0 }}>
        <span className={styles.bottomLeft}>ECE · IGDTUW · Batch of 2027</span>
        <div className={styles.scrollHint}>
          <div className={styles.scanLine} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
