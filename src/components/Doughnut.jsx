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
    ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    ArcElement
);
const data = {
    labels: ['Red',],
    datasets: [
        {
            label: '# of Votes',
            data: [12,12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1,
        },
    ],
};

function DoughnutChart() {
  

    return (
        <div className='h-30 w-40'>    
            <Doughnut data={data} />;
        </div>
    )
}

export default DoughnutChart