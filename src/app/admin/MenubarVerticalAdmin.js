import React, { useState } from 'react';
import styles from '../style/MenubarVerticalAdmin.module.css';

const defaultStacks = [
  { name: 'Slack', category: 'Communication', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png' },
  { name: 'Notion', category: 'Productivity', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968885.png' },
  { name: 'Figma', category: 'Design', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
  { name: 'Jira', category: 'Project Management', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968872.png' },
];

function MenubarVerticalAdmin() {
  const [sections, setSections] = useState([
    {
      title: '',
      body: '',
      search: '',
      selectedStacks: [defaultStacks[0]],
      image: null,
      imageName: '',
      imageSize: '',
      imageUrl: '',
    },
  ]);

  // Add new section
  const handleAddSection = () => {
    setSections([
      ...sections,
      {
        title: '',
        body: '',
        search: '',
        selectedStacks: [defaultStacks[0]],
        image: null,
        imageName: '',
        imageSize: '',
        imageUrl: '',
      },
    ]);
  };

  // Remove section
  const handleRemoveSection = (idx) => {
    setSections(sections.filter((_, i) => i !== idx));
  };

  // Update section field
  const handleSectionChange = (idx, field, value) => {
    const updated = [...sections];
    updated[idx][field] = value;
    setSections(updated);
  };

  // Handle stack search and selection
  const handleStackSearch = (idx, value) => {
    handleSectionChange(idx, 'search', value);
  };
  const handleSelectStack = (idx, stack) => {
    const updated = [...sections];
    if (!updated[idx].selectedStacks.some(s => s.name === stack.name)) {
      updated[idx].selectedStacks.push(stack);
      setSections(updated);
    }
  };
  const handleRemoveStack = (idx, stackName) => {
    const updated = [...sections];
    updated[idx].selectedStacks = updated[idx].selectedStacks.filter(s => s.name !== stackName);
    setSections(updated);
  };

  // Handle image upload
  const handleImageUpload = (idx, file) => {
    const reader = new FileReader();
    reader.onload = e => {
      const updated = [...sections];
      updated[idx].image = file;
      updated[idx].imageName = file.name;
      updated[idx].imageSize = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
      updated[idx].imageUrl = e.target.result;
      setSections(updated);
    };
    reader.readAsDataURL(file);
  };
  const handleRemoveImage = (idx) => {
    const updated = [...sections];
    updated[idx].image = null;
    updated[idx].imageName = '';
    updated[idx].imageSize = '';
    updated[idx].imageUrl = '';
    setSections(updated);
  };

  // Save handler (simulate real-time update)
  const handleSave = () => {
    // Here you would send data to backend or update global state
    alert('Changes saved! (Demo)');
  };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2 style={{ fontWeight: 600, fontSize: '1.3rem' }}>Tool Blog Cards</h2>
        <button className={styles.addSectionBtn} onClick={handleAddSection}>
          Add More Tool Blog Card <span style={{ fontSize: 20, marginLeft: 4 }}>+</span>
        </button>
      </div>
      {sections.map((section, idx) => (
        <div className={styles.sectionBox} key={idx}>
          <div className={styles.headerRow}>
            <span style={{ fontWeight: 600, fontSize: '1.1rem', marginRight: 16 }}>Blog Section {idx + 1}</span>
            <button className={styles.deleteSectionBtn} onClick={() => handleRemoveSection(idx)} title="Delete Section">🗑️</button>
          </div>
          <div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>Blog Title</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Blog Heading"
                value={section.title}
                onChange={e => handleSectionChange(idx, 'title', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>Blog Body Text Editor</label>
              <textarea
                className={styles.textarea}
                placeholder="Blog Body Message"
                value={section.body}
                onChange={e => handleSectionChange(idx, 'body', e.target.value)}
              />
            </div>
            <div className={styles.searchBar}>
              <span style={{ color: '#bdbdbd', fontSize: 18, marginRight: 8 }}>🔍</span>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search & Add Deal Mentioned in this blog"
                value={section.search}
                onChange={e => handleStackSearch(idx, e.target.value)}
              />
            </div>
            {/* Stack list (pre-recorded, filtered by search) */}
            <div className={styles.stackList}>
              {defaultStacks
                .filter(stack =>
                  !section.search || stack.name.toLowerCase().includes(section.search.toLowerCase())
                )
                .map(stack => (
                  <div
                    key={stack.name}
                    className={styles.stackItem}
                    style={{ border: section.selectedStacks.some(s => s.name === stack.name) ? '1px solid #2563eb' : '1px solid #eee', cursor: 'pointer' }}
                    onClick={() => handleSelectStack(idx, stack)}
                  >
                    <img src={stack.icon} alt={stack.name} style={{ width: 22, height: 22, borderRadius: 4 }} />
                    <span>{stack.name}</span>
                    <span style={{ fontSize: 12, color: '#888' }}>{stack.category}</span>
                    {section.selectedStacks.some(s => s.name === stack.name) && (
                      <button
                        className={styles.removeBtn}
                        onClick={e => { e.stopPropagation(); handleRemoveStack(idx, stack.name); }}
                        title="Remove Stack"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
            </div>
            {/* Uploaded image */}
            <div className={styles.imageUpload}>
              <div style={{ marginBottom: 8, fontWeight: 500 }}>Image</div>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id={`image-upload-${idx}`}
                onChange={e => {
                  if (e.target.files && e.target.files[0]) handleImageUpload(idx, e.target.files[0]);
                }}
              />
              <label htmlFor={`image-upload-${idx}`} style={{ cursor: 'pointer', color: '#2563eb', fontWeight: 500 }}>
                <span role="img" aria-label="upload">⭳</span> Upload
              </label>
              {section.imageName && (
                <div className={styles.uploadedImage}>
                  <span style={{ fontSize: 15 }}>{section.imageName}</span>
                  <span style={{ fontSize: 13, color: '#888' }}>{section.imageSize}</span>
                  <button className={styles.removeBtn} onClick={() => handleRemoveImage(idx)} title="Remove Image">×</button>
                </div>
              )}
              {section.imageUrl && (
                <div style={{ marginTop: 10 }}>
                  <img src={section.imageUrl} alt="uploaded" style={{ maxWidth: '100%', maxHeight: 120, borderRadius: 8 }} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <button className={styles.saveBtn} onClick={handleSave}>Save</button>
    </div>
  );
}

export default MenubarVerticalAdmin;
