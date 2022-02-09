import { Bar } from "react-chartjs-2";
import { neutral, plus, minus } from "../../_sys.scss";
import { font } from "./_helpers";

const formatter = seats => {
    if (seats === 0) {
        return "No seats gained/lost";
    } else {
        return `${Math.abs(seats).toFixed(2)} seats ${seats > 0 ? 'gained' : 'lost'}`
    }
}

const options = {
    plugins: {
        title: { text: 'Difference from ideal number of seats', display: true, font: { weight: 'bold', size: 16 } },
        datalabels: { color: neutral, formatter: formatter, font: font},
    },
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    indexAxis: 'y',
    scales: {
        y: {
            ticks: {
                font: font
            }
        },
        x: {
            suggestedMin: -0.5,
            suggestedMax: 0.5
        }
    }
};


export const DifferenceFromIdeal = ({parties}) => {
    const data = {
        labels: parties.map(party => party.name),
        datasets: [{
            label: `Seats gained or lost due to inaccuracy of D'Hondt method`,
            data: parties.map(party => party.difference),
            backgroundColor: parties.map(party => party.difference > 0 ? plus : minus),
        }]
    }

    return <Bar options={options} data={data} />
}