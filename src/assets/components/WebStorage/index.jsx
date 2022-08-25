import React from 'react'

const WebStorage = () => {
    const data = ['SEMANGAT!','coba coba', 'ggfhghdgfh'];
    return (
        <div style={{marginBottom: '50px'}}>
            <h3>Web Storage</h3>
            <button onClick={() => {
                localStorage.setItem('data', JSON.stringify(data))
            }}>
                Local Storage
            </button>
        </div>
    )
}

export default WebStorage
