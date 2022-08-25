import React from 'react'
import { Line } from 'react-chartjs-2'

const BarChart = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const data = {
        labels,
        datasets: [{
            label: 'My First Dataset',
            backgroundColor: 'blue',
            borderColor: 'black',
            data: [0, 10, 5, 2, 20, 30]
        }],
    };
    
    ;
    return (
        <div>
            <h3>Line Graph</h3>
            <Line data={data} />
        </div>
    )
}

export default BarChart
