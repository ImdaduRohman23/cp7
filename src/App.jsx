import React from 'react'
import Pdf from './assets/components/Pdf/index.jsx'
import MyUploader from './assets/DropzoneCoba.jsx'
import { Worker } from '@react-pdf-viewer/core';
import PlayerCoba from './assets/components/PlayerCoba/index.jsx';
import ModalimageCoba from './assets/components/ModalimageCoba/index.jsx';
import BarChart from './assets/components/BarChart/index.jsx';
import WebStorage from './assets/components/WebStorage/index.jsx';
import BasicExample from './assets/components/BasicExample.jsx';

function App() {

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>FORUM DISCUSSION CHAPTER 7</h1> 

      <hr /><hr /> 
      <h2 style={{textAlign: 'center'}}>TOPIC 1</h2>
      <hr /><hr /> 
      <MyUploader />
      <ModalimageCoba />
      <PlayerCoba />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Pdf />
      </Worker>

      <hr /><hr /> 
      <h2 style={{textAlign: 'center'}}>TOPIC 2</h2>
      <hr /><hr /> 
      <BarChart />
      <WebStorage />

      <hr /><hr /> 
      <h2 style={{textAlign: 'center'}}>React Router Dom@5</h2>
      <hr /><hr />

      <BasicExample />
      <hr style={{marginBottom: '100px'}}/>
      
    </div>
  )
}

export default App
