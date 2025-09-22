
"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "../style/HeroSection.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export default function HeroSection() {
  const [heroData, setHeroData] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("heroSectionData");
      if (data) {
        setHeroData(JSON.parse(data));
      }
    }
  }, []);

  const heading = heroData.heading || "Motion Vs Notion"; //Heading 
  // Allow body to have a line break (\n) to split into two lines
  const body = (heroData.body || "Which is the best productivity tool for you?\nCompare two of the most popular productivity apps to find which one suits your workflow. From task management to team collaboration, see which tool comes out on top."); // Hero Body
  const bodyLines = body.split(/\r?\n/);
  const primaryCtaText = heroData.primaryCtaText || "Get Notion"; // Primary CTA Text
  const primaryCtaLink = heroData.primaryCtaLink || "#"; // Primary CTA button Link
  const secondaryCtaText = heroData.secondaryCtaText || "Get Motion"; // Secondary CTA Text
  const secondaryCtaLink = heroData.secondaryCtaLink || "#"; // Secondary CTA button Link
  const upperIconUrl = heroData.upperIconUrl || "/motion-logo.png"; // Comparison Image Icons
  // Always use correct case for Notion logo
  let lowerIconUrl = heroData.lowerIconUrl || "/notion-logo.png";

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <nav className={styles.breadcrumbs}>
          <a href="#">All Blogs</a> <span>›</span> <a href="#" className={styles.active}>{heading}</a>
        </nav>
        <h1 className={styles.title}>{heading}</h1>
        <div className={styles.heroBody}>
          {bodyLines.map((line, idx) => (
            <p key={idx} className={idx === 0 ? styles.subtitle : styles.desc}>{line}</p>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <a className={styles.getMotion} href={secondaryCtaLink}>{secondaryCtaText}</a>
          <a className={styles.getNotion} href={primaryCtaLink}>{primaryCtaText}</a>
        </div>
        {/* Meta row can be made editable if needed */}
        <div className={styles.metaRow}>
          <span>Thursday 19 June 2025</span>
          <span>•</span>
          <span>9 Minute Read</span>
        </div>
        <div className={styles.socialRow}>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaLink /></a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.heroImgWrap}>
          <div className={styles.compareBox}>
            <div className={`${styles.circle} ${styles.circleTopLeft}`}>
              <Image src={upperIconUrl} alt="Upper Card Icon" width={64} height={64} />
            </div>
            <div className={`${styles.circle} ${styles.circleBottomRight}`}>
              <Image src={lowerIconUrl} alt="Lower Card Icon" width={64} height={64} />
            </div>
            <div className={styles.diagonal}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
