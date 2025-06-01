// App.jsx
import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import DownloadButton from "./components/DownloadButton";
import styles from "./App.module.css";

export default function App() {
  const [resumeData, setResumeData] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Resume Builder</h1>
      <div className={styles.layout}>
        <ResumeForm setResumeData={setResumeData} setProfileImage={setProfileImage} />
        <div id="resume-preview" className={styles.preview}>
          <ResumePreview data={resumeData} profileImage={profileImage} />
        </div>
      </div>
      <DownloadButton />
    </div>
  );
}
