import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js";
Chart.register(CategoryScale);

const GrossRevenueChart = () => {
    // X Axis elements
    const labels = ["Avengers: EndGame", "Titanic", "Star Wars: The Force Awakens", "Avatar", "Avengers: Infinity War"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Top Grossing Movies in $Billions", //label
                backgroundColor: "rgba(255, 99, 132)",
                borderColor: "rgb(255, 9, 132)",
                // Y axis elements
                data: [2.79, 2.18, 2.06, 2.92, 2.04],
            },
        ],
    };
    return (
        <div>
            <Bar data={data} />
        </div>
    )
}
export default GrossRevenueChart;