// ResumePreview.jsx
import React from "react";
import styles from "./ResumePreview.module.css";

export default function ResumePreview({ data, profileImage }) {
  const renderList = (text) => {
    return text?.split("\n").map((item, i) => (
      <li key={i}>{item}</li>
    ));
  };

  const renderBullets = (text) => {
    return text?.split("\n").map((line, i) => (
      <div key={i} className={styles.bulletLine}>• {line}</div>
    ));
  };

  return (
    <div className={styles.resume}>
      <div className={styles.leftColumn}>
        {profileImage && <img src={profileImage} alt="Profile" className={styles.photo} />}

        <section>
          <h3>CONTACT</h3>
          <p>{data.phone}</p>
          <p>{data.email}</p>
          <p>{data.address}</p>
          <p>{data.website}</p>
        </section>

        <section>
          <h3>SKILLS</h3>
          <ul>{data.skills?.split(",").map((s, i) => <li key={i}>{s.trim()}</li>)}</ul>
        </section>

        <section>
          <h3>LANGUAGES</h3>
          <ul>{renderList(data.languages)}</ul>
        </section>

        <section>
          <h3>REFERENCE</h3>
          <p>{data.refName}</p>
          <p>{data.refCompany}</p>
          <p>{data.refPhone}</p>
          <p>{data.refEmail}</p>
        </section>
      </div>

      <div className={styles.rightColumn}>
        <header>
          <h1>{data.fullName}</h1>
          <h2>{data.jobTitle}</h2>
        </header>

        <section>
          <h3>PROFILE</h3>
          <p>{data.summary}</p>
        </section>

        <section>
          <h3>WORK EXPERIENCE</h3>
          {renderBullets(data.experience)}
        </section>

        <section>
          <h3>EDUCATION</h3>
          {renderBullets(data.education)}
        </section>
      </div>
    </div>
  );
}
