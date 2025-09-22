import React, { useState } from 'react';

import Image from "next/image";
import styles from '../style/ToolsFaceOffAdmin.module.css';

const defaultComparisons = [
  {
    left: {
      logo: '/motion-logo.png',
      name: 'Framer',
      subtitle: 'No-Code Dev Tool',
    },
    right: {
      logo: '/notion-logo.png',
      name: 'Webflow',
      subtitle: 'No-Code Dev Tool',
    },
    title: 'Framer Vs Webflow',
    badge: 'Battle of Best No-Code Dev Tool',
    desc: 'Collaborative power vs. desktop dominance. Which one fits your workflow?',
    btn: 'View Full Comparasion',
    btnColor: 'black',
  },
  {
    left: {
      logo: '/motion-logo.png',
      name: 'Slack',
      subtitle: 'Communication',
    },
    right: {
      logo: '/notion-logo.png',
      name: 'Google Chat',
      subtitle: 'Communication',
    },
    title: 'Slack Vs Google Chat',
    badge: 'Battle of Best Communication Tool',
    desc: 'Collaborative power vs. desktop dominance. Which one fits your workflow?',
    btn: 'View Full Comparasion',
    btnColor: '#2563eb',
  },
  {
    left: {
      logo: '/motion-logo.png',
      name: 'Gemini',
      subtitle: 'AI Tool',
    },
    right: {
      logo: '/notion-logo.png',
      name: 'Chat-GPT',
      subtitle: 'AI Tool',
    },
    title: 'Gemini Vs Chat-GPT',
    badge: 'Battle of Best AI Tool',
    desc: 'Collaborative power vs. desktop dominance. Which one fits your workflow?',
    btn: 'View Full Comparasion',
    btnColor: '#2563eb',
  },
];

function ToolsFaceOffAdmin() {
  const [sectionTitle, setSectionTitle] = useState('');
  const [comparisons, setComparisons] = useState(defaultComparisons);
  const [search, setSearch] = useState('');
  const [preview, setPreview] = useState(false);

  // Save and publish handlers
  const handleSave = () => {
    alert('Changes saved! (Demo)');
  };
  const handlePublish = () => {
    alert('Published! (Demo)');
  };

  // Filtered comparisons
  const filteredComparisons = search
    ? comparisons.filter(c => c.title.toLowerCase().includes(search.toLowerCase()))
    : comparisons;

  if (preview) {
    // Full page preview
    return (
      <div className={styles.previewPage}>
        <h2 className={styles.sectionTitle}>{sectionTitle || 'More Comparison Tools Blog'}</h2>
        <div className={styles.comparisonGrid}>
          {comparisons.map((c, idx) => (
            <div className={styles.comparisonCard} key={idx}>
              <div className={styles.cardLogos}>
                <Image src={c.left.logo} alt={c.left.name} className={styles.logoImg} width={40} height={40} />
                <span className={styles.vsCircle}>vs</span>
                <Image src={c.right.logo} alt={c.right.name} className={styles.logoImg} width={40} height={40} />
              </div>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardBadge}>• {c.badge}</div>
              <div className={styles.cardDesc}>{c.desc}</div>
              <button className={styles.cardBtn} style={{ background: c.btnColor, color: c.btnColor === 'black' ? '#fff' : '#fff' }}>{c.btn}</button>
            </div>
          ))}
        </div>
        <button className={styles.saveBtn} onClick={() => setPreview(false)} style={{ marginTop: 32 }}>Back to Edit</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>More Comparison Tools Blog</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
        <input
          className={styles.input}
          type="text"
          placeholder="Section Title"
          value={sectionTitle}
          onChange={e => setSectionTitle(e.target.value)}
          style={{ flex: 1 }}
        />
        <span style={{ color: '#e11d48', fontWeight: 500, cursor: 'pointer', fontSize: 15, marginRight: 8 }}>
          Remove or Delete Section
        </span>
        <button className={styles.deleteSectionBtn} title="Delete Section">🗑️</button>
      </div>
      <div className={styles.searchBar}>
        <span style={{ color: '#bdbdbd', fontSize: 18, marginRight: 8 }}>🔍</span>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Deals"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.comparisonGrid}>
        {filteredComparisons.map((c, idx) => (
          <div className={styles.comparisonCard} key={idx}>
            <div className={styles.cardLogos}>
              <Image src={c.left.logo} alt={c.left.name} className={styles.logoImg} width={40} height={40} />
              <span className={styles.vsCircle}>vs</span>
              <Image src={c.right.logo} alt={c.right.name} className={styles.logoImg} width={40} height={40} />
            </div>
            <div className={styles.cardTitle}>{c.title}</div>
            <div className={styles.cardBadge}>• {c.badge}</div>
            <div className={styles.cardDesc}>{c.desc}</div>
            <button className={styles.cardBtn} style={{ background: c.btnColor, color: c.btnColor === 'black' ? '#fff' : '#fff' }}>{c.btn}</button>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
        <button className={styles.saveBtn} onClick={() => setPreview(true)} style={{ flex: 1 }}>Save & Preview</button>
        <button className={styles.publishBtn} onClick={handlePublish} style={{ flex: 2 }}>Publish Comparison Blog</button>
      </div>
    </div>
  );
}

export default ToolsFaceOffAdmin;
