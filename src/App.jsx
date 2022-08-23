import React from 'react'
import Pdf from './assets/components/Pdf/index.jsx'
import MyUploader from './assets/DropzoneCoba.jsx'
import { Worker } from '@react-pdf-viewer/core';

function App() {

  return (
    <div className="App">
      <h1>Belajar di Kelas Chapter 7</h1>
      {/* <MyUploader /> */}

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Pdf />
      </Worker>
      
    </div>
  )
}

export default App
