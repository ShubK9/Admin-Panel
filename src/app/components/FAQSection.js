"use client";
import { useState } from "react";
import styles from "../style/ComparisonSection.module.css";

const faqs = [
  {
    question: "Which tool is best Notion or Motion?",
    answer:
      "You have to decide which tool suits the best for your requirements and need and we provide discount on that deals o that you can save some money.",
  },
  {
    question: "Can I buy both?",
    answer: "You have to decide which tool suits the best for your requirements and need and we provide discount on that deals o that you can save some money",
  },
  {
    question: "What is Notion?",
    answer: "You have to decide which tool suits the best for your requirements and need and we provide discount on that deals o that you can save some money",
  },
  {
    question: "What is Motion?",
    answer: "You have to decide which tool suits the best for your requirements and need and we provide discount on that deals o that you can save some money",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className={styles.faqSection}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={
                styles.faqItem + (openIdx === idx ? " " + styles.faqOpen : "")
              }
              tabIndex={0}
              role="button"
              aria-expanded={openIdx === idx}
              style={{ textAlign: "left" }}
              onClick={e => {
                // Only close if not clicking the close button
                if (e.target.closest("button")) return;
                setOpenIdx(openIdx === idx ? -1 : idx);
              }}
            >
              <div className={styles.faqQWrap} style={{ justifyContent: "flex-start" }}>
                <span className={styles.faqQIcon}>❓</span>
                <span className={styles.faqQ}>{faq.question}</span>
                {faq.answer && openIdx === idx && (
                  <button
                    className={styles.faqCloseBtn}
                    onClick={e => { e.stopPropagation(); setOpenIdx(-1); }}
                    aria-label="Close answer"
                  >✕</button>
                )}
              </div>
              <div
                className={
                  styles.faqASlide + (openIdx === idx ? " " + styles.faqASlideOpen : "")
                }
                style={{
                  pointerEvents: openIdx === idx ? "auto" : "none",
                  maxHeight: openIdx === idx ? '200px' : '0',
                  opacity: openIdx === idx ? 1 : 0,
                  transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.25s cubic-bezier(0.4,0,0.2,1)'
                }}
              >
                {openIdx === idx && faq.answer && <div className={styles.faqA}>{faq.answer}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
