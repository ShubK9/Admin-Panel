"use client";
import { useState } from "react";
import styles from "../style/AdminSidebar.module.css";

export default function ComparisonSidebarAdmin({ initialData = {}, onSave }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [benefits, setBenefits] = useState(initialData.benefits || ["", "", "", "", ""]);

  const handleBenefitChange = (idx, value) => {
    const updated = [...benefits];
    updated[idx] = value;
    setBenefits(updated);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, ""]);
  };

  const handleSave = () => {
    if (onSave) onSave({ title, benefits });
  };

  return (
    <div className={styles.adminSidebarCard}>
      <div className={styles.adminSidebarHeaderRow}>
        <span className={styles.adminSidebarHeaderTitle}>Join DealYouNeed Today!</span>
        <button className={styles.adminSidebarAddBtn} onClick={handleAddBenefit}>Add More Benefits +</button>
      </div>
      <div className={styles.adminSidebarFieldLabel}>Title</div>
      <input
        className={styles.adminSidebarInput}
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      {benefits.map((b, i) => (
        <div key={i}>
          <div className={styles.adminSidebarFieldLabel}>{`Benefit ${i + 1}`}</div>
          <input
            className={styles.adminSidebarInput}
            value={b}
            onChange={e => handleBenefitChange(i, e.target.value)}
            placeholder="Benefit"
          />
        </div>
      ))}
      <button className={styles.adminSidebarSaveBtn} onClick={handleSave}>Save</button>
    </div>
  );
}
