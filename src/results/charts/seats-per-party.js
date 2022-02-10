import { Bar } from "react-chartjs-2";
import { getColorByIndex } from "../../misc";
import { font } from "./_helpers";
import { neutral } from "../../_sys.scss";


export const SeatsPerParty = ({parties}) => {
    const options = {
        plugins: {
            title: { text: 'Seats per party', display: true, font: font  },
            datalabels: { color: neutral, font: {...font} }
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        x: {
            ticks: {
                font: {...font}
            }
        }
    };

    const data = {
        labels: parties.map(party => party.name),
        datasets: [{
            label: 'Seats',
            data: parties.map(party => party.seats),
            backgroundColor: parties.map(party => getColorByIndex(party.index)),
        }]
    };

    return <Bar options={options} data={data} />
}