import React, {useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "../styles/Resume.css"
import myResume from "./resume.pdf"
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

export default function Resume() {

    const [numPage, setNumPages] =useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({numPage}){
        setNumPages(numPage);
        setPageNumber(1);
    }
    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet)
    }
    function changePageBack() {
        changePage(-1);
    }
    function changePageNext() {
        changePage(+1);
    }
    return (
        <div id="resume" className="resumeContainer">
            <h1>Resume</h1>
            <Document file={myResume} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                <Page height="600" pageNumber={pageNumber} />
            </Document>
            <p>Page 1 of 1</p>
        </div>
    )
}