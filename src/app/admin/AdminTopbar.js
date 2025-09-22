"use client";
import styles from "../style/AdminTopbar.module.css";
import { FaBell, FaQuestionCircle, FaBars } from "react-icons/fa";

export default function AdminTopbar({ onOpenSidebar }) {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        {/* Hamburger icon for mobile */}
        <button
          className={styles.sidebarHamburger}
          onClick={onOpenSidebar}
          aria-label="Open sidebar"
        >
          <FaBars />
        </button>
        <span className={styles.greeting + " " + styles.hideOnMobile}>
          Good Morning!{" "}
          <span className={styles.wave}>👋</span>
        </span>
      </div>
      {/* Mobile layout: hamburger left, search center, profile right */}
      <div className={styles.centerMobile}>
        <div className={styles.searchWrap + " " + styles.showOnMobile}>
          <input className={styles.searchInput} placeholder="Search" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.searchWrap + " " + styles.hideOnMobile}>
          <input className={styles.searchInput} placeholder="Search" />
        </div>
        <button className={styles.iconBtn + " " + styles.hideOnMobile}>
          <FaBell />
        </button>
        <button className={styles.iconBtn + " " + styles.hideOnMobile}>
          <FaQuestionCircle />
        </button>
        <div className={styles.profileWrap + " " + styles.showOnMobile}>
          <img
            src="/Notion-Logo.png"
            alt="Admin Avatar"
            className={styles.avatar}
          />
          <span className={styles.profileName}>Admin</span>
          <span className={styles.profileArrow}>▼</span>
        </div>
        <div className={styles.profileWrap + " " + styles.hideOnMobile}>
          <img
            src="/Notion-Logo.png"
            alt="Admin Avatar"
            className={styles.avatar}
          />
          <span className={styles.profileName}>Admin</span>
          <span className={styles.profileArrow}>▼</span>
        </div>
      </div>
    </div>
  );
}
