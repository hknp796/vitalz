import React from 'react'
import Chart from '../components/Chart'
function Dashboard() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [2, 4, 5],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <div className='p-10 flex items-start gap-4'>
            <Chart  data={data}/>
            <Chart  data={data}/>
            <Chart  data={data}/>
        </div>
    )
}

export default Dashboard