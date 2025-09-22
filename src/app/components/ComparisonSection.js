"use client";
import { useState } from "react";

import Image from "next/image";
import styles from "../style/ComparisonSection.module.css";

const menuOptions = [
  { key: "intro", label: "Introduction", icon: "💡" },
  { key: "which", label: "Which Is Better", icon: "⚡" },
  { key: "main", label: "Main Differences", icon: "⭐" },
  { key: "summary", label: "Comparison Summary", icon: "🗂️" },
  { key: "features", label: "Features Differentiation", icon: "⚡" },
  { key: "ui", label: "User Interface ( UI )", icon: "🖥️" },
  { key: "ux", label: "User Experience ( UX )", icon: "📱" },
  { key: "who", label: "Who is Framer for?", icon: "✅" },
  { key: "shouldnt", label: "Shouldn't use Framer", icon: "❌" },
  { key: "design", label: "Design Experience", icon: "🎨" },
  { key: "plugins", label: "Plugins", icon: "🔌" },
  { key: "final", label: "Final Thought", icon: "💬" }
];

const contentMap = {
  intro: {
    title: "Introduction",
    bullets: [
      "Welcome to the Framer vs Webflow comparison.",
      "Learn which tool fits your workflow best.",
      "Get insights on features, UI, UX, and more."
    ],
    image: "/main-diffrences.png"
  },
  which: {
    title: "Which Is Better",
    bullets: [
      "If you're exploring Framer vs Brave, you're probably more of a privacy-focused individual that is using one or many Apple devices (MacOS as your operating systems).",
      "With both of these web browsers, you're going to get security at the forefront.",
      "After reading this article, you will know exactly which browser better suits your needs!"
    ],
    image: "/banner.png",
    deal: {
      tool: "Notion",
      subtitle: "Productivity Tool",
      desc: "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      saveLabel: "Money Save Up to",
      saveValue: "$4,494/Year",
      logo: "/Notion-Logo.png",
      verified: true,
      dealTitle: "Boost Your Content Output by 10x!",
      cashback: "15% CASHBACK",
      saved: "47 People Saved This Deal",
      dealDesc: "Unlock Jasper AI with an exclusive discount and cashback only on DealYouNeed. Stop writing, start generating! This deal gives you access to all premium features at a fraction of the regular price.",
      btn: "Redeem Framer Deal"
    }
  },
  ui: {
    title: "User Interface ( UI )",
    bullets: [
      "Framer's user interface is modern, clean, and highly intuitive, making it easy for users to navigate and access all features.",
      "The layout is designed to minimize clutter, with well-organized panels and toolbars that enhance productivity.",
      "Customizable workspaces and responsive design ensure a seamless experience across different devices."
    ],
    image: "/feature-diff.png"
  },
  summary: {
    title: "Comparison Summary",
    bullets: [
      "This is the default browser that comes with mac devices, and has existed for over a decade.",
      "With Safari, you're not going to get anything too cutting-edge or innovative, because they, like Google Chrome are focused on stability for their 1+ billion users.",
      "For a further breakdown in understanding the negatives that come with browsers that have hit major scale, refer to our Chrome vs Safari comparison."
    ],
    image: "/banner.png"
  },
  features: {
    title: "Feature Differentiation",
    bullets: [
      "Since Apple is a hardware company at the end of the day, the whole point of Safari is that you're going to get a great cohesive experience if you're using all Apple products (Mac + iPad + iPhone).",
      "The largest benefit to be had here, in our eyes, comes from Apple owning both the hardware and software layers. This allows them to go above and beyond with optimizations like battery life and cross-device syncing.",
      "We don’t really see much major innovation or differentiation coming to Safari though. Why? Because this isn’t Apple’s core business. Not only that, but Apple has zero interest in going after the B2B and collaborative browser space. When comparing Arc Browser vs Safari, you’ll see first-hand that Arc has a lot more going on in the features and differentiation space as they ultimately want to be the browser for teams and collaboration."
    ],
    quote: {
      text: "Your AI everything app.",
      author: "Forbes"
    },
    subheading: "One space for every team.",
    image: "/features.png"
  },
  main: {
    title: "Main Differences",
    bullets: [
      "Safari only works on Apple devices (so if you're using many different operating systems, Brave is going to be your only option).",
      "Looking at the foundation, Safari was built atop Webkit, whereas Brave was built atop the Chromium engine, which is the same engine that most of the top browsers on the market also use (e.g. Arc, Chrome, Opera, and many others). This makes switching between these browsers incredibly easy, as passwords and bookmarks are all structured the same."
    ],
    image: "/main-diffrences.png",
    deal: {
      tool: "Motion",
      subtitle: "Productivity Tool",
      desc: "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      saveLabel: "Money Save Up to",
      saveValue: "$4,494/Year",
      logo: "/motion-logo.png",
      verified: true,
      dealTitle: "Boost Your Content Output by 10x!",
      cashback: "15% CASHBACK",
      saved: "47 People Saved This Deal",
      dealDesc: "Unlock Jasper AI with an exclusive discount and cashback only on DealYouNeed. Stop writing, start generating! This deal gives you access to all premium features at a fraction of the regular price.",
      btn: "Redeem Framer Deal"
    }
  },
  ux: {
    title: "User Experience ( UX )",
    bullets: [
      "Framer's user experience is designed for speed and intuitiveness, making it easy for both beginners and professionals to get started.",
      "The interface is clean and minimal, reducing distractions and allowing users to focus on their creative process.",
      "Real-time collaboration and instant preview features enhance the workflow, making it a top choice for teams."
    ],
    image: "/banner.png"
  },
  who: {
    title: "Who is Framer for?",
    bullets: [
      "Framer is ideal for designers who want to quickly prototype and iterate on ideas.",
      "It's also great for teams that value collaboration and need to share interactive prototypes with stakeholders.",
      "Developers who want to bridge the gap between design and code will also find Framer useful."
    ],
    image: "/features.png"
  },
  shouldnt: {
    title: "Shouldn't use Framer",
    bullets: [
      "If you require highly complex backend integrations, Framer may not be the best fit.",
      "Those looking for a traditional CMS or e-commerce platform might find Framer's features limited.",
      "Users who prefer a code-only workflow may find the visual interface unnecessary."
    ],
    image: "/main-diffrences.png"
  },
  design: {
    title: "Design Experience",
    bullets: [
      "Framer offers a modern design environment with powerful vector editing tools.",
      "Its component-based approach allows for reusable and scalable design systems.",
      "Animations and interactions can be created visually, without writing code."
    ],
    image: "/features.png"
  },
  plugins: {
    title: "Plugins",
    bullets: [
      "Framer supports a growing ecosystem of plugins to extend its core functionality.",
      "Popular plugins include integrations for analytics, user testing, and design assets.",
      "Installing and managing plugins is straightforward within the Framer interface."
    ],
    image: "/banner.png"
  },
  final: {
    title: "Final Thought",
    bullets: [
      "Brave often connects most with heavily privacy-focused individuals, for whom are typically more in the crypto space. For example, at Consensus 2023, most people I talked to were using, or at least familiar with Brave.",
      "A asked them what they liked most about it, and their responses were almost entirely around the privacy aspect. For example, 'they don't even know what I'm bookmarking—my account is tied to a hashed key, so I can anonymously save my environment, and re-access it with my unique token—no email address/identification required.'",
      "And look, I get it, it's impressive to how they are leveraging the blockchain to store some of this information without tying it to identity, but personally for me, I'll take the benefits that come with using a traditional database and user account, like most other modern browsers like Arc and Chrome rely on for storing and syncing your data between devices.",
      "If you think privacy is important enough to not want to use Chrome though, there are genuinely other privacy-focused alternatives (in that they aren't trying to sell your data unlike Google with Chrome is), like Arc Browser. If you're on MacOS (Windows coming soon), definitely recommend giving that a shot.",
      "If you're considering Brave, I genuinely think you already know yourself. But if you're not quite obsessed with privacy, to the level of at times potentially inconveniencing yourself (e.g. you forget your unique hash/key, you lose your history and settings—there's no 'forgot password' per-say)."
    ],
    image: "/main-diffrences.png"
  }
};

