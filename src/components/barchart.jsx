import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    BarElement
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            position: 'top',
        },
    },
};
const data = {
    labels,
    datasets: [
        {
            label: 'Revenue',
            data: [3, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            barThickness: 6, 
        },
    ],
};
function barchart() {

    return (
        <div className='w-[500px] h-[300px] mx-auto'>
            <Bar options={options} data={data} className=''/>
        </div>
    )
}

export default barchart