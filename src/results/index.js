import { useUpdateResults } from "./use-update-results";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import s from "./styles.scss";
import { useSelector } from "react-redux";
import { getColorByIndex } from "../misc";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const options = {
    plugins: {
        legend: { position: 'top' },
        title: { text: 'Seats per party', display: true },
        datalabels: { color: '#FFF' }
    },
    responsive: true,
};

const options2 = {
    plugins: {
        legend: { position: 'top' },
        title: { text: 'Difference from expected number of seats', display: true },
        datalabels: { color: '#FFF', formatter: n => n.toFixed(2) },
    },
    responsive: true,
    indexAxis: 'y'
};


export const Results = () => {
    useUpdateResults();
    const results = useSelector(state => state.calculator.results);
    const parties = Object.values(results).sort((partyA, partyB) => partyB.votes - partyA.votes);

    const data1 = {
        labels: parties.map(party => party.name),
        datasets: [{
            label: 'Seats',
            data: parties.map(party => party.seats),
            backgroundColor: parties.map(party => getColorByIndex(party.index)),
        }]
    };

    const data2 = {
        labels: parties.map(party => party.name),
        datasets: [{
            label: `Seats gained or lost due to inaccuracy of D'Hondt method`,
            data: parties.map(party => party.difference),
            backgroundColor: parties.map(party => party.difference > 0 ? '#0f0' : '#f00'),
        }]
    }

    return <div className={s.container}>
        <div className={s.chartContainer}>
            <Bar options={options} data={data1} />
        </div>
        <div className={s.chartContainer}>
            <Bar options={options2} data={data2} />
        </div>
    </div>
}