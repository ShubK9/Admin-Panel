import styles from "../style/HeroSectionAdmin.module.css";
import { FaArrowLeft } from "react-icons/fa";

export default function HeroAdminHeader({ type = "comparison", onBack }) {
  return (
    <div className={styles.heroAdminHeader}>
      <button className={styles.heroAdminBackBtn} onClick={onBack}>
        <FaArrowLeft />
      </button>
      <span className={styles.heroAdminHeaderTitle}>Create New Tools Comparison Blog</span>
      <div className={styles.heroAdminTypeSwitch}>
        <button className={type === "comparison" ? styles.heroAdminTypeActive : styles.heroAdminTypeBtn}>
          Comparison Blog
        </button>
        <button className={type === "normal" ? styles.heroAdminTypeActive : styles.heroAdminTypeBtn}>
          Normal Blog
        </button>
      </div>
    </div>
  );
}
