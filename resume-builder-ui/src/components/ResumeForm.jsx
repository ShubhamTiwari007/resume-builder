// ResumeForm.jsx
import React from "react";
import styles from "./ResumeForm.module.css";

export default function ResumeForm({ setResumeData, setProfileImage }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProfileImage(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  return (
    <form className={styles.form}>
      <h2>Profile</h2>
      <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
      <textarea name="summary" placeholder="Profile Summary" onChange={handleChange}></textarea>

      <h2>Contact</h2>
      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="url" name="website" placeholder="Website" onChange={handleChange} />

      <h2>Profile Photo</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      <h2>Skills</h2>
      <textarea name="skills" placeholder="Comma-separated skills" onChange={handleChange}></textarea>

      <h2>Languages</h2>
      <textarea name="languages" placeholder="e.g. English (Fluent), Spanish (Intermediate)" onChange={handleChange}></textarea>

      <h2>Reference</h2>
      <input type="text" name="refName" placeholder="Referee Name" onChange={handleChange} />
      <input type="text" name="refCompany" placeholder="Company & Title" onChange={handleChange} />
      <input type="tel" name="refPhone" placeholder="Referee Phone" onChange={handleChange} />
      <input type="email" name="refEmail" placeholder="Referee Email" onChange={handleChange} />

      <h2>Work Experience</h2>
      <textarea name="experience" placeholder="Use bullets. One job per line." onChange={handleChange}></textarea>

      <h2>Education</h2>
      <textarea name="education" placeholder="Use bullets. One degree per line." onChange={handleChange}></textarea>
    </form>
  );
}
