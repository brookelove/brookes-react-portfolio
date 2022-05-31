import React, {useState} from "react";
import { Document, Page } from "react-pdf";
import "../styles/Resume.css"

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
            <Document file="../images/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page height="600" pageNumber={pageNumber} />
            </Document>
            <p>Page{pageNumber} of {numPage}</p>
            <button onClick={changePageBack}>Previous Page</button>
            <button onClick={changePageNext}>Previous Page</button>
        </div>
    )
}