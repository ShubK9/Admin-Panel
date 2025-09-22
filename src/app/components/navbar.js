"use client";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import styles from "../style/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [saasOpen, setSaasOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  // Close dropdowns on mobile menu close
  const handleHamburger = () => {
    setMenuOpen((open) => {
      if (open) {
        setSaasOpen(false);
        setMoreOpen(false);
      }
      return !open;
    });
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoLeft}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="DealYouNeed Logo" className={styles.logoImg} width={40} height={40} />
        </Link>
      </div>
      <div className={styles.menuCenter}>
        <ul className={menuOpen ? styles.menuMobileOpen : styles.menu}>
          <li>
            <Link href="/" className={styles.active}>Home</Link>
          </li>
          <li
            className={styles.dropdown}
            onMouseEnter={() => setSaasOpen(true)}
            onMouseLeave={() => setSaasOpen(false)}
            onClick={() => setSaasOpen((open) => !open)}
            tabIndex={0}
          >
            <span>SaaS Marketplace</span>
            <span className={styles.arrow}>▼</span>
            {saasOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/saas/category1">Category 1</Link></li>
                <li><Link href="/saas/category2">Category 2</Link></li>
                <li><Link href="/saas/category3">Category 3</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/swap-marketplace">Swap Marketplace</Link>
          </li>
          <li
            className={styles.dropdown}
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
            onClick={() => setMoreOpen((open) => !open)}
            tabIndex={0}
          >
            <span>More</span>
            <span className={styles.arrow}>▼</span>
            {moreOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          {/* Show these links at the bottom of the mobile menu */}
          {menuOpen && (
            <li className={styles.mobileOnly} style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link href="/admin/pages" className={styles.login}>Admin Panel</Link>
              <Link href="/signup" className={styles.joinBtn}>Join For Free</Link>
            </li>
          )}
          </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.desktopOnly}>
          <Link href="/admin/pages" className={styles.login}>Admin Panel</Link>
          <Link href="/signup" className={styles.joinBtn}>Join For Free</Link>
        </div>
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={handleHamburger}
        >
          {menuOpen ? (
            <span className={styles.closeIcon}>&#10005;</span> // X icon
          ) : (
            <>
              <span className={styles.hamburgerBar}></span>
              <span className={styles.hamburgerBar}></span>
              <span className={styles.hamburgerBar}></span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
}