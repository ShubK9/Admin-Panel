"use client";
import { useState } from "react";

import Image from "next/image";
import styles from "../style/HeroSectionAdmin.module.css";
import HeroAdminHeader from "./HeroAdminHeader";

export default function HeroSectionAdmin() {
  const [heading, setHeading] = useState("Motion Vs Notion");
  const [body, setBody] = useState("Which is the best productivity tool for you?\nCompare two of the most popular productivity apps to find which one suits your workflow. From task management to team collaboration, see which tool comes out on top.");
  const [primaryCtaText, setPrimaryCtaText] = useState("Get Notion");
  const [primaryCtaLink, setPrimaryCtaLink] = useState("");
  const [secondaryCtaText, setSecondaryCtaText] = useState("Get Motion");
  const [secondaryCtaLink, setSecondaryCtaLink] = useState("");
  const [upperIcon, setUpperIcon] = useState(null);
  const [lowerIcon, setLowerIcon] = useState(null);
  const [upperIconUrl, setUpperIconUrl] = useState("/motion-logo.png");
  const [lowerIconUrl, setLowerIconUrl] = useState("/notion-logo.png");

  // Handle image upload and preview
  const handleImageChange = (e, setIcon, setIconUrl) => {
    const file = e.target.files[0];
    if (file) {
      setIcon(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSave = () => {
    const heroData = {
      heading,
      body,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink,
      upperIconUrl,
      lowerIconUrl
    };
    localStorage.setItem("heroSectionData", JSON.stringify(heroData));
    alert("Hero section saved! Refresh the main page to see changes.");
  };

  return (
    <div className={styles.adminHeroContainer}>
      <HeroAdminHeader />
      <h2 className={styles.adminHeroTitle}>Blog Hero Section</h2>
      <div className={styles.adminHeroFormGrid}>
        {/* Row 1: Heading & Hero Body */}
        <div className={styles.adminHeroRow}>
          <div className={styles.adminHeroCell}>
            <label className={styles.adminHeroLabel}>Heading
              <input value={heading} onChange={e => setHeading(e.target.value)} placeholder="Hero Heading" className={styles.adminHeroInput} />
            </label>
          </div>
          <div className={styles.adminHeroCell}>
            <label className={styles.adminHeroLabel}>Hero Body
              <input value={body} onChange={e => setBody(e.target.value)} placeholder="Hero Body" className={styles.adminHeroInput} />
            </label>
          </div>
        </div>
        {/* Row 2: Primary CTA Text & Link */}
        <div className={styles.adminHeroRow}>
          <div className={styles.adminHeroCell}>
            <label className={styles.adminHeroLabel}>Primary CTA Button Text
              <input value={primaryCtaText} onChange={e => setPrimaryCtaText(e.target.value)} placeholder="e.g., Get Notion" className={styles.adminHeroInput} />
            </label>
            <div className={styles.adminHeroHint}>The main button for users to proceed with the tool</div>
          </div>
          <div className={styles.adminHeroCell}>
            <label className={styles.adminHeroLabel}>Primary CTA Button Link
              <input value={primaryCtaLink} onChange={e => setPrimaryCtaLink(e.target.value)} placeholder="https://..." className={styles.adminHeroInput} />
            </label>
          </div>
        </div>
        {/* Row 3: Secondary CTA Text & Link */}
        <div className={styles.adminHeroRow}>
          <div className={styles.adminHeroCell}>
            <label className={styles.adminHeroLabel}>Secondary CTA Button Text
              <input value={secondaryCtaText} onChange={e => setSecondaryCtaText(e.target.value)} placeholder="e.g., Get Motion" className={styles.adminHeroInput} />
            </label>
            <div className={styles.adminHeroHint}>The main button for users to proceed with the tool</div>
          </div>
          <div className={styles.adminHeroCell}>
            <label className={styles.adminHeroLabel}>Primary CTA Button Link
              <input value={secondaryCtaLink} onChange={e => setSecondaryCtaLink(e.target.value)} placeholder="https://..." className={styles.adminHeroInput} />
            </label>
          </div>
        </div>
        {/* Row 4: Icon Uploads */}
        <div className={styles.adminHeroRow}>
          <div className={styles.adminHeroCell}>
            <label className={styles.adminHeroLabel}>Comparison Image Icons Update</label>
            <div className={styles.adminHeroUploadBox}>
              <label className={styles.adminHeroUploadBtn}>
                <span className={styles.adminHeroUploadIcon}>⬆️</span> Upload Uper Card Icon
                <input type="file" accept="image/*" onChange={e => handleImageChange(e, setUpperIcon, setUpperIconUrl)} style={{ display: 'none' }} />
              </label>
              {upperIconUrl && (
                <div className={styles.adminHeroUploadPreviewBox}>
                  <Image src={upperIconUrl} alt="Upper Card Icon" className={styles.adminHeroUploadImg} width={64} height={64} />
                </div>
              )}
            </div>
          </div>
          <div className={styles.adminHeroCell}>
            <div className={styles.adminHeroUploadBox}>
              <label className={styles.adminHeroUploadBtn}>
                <span className={styles.adminHeroUploadIcon}>⬆️</span> Upload Lower Card Icon
                <input type="file" accept="image/*" onChange={e => handleImageChange(e, setLowerIcon, setLowerIconUrl)} style={{ display: 'none' }} />
              </label>
              {lowerIconUrl && (
                <div className={styles.adminHeroUploadPreviewBox}>
                  <Image src={lowerIconUrl} alt="Lower Card Icon" className={styles.adminHeroUploadImg} width={64} height={64} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSave} className={styles.adminHeroSaveBtn}>Save</button>
    </div>
  );
}
