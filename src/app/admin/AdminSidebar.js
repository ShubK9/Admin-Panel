"use client";
import { useState } from "react";

import Image from "next/image";
import styles from "../style/AdminSidebar.module.css";
import layoutStyles from "../style/AdminLayout.module.css";
import { FaTachometerAlt, FaBoxOpen, FaUsers, FaHandshake, FaSyncAlt, FaCubes, FaGlobe, FaCog, FaQuestionCircle, FaUserShield, FaSun, FaSignOutAlt } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function AdminSidebar({ open, onClose }) {
  const [websiteUpdateOpen, setWebsiteUpdateOpen] = useState(false);
  return (
    <div className={styles.sidebar + (open ? ' ' + styles.sidebarOpen : '')}>
      {/* Close button for mobile only */}
      <button className={styles.sidebarCloseBtn} onClick={onClose} aria-label="Close sidebar">
        <FaTimes />
      </button>
      <div className={styles.logoRow}>
  <Image src="/logo2.png" alt="DealYouNeed Logo" className={styles.logo} width={40} height={40} />
        <span className={styles.logoText}>DealYouNeed</span>
      </div>
      <div className={styles.sectionTitle}>Your Quick Tabs</div>
      <ul className={styles.menuList}>
        <li><FaTachometerAlt /><span>Dashboard</span></li>
        <li><FaBoxOpen /><span>Deals</span></li>
        <li><FaHandshake /><span>Partners</span></li>
        <li><FaUsers /><span>Users</span></li>
        <li><FaSyncAlt /><span>SaaS Swap</span></li>
  <li><FaCubes /><span>Founder&apos;s Choice</span></li>
        <li className={styles.menuExpandable}>
          <div className={styles.menuExpandableHeader} onClick={() => setWebsiteUpdateOpen(v => !v)}>
            <FaGlobe />
            <span>Website Update</span>
            {websiteUpdateOpen ? <FaChevronUp className={styles.chevron} /> : <FaChevronDown className={styles.chevron} />}
          </div>
          {websiteUpdateOpen && (
            <ul className={styles.menuSubList}>
              <li>Home Page Update</li>
              <li>Saas Marketplace Update</li>
              <li className={styles.menuSubActive}>Founder Choice Page Update</li>
              <li>Swap Marketplace Update</li>
            </ul>
          )}
        </li>
      </ul>
      <div className={styles.sectionTitle}>More Tabs</div>
      <ul className={styles.menuList}>
        <li><FaCog /><span>Settings</span></li>
        <li><FaQuestionCircle /><span>Support</span></li>
        <li><FaUserShield /><span>Admin Management</span></li>
        <li className={styles.menuSwitch}><FaSun /><span>Light Mode</span><input type="checkbox" className={styles.switch} defaultChecked /></li>
        <li className={styles.menuLogout}><FaSignOutAlt /><span>Logout</span></li>
      </ul>
      <div className={styles.sidebarOverlay} onClick={onClose}></div>
    </div>
  );
}
