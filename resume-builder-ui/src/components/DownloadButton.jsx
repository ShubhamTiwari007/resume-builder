// DownloadButton.jsx
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styles from "./DownloadButton.module.css";

export default function DownloadButton() {
  const handleDownload = () => {
    const resume = document.getElementById("resume-preview");
    html2canvas(resume, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className={styles.downloadContainer}>
      <button className={styles.downloadBtn} onClick={handleDownload}>
        Download as PDF
      </button>
    </div>
  );
}
