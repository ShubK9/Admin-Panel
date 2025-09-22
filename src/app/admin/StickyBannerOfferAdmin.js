
import React, { useState } from 'react';
export default function StickyBannerOfferAdmin() {
	// State for title and benefits
	const [title, setTitle] = useState('Join DealYouNeed Today!');
		// Default: 5 empty benefits
		const [benefits, setBenefits] = useState([
		  '', '', '', '', ''
		]);
		const [inputTitle, setInputTitle] = useState(title);
		const [inputBenefits, setInputBenefits] = useState([...benefits]);

	// Add new benefit
	const handleAddBenefit = () => {
		setInputBenefits([...inputBenefits, 'Benefit']);
	};

	// Update benefit
	const handleBenefitChange = (idx, value) => {
		const updated = [...inputBenefits];
		updated[idx] = value;
		setInputBenefits(updated);
	};

	// Remove benefit
	const handleRemoveBenefit = (idx) => {
		const updated = inputBenefits.filter((_, i) => i !== idx);
		setInputBenefits(updated);
	};

	// Save changes
	const handleSave = () => {
		setTitle(inputTitle);
		setBenefits([...inputBenefits]);
	};

		return (
				<div style={{ padding: '2rem' }}>
					<h2 style={{ fontWeight: 600, fontSize: '1.3rem', marginBottom: '1rem' }}>Sticky Banner Offer Card</h2>
					<div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #0001', padding: '2rem', maxWidth: 900, margin: 'auto' }}>
						{/* Header row with Add More Benefits button and current title */}
						<div style={{ display: 'flex', alignItems: 'center', marginBottom: 32, justifyContent: 'space-between' }}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<span style={{ fontWeight: 500, fontSize: 18, marginRight: 16, color: '#888' }}>⋮⋮</span>
								<span style={{ fontWeight: 500, fontSize: 17, color: '#222' }}>{inputTitle}</span>
							</div>
							<button
								onClick={handleAddBenefit}
								style={{ color: '#2563eb', background: 'none', border: 'none', fontWeight: 500, cursor: 'pointer', fontSize: 15 }}
							>
								Add More Benefits <span style={{ fontSize: 20, marginLeft: 4 }}>+</span>
							</button>
						</div>
						{/* Editable title input below header */}
						<div style={{ marginBottom: 24 }}>
							<h3 style={{ fontWeight: 500, fontSize: 16, marginBottom: 8 }}>Title</h3>
							<input
								type="text"
								value={inputTitle}
								onChange={e => setInputTitle(e.target.value)}
								placeholder="Title"
								style={{ width: '100%', fontSize: 16, padding: '10px 16px', borderRadius: 8, border: '1px solid #eee', background: '#fafbfc' }}
							/>
						</div>
						<div>
							{inputBenefits.map((benefit, idx) => (
								<div key={idx} style={{ marginBottom: 20 }}>
									<div style={{ fontWeight: 500, fontSize: 15, marginBottom: 6 }}>
										Benefit {idx === 0 ? 'One' : idx === 1 ? 'Two' : idx === 2 ? 'Three' : idx === 3 ? 'Four' : idx === 4 ? 'Five' : idx + 1}
									</div>
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<input
											type="text"
											value={benefit}
											onChange={e => handleBenefitChange(idx, e.target.value)}
											placeholder="Benefit"
											style={{ flex: 1, fontSize: 16, padding: '10px 16px', borderRadius: 8, border: '1px solid #eee', background: '#f6f8fa' }}
										/>
										{inputBenefits.length > 1 && (
											<button
												onClick={() => handleRemoveBenefit(idx)}
												style={{ marginLeft: 10, color: '#e11d48', background: 'none', border: 'none', fontWeight: 500, cursor: 'pointer', fontSize: 18 }}
												title="Remove Benefit"
											>
												×
											</button>
										)}
									</div>
								</div>
							))}
						</div>
						<button
							onClick={handleSave}
							style={{ marginTop: 24, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer', boxShadow: '0 1px 4px #0001' }}
						>
							Save
						</button>
					</div>
				</div>
	);
}

