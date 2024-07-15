"use client"
import React from 'react'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(ArcElement, Tooltip, Legend)

function DoughnutChart({ accoutns }: DoughnutChartProps) {

    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2350, 7822],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Another Bank'],
    }
    return (
        <Doughnut data={data} options={{ cutout: '60%', plugins: {legend: {display: false}} }} />
    )
}

export default DoughnutChart