export default function ComparisonSection() {
  const [selected, setSelected] = useState(menuOptions[0].key);

  return (
    <div className={styles.comparisonSection}>
      <div className={styles.leftContent}>
        <div className={styles.leftBox}>
          <div className={styles.leftBoxTitle}>{contentMap[selected]?.title || ''}</div>
          <ul className={styles.leftBoxList}>
            {contentMap[selected]?.bullets?.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className={styles.leftBoxImageWrap}>
            <Image src={contentMap[selected]?.image || ''} alt="section visual" className={styles.leftBoxImage} width={80} height={80} />
          </div>
        </div>
        {contentMap[selected]?.deal && (
          <div className={styles.dealBox}>
            <div className={styles.dealBoxLeft}>
              <div className={styles.dealToolCard}>
                <div className={styles.dealToolHeader}>
                  <Image src={contentMap[selected].deal.logo} alt={contentMap[selected].deal.tool} className={styles.dealToolLogo} width={40} height={40} />
                  <div>
                    <div className={styles.dealToolNameRow}>
                      <span className={styles.dealToolName}>{contentMap[selected].deal.tool}</span>
                      {contentMap[selected].deal.verified && <span className={styles.dealToolVerified}>✔️</span>}
                    </div>
                    <div className={styles.dealToolSubtitle}>{contentMap[selected].deal.subtitle}</div>
                  </div>
                </div>
                <div className={styles.dealToolDesc}>{contentMap[selected].deal.desc}</div>
                <div className={styles.dealToolSaveRow}>
                  <span className={styles.dealToolSaveLabel}>{contentMap[selected].deal.saveLabel}</span>
                  <span className={styles.dealToolSaveValue}>{contentMap[selected].deal.saveValue}</span>
                </div>
              </div>
            </div>
            <div className={styles.dealBoxRight}>
              <div className={styles.dealBoxTitle}>{contentMap[selected].deal.dealTitle}</div>
              <div className={styles.dealBoxBadges}>
                <span className={styles.dealBoxCashback}>{contentMap[selected].deal.cashback}</span>
                <span className={styles.dealBoxSaved}><span role="img" aria-label="saved">🎉</span> {contentMap[selected].deal.saved}</span>
              </div>
              <div className={styles.dealBoxDesc}>{contentMap[selected].deal.dealDesc}</div>
              <button className={styles.dealBoxBtn}>{contentMap[selected].deal.btn}</button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.rightSidebar}>
        <form className={styles.sidebarForm}>
          <h3>Join DealYouNeed Today!</h3>  
          <ul className={styles.benefitsList}>
            <li>Premium Deals (40-90% OFF)</li> 
            <li>5-15% Cashback on all deals</li> 
            <li>10 Swaps/Month</li> 
            <li>Up to $50K Financing</li> 
            <li>24/7 Live Chat Support</li> 
          </ul>
          <button className={styles.getStartedBtn}>Get Started</button>
        </form>
        <div className={styles.menuBarVertical}>
          <div className={styles.menuBarTitle}>Framer vs Webflow</div>
          <ul className={styles.menuList}>
            {menuOptions.map(opt => (
              <li key={opt.key} className={styles.menuListItem}>
                <label className={styles.menuLabel}>
                  <input
                    type="radio"
                    name="menuOption"
                    checked={selected === opt.key}
                    onChange={() => setSelected(opt.key)}
                    className={styles.menuRadio}
                  />
                  <span className={styles.menuLabelText}>{opt.label}</span>
                  <span className={styles.menuIcon}>{opt.icon}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
