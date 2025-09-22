"use client";
import styles from "../style/ComparisonSection.module.css";

const comparisons = [
  {
    leftLogo: "/motion-logo.png",
    rightLogo: "/notion-logo.png",
    title: "Framer Vs Webflow",
    subtitle: "Battle of Best No-Code Dev Tool",
    desc: "Collaborative power vs. desktop dominance. Which one fits your workflow?",
    btn: "View Full Comparasion",
    btnClass: styles.faceoffBtnBlack
  },
  {
    leftLogo: "/motion-logo.png",
    rightLogo: "/notion-logo.png",
    title: "Slack Vs Google Chat",
    subtitle: "Battle of Best Communication Tool",
    desc: "Collaborative power vs. desktop dominance. Which one fits your workflow?",
    btn: "View Full Comparasion",
    btnClass: styles.faceoffBtnBlue
  },
  {
    leftLogo: "/motion-logo.png",
    rightLogo: "/notion-logo.png",
    title: "Gemini Vs Chat-GPT",
    subtitle: "Battle of Best AI Tool",
    desc: "Collaborative power vs. desktop dominance. Which one fits your workflow?",
    btn: "View Full Comparasion",
    btnClass: styles.faceoffBtnBlue
  }
];

export default function ToolsFaceOff() {
  return (
    <section className={styles.faceoffSection}>
      <h2 className={styles.faceoffTitle}>Tools Face-OFF Which SaaS Reigns Supreme?</h2>
      <div className={styles.faceoffSubtitle}>
        We put the top software solutions head-to-head so you can make the best choice for your business. Our detailed comparisons analyze features, pricing, and user experience.
      </div>
      <div className={styles.faceoffGrid}>
        {comparisons.map((c, i) => (
          <div className={styles.faceoffCard} key={i}>
            <div className={styles.faceoffLogosRow}>
              <img src={c.leftLogo} alt="left logo" className={styles.faceoffLogo} />
              <span className={styles.faceoffVs}>vs</span>
              <img src={c.rightLogo} alt="right logo" className={styles.faceoffLogo} />
            </div>
            <div className={styles.faceoffCardTitle}>{c.title}</div>
            <div className={styles.faceoffCardSubtitle}><span className={styles.faceoffDot}>•</span> {c.subtitle}</div>
            <div className={styles.faceoffCardDesc}>{c.desc}</div>
            <button className={c.btnClass}>{c.btn}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
