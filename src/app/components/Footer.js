"use client";
import styles from "../style/ComparisonSection.module.css";
import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const deals = [
  "Design Deals",
  "Dev Deals",
  "Marketing Tools",
  "AI Tools",
  "CMS or CRM Tools",
  "Productivity Tools",
  "Project Management",
  "Communication",
  "Business",
  "Others"
];
const solutions = [
  "Startup Founders",
  "Business Owners",
  "Agencies",
  "Freelancers",
  "Entrepreneurs",
  "Student & Instructors"
];
const quickLinks = [
  "Home Page",
  "Software Swap",
  "Founders Choice",
  "SaaS Marketplace",
  "About Us",
  "How It Works",
  "For Partners",
  "Pricing",
  "Blogs",
  "FAQs",
  "Contact Us"
];

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerTop}>
        <div className={styles.footerColLogo}>
          <img src="/logo.png" alt="DealYouNeed Logo" className={styles.footerLogo} />
          <div className={styles.footerDesc}>
            Making software subscriptions<br />more accessible and affordable.
          </div>
          <div className={styles.footerSocials}>
            <a href="#" aria-label="X" title="X"><FaXTwitter size={22} /></a>
            <a href="#" aria-label="Instagram" title="Instagram"><FaInstagram size={22} /></a>
            <a href="#" aria-label="YouTube" title="YouTube"><FaYoutube size={22} /></a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn"><FaLinkedin size={22} /></a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Deals</div>
          <ul className={styles.footerList}>
            {deals.map((d, i) => <li key={i}><a href="#">{d}</a></li>)}
          </ul>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Solutions</div>
          <ul className={styles.footerList}>
            {solutions.map((s, i) => <li key={i}><a href="#">{s}</a></li>)}
          </ul>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerColTitle}>Quick Links</div>
          <ul className={styles.footerList}>
            {quickLinks.map((q, i) => <li key={i}><a href="#">{q}</a></li>)}
          </ul>
        </div>
        <div className={styles.footerColNewsletter}>
          <div className={styles.footerColTitle}>Newsletter</div>
          <div className={styles.footerNewsletterDesc}>Stay updated with latest SaaS deals & offers.</div>
          <form className={styles.footerNewsletterForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="you@example.com" className={styles.footerNewsletterInput} />
            <button className={styles.footerNewsletterBtn}>Subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          Design With Love <span className={styles.footerHeart}>❤</span> For Startup Enthusiast.
        </div>
        <div className={styles.footerBottomCenter}>
          © 2025 DealYouNeed. All Rights Reserved.
        </div>
        <div className={styles.footerBottomRight}>
          <a href="#">Terms of Service <span className={styles.footerArrow}>↗</span></a>
          <a href="#">Privacy Policy <span className={styles.footerArrow}>↗</span></a>
        </div>
      </div>
    </footer>
  );
}
