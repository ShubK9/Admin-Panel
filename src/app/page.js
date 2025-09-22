import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";

import ComparisonSection from "./components/ComparisonSection";
import ToolsMentioned from "./components/ToolsMentioned";
import FAQSection from "./components/FAQSection";
import ToolsFaceOff from "./components/ToolsFaceOff";
import Footer from "./components/Footer";


import styles from "./style/page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
  <HeroSection />
  <ToolsMentioned />
  <ComparisonSection />
  <FAQSection />
  <ToolsFaceOff />
  <Footer />
  {/* ...existing code... */}
    </div>
  );
}
