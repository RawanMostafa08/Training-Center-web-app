import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const CreatePDF = ({ rootElementId, downloadFileName }) => {
  const downloadPdfDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${downloadFileName}.pdf`);
    });
  };

  return (
    <button class="btn btn-primary m-4" onClick={downloadPdfDocument}>
      تنزيل كملف
    </button>
  );
};

export default CreatePDF;
