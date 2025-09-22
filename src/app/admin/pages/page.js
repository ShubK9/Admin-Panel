"use client";
import { useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar";
import AdminTopbar from "../AdminTopbar";
import HeroSectionAdmin from "../HeroSectionAdmin";
import ToolsMentionedAdmin from "../ToolsMentionedAdmin";
import layoutStyles from "../../style/AdminLayout.module.css";
import StickyBannerOfferAdmin from "../StickyBannerOfferAdmin";
import MenubarVerticalAdmin from "../MenubarVerticalAdmin";
import ToolsFaceOff from "../ToolsFaceOffAdmin";

export default function AdminPage() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 900);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleToggleSidebar = () => setSidebarOpen((open) => !open);
	const handleCloseSidebar = () => setSidebarOpen(false);

	return (
		<div className={layoutStyles["admin-layout"]} style={{ background: "#fff" }}>
			{/* Hide left section on mobile */}
			{!isMobile && (
				<div className={layoutStyles["admin-main-left"]}>
					<AdminSidebar open={sidebarOpen} onClose={handleCloseSidebar} />
				</div>
			)}
			<div className={layoutStyles["admin-sidebar-right"]}>
				<AdminTopbar onOpenSidebar={handleToggleSidebar} />
				{/* Show sidebar as overlay in topbar on mobile */}
				{isMobile && sidebarOpen && (
					<AdminSidebar open={sidebarOpen} onClose={handleCloseSidebar} />
				)}
				<HeroSectionAdmin />
				<ToolsMentionedAdmin />
				<StickyBannerOfferAdmin />
				<MenubarVerticalAdmin />
				<ToolsFaceOff />
			</div>
		</div>
	);
}
