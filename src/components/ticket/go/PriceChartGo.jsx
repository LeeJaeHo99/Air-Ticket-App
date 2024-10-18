"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Chart.js에 필요한 요소 등록
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

let goTicketPrice = [800, 820, 760, 720, 680, 710, 700, 700, 640, 650, 590, 620];

const PriceChartGo = () => {
    const data = {
        labels: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
        datasets: [
            {
                label: "최저가 가격 ( 단위 : $ )",
                data: [...goTicketPrice],
                borderColor: "#379DF1",
                tension: 0.4,
                backgroundColor: "#379DF1",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    boxWidth: 5,
                    boxHeight: 5,
                },
            },
            title: {
                display: true,
                text: "최근 1년간 항공권 가격",
                color: "#ff6384",
                font: {
                    size: 20,
                    family: "Noto Sans KR",
                },
                padding: {
                    bottom: 24,
                },
            },
        },
        elements: {
            point: {
                radius: 6,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default PriceChartGo;