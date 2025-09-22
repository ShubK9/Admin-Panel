"use client";
import { useState } from "react";
import styles from "../style/ToolsMentionedAdmin.module.css";

const defaultTools = [
	{
		name: "Motion",
		subtitle: "No Code Tool",
		logo: "/motion-logo.png",
		verified: true,
	},
	{
		name: "Notion",
		subtitle: "Productive Tool",
		logo: "/notion-logo.png",
		verified: true,
	},
];

export default function ToolsMentionedAdmin() {
	const [sectionHeadline, setSectionHeadline] = useState("");
	const [tipBulbText, setTipBulbText] = useState("");
	const [tools, setTools] = useState(defaultTools);
	const [search, setSearch] = useState("");

	// Add, remove, reorder, and search logic would go here

	return (
		<div className={styles.adminContainer}>
			<h2 className={styles.title}>Tools Mentioned</h2>
			<div className={styles.inputRow}>
				<div className={styles.inputCol}>
					<label className={styles.inputLabel}>Section Headline</label>
					<input
						className={styles.inputField}
						value={sectionHeadline}
						onChange={(e) => setSectionHeadline(e.target.value)}
						placeholder="e.g. Essential Productive Tools To Enhance Your Workflow"
					/>
				</div>
				<div className={styles.inputCol}>
					<label className={styles.inputLabel}>Tip Bulb Text</label>
					<input
						className={styles.inputField}
						value={tipBulbText}
						onChange={(e) => setTipBulbText(e.target.value)}
						placeholder="Tools with exclusive discounts & cashbacks"
					/>
				</div>
			</div>
			<div className={styles.searchRow}>
				<input
					className={styles.searchInput}
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search & Add Deals"
				/>
			</div>
			<div className={styles.toolsListRow}>
				<div className={styles.toolsList}>
					{tools.map((tool, idx) => (
						<div className={styles.toolCard} key={idx}>
							<span className={styles.dragHandle}>⋮⋮</span>
							<img src={tool.logo} alt={tool.name} className={styles.logo} />
							<div className={styles.toolInfo}>
								<span className={styles.toolName}>
									{tool.name}{" "}
									{tool.verified && (
										<span className={styles.verified}>✔️</span>
									)}
								</span>
								<span className={styles.toolSubtitle}>{tool.subtitle}</span>
							</div>
							<button
								className={styles.removeBtn}
								title="Remove"
							>
								✕
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
