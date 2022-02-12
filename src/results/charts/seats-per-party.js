import { Bar } from "react-chartjs-2";
import { getColorByIndex } from "../../misc";
import { font } from "./_helpers";
import { neutral } from "../../_sys.scss";

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

export const SeatsPerParty = ({parties}) => {
    const data = {
        labels: parties.map(party => party.name),
        datasets: [{
            label: 'Seats',
            data: parties.map(party => party.seats),
            backgroundColor: parties.map(party => getColorByIndex(party.index)),
        }]
    };

    const fallbackContent = <>
        <p>Seats per party</p>
        {parties.map(party => <p key={party.index}>
            {party.name} - {party.votes} votes;
        </p>)}
    </>

    return <Bar options={options} data={data} fallbackContent={fallbackContent} />
}