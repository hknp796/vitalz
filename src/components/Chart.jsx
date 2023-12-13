import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
);

export const options = {
    responsive: true,
    scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        },
    },
};



function Dashboard({data}) {
    return (
        <div className='bg-white shadow-md p-4 rounded-xl'>
            <h3 className='text-gray-500 text-center'>Current Members</h3>
            <div className='flex items-center gap-3 justify-center'>
                <div className='text-[#3C79ED]'>
                    <span className='font-bold text-xl '>333</span>
                    <span className='font-bold text-sm '>People</span>
                </div>
                <div className='bg-green-100 rounded-full w-14 text-center text-sm text-green-400'>+3 <small>%</small></div>
            </div>
            <Line options={options} data={data} />
        </div>
    )
}



export default Dashboard