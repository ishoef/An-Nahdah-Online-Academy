"use client";

import { useEffect, useRef, useState } from "react";



// ✅ Configure worker ONCE
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFReaderClient({ bookId }) {
  const canvasRef = useRef(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
useEffect(() => {
  if (!bookId) return;

  const loadPdf = async () => {
    console.log("Loading PDF:", bookId);

    const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf");

    // ✅ Local worker
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

    const pdf = await pdfjsLib.getDocument(`/api/books/${bookId}`).promise;
    console.log("the pdf: ", pdf);

    console.log("PDF loaded with", pdf.numPages, "pages");
    setTotalPages(pdf.numPages);

    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;
  };

  loadPdf();
}, [bookId, pageNum]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-3 items-center">
        <button onClick={() => setPageNum((p) => Math.max(1, p - 1))}>◀</button>
        <span>
          {pageNum} / {totalPages}
        </span>
        <button onClick={() => setPageNum((p) => Math.min(totalPages, p + 1))}>
          ▶
        </button>
      </div>

      {/* ❌ no minHeight */}
      <canvas ref={canvasRef} className="border bg-white" />
    </div>
  );
}
