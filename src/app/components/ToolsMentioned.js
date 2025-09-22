
import Image from "next/image";
import styles from "../style/ToolsMentioned.module.css";

export default function ToolsMentioned({ data }) {
  // fallback demo data if none provided
  const sectionHeadline = data?.sectionHeadline || "Essential Productive Tools To Enhance Your Workflow";
  const tipBulbText = data?.tipBulbText || "Tools with exclusive discounts & cashbacks";
  const tools = data?.tools || [
    {
      name: "Motion",
      subtitle: "No Code Tool",
      cashback: "24% CASHBACK",
      redeem: "Redeem",
      details: "View Details",
      price: "$4,494/Year",
      priceLabel: "Money Save Up to",
      logo: "/motion-logo.png",
      verified: true
    },
    {
      name: "Notion",
      subtitle: "Productive Tool",
      cashback: "24% CASHBACK",
      redeem: "Redeem",
      details: "View Details",
      price: "$4,494/Year",
      priceLabel: "Money Save Up to",
  logo: "/Notion-Logo.png",
      verified: true
    }
  ];

  return (
    <section className={styles.toolsMentionedSection}>
      <div className={styles.toolsMentionedHeader}>
        <span className={styles.toolsMentionedTitle}>Tools Mentioned</span>
        <span className={styles.toolsMentionedDivider}>|</span>
        <span className={styles.toolsMentionedHeadline}>{sectionHeadline}</span>
        <span className={styles.toolsMentionedTip}><span role="img" aria-label="bulb">💡</span> {tipBulbText}</span>
      </div>
      <div className={styles.toolsMentionedCards}>
        {tools.map((tool, idx) => (
          <div className={styles.toolCard} key={idx}>
            <div className={styles.toolCardMain}>
              <div className={styles.toolCardRow1}>
                <div className={styles.toolLogoNameRow}>
                  <Image src={tool.logo} alt={tool.name} className={styles.toolLogo} width={40} height={40} />
                  <div className={styles.toolNameSubtitleCol}>
                    <div className={styles.toolName}>
                      {tool.name} {tool.verified && <span className={styles.verified}>✔️</span>}
                    </div>
                    <div className={styles.toolSubtitle}>{tool.subtitle}</div>
                  </div>
                </div>
                <div className={styles.toolCardRow1Right}>
                  <div className={styles.cashback}>{tool.cashback}</div>
                  <button className={styles.redeemBtn}>{tool.redeem}</button>
                </div>
              </div>
              <div className={styles.toolCardRow2}>
                <div>
                  <div className={styles.priceLabel}>{tool.priceLabel}</div>
                </div>
                <div className={styles.toolCardRow2Right}>
                  <div className={styles.price}>{tool.price}</div>
                  <button className={styles.detailsBtn}>{tool.details}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
