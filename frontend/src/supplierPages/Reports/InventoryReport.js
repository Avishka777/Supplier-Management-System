import React from "react";
import jsPDF from "jspdf"; 
import "jspdf-autotable"; 
import reportHeader from '../../supplierAssets/reportHeader.jpg'; 
import styled from "@emotion/styled"; 
import { HiOutlineDocumentReport } from 'react-icons/hi';

// Styled button component using styled-components
const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #9980FA;
  border: none;
  padding: 6px 5px;
  background-color: transparent;
  cursor: pointer;

  &:hover{
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

// Styled wrapper for icon
const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 0 0;
  vertical-align: middle;
`;

const SupplierReport = ({data}) => {

    // Function to download the PDF report
    const downloadPDF = () => {
        const doc = new jsPDF();
        const currentDate = new Date(); 
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${day}-${month}-${year}`;
        
        // Add the logo image to the document
        const logoWidth = 180;
        const logoHeight = 25;
        const pageWidth = doc.internal.pageSize.getWidth();
        const logoX = (pageWidth - logoWidth) / 2;
        doc.addImage(reportHeader, "PNG", logoX, 10, logoWidth, logoHeight); 

        // Add custom text next to the report name
        doc.setFont("helvetica", "bold");
        doc.setFontSize(28);
        doc.text("Supplier Detail Report", (pageWidth / 2), 60, { align: "center" });
        const textWidth = doc.getStringUnitWidth("Supplier Detail Report") * doc.internal.getFontSize() / doc.internal.scaleFactor;
        doc.setLineWidth(0.5);
        doc.line((pageWidth / 2) - (textWidth / 2), 63, (pageWidth / 2) + (textWidth / 2), 63);
        doc.setFont("arial", "normal");
        doc.setFontSize(12);
        doc.text("Date: " + formattedDate, 195, 75, { align: "right" });
      
        // Add the table to the document using jspdf-autotable
        doc.autoTable({
          head: [["Company Name", "Contact Person", "Suppling Items", "Contact No", "Address"]],
          body: data.map((item) => {
            return [item.companyName, item.agentName, item.supplyingItem, item.phone, item.companyAddress];
          }),
          startY: 80,
          headStyles: {
            fillColor: '#9980FA',
            fontSize: 12,
            textColor: 255,
            halign: 'center'
          },
          bodyStyles: {
            halign: 'center',
            fontSize: 11,
          }
        });
    
        doc.save("supplier.pdf"); 
      };

  return (
    <Button onClick={downloadPDF}>
      <IconWrapper>
        <HiOutlineDocumentReport size="1rem"/>
      </IconWrapper>
      REPORT
    </Button>
  );
};

export default SupplierReport;
