import React from 'react'

const WebStorage = () => {
    const data = ['SEMANGAT!','coba coba', 'ggfhghdgfh'];
    // const dataGet = localStorage.getItem('data');

    return (
        <div style={{marginBottom: '50px'}}>
            <h3>Web Storage</h3>
            <button onClick={() => {
                localStorage.setItem('data', JSON.stringify(data))
            }}>
                Local Storage: Klik for <b>setItem</b> data
            </button>
            {/* <button onClick={() => {
                localStorage.removeItem('data')
            }}>
                Remove
            </button> */}
            <p>Ini dari <b>getItem</b>: {localStorage.getItem('data')}</p>

        </div>
    )
}

export default WebStorage
