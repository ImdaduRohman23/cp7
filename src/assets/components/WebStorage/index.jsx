import React, { useState } from 'react'

const WebStorage = () => {
    const data = ['SEMANGAT!','coba coba', 'ggfhghdgfh'];
    const dataGet = localStorage.getItem('data-user');

    const [dataUser, setDataUser] = useState('');

    const handleDataUser = () => {
        setDataUser(localStorage.setItem('data-user', JSON.stringify(data)))
    }

    const handleRemoveData = () => {
        localStorage.removeItem('data-user')
    }

    console.log(dataGet)

    return (
        <div style={{marginBottom: '50px'}}>
            <h3>Web Storage</h3>

            <button onClick={handleDataUser}>
                Local Storage
            </button>

            <button onClick={handleRemoveData}>
                Remove
            </button>
            
            <p>Ini dari <b>getItem</b>: {dataGet}</p>

            {/* {
                dataGet ? <button onClick={handleRemoveData}>
                Remove
            </button>  : <button onClick={handleDataUser}>
                Local Storage
            </button>
            } */}

        </div>
    )
}

export default WebStorage
