
export const calculateSeats = (parties, seatsToAssign, tresholdPercentage) => {
    if (Object.entries(parties).length === 0) {
        return {};
    }
    
    const result = {};
    const quotients = {};
    let votesTotal = 0;

    for (const [index, party] of Object.entries(parties)) {
        result[index] = { ...party, seats: 0 };
        quotients[index] = party.votes;
        votesTotal += party.votes;
    }

    const treshold = votesTotal * (tresholdPercentage / 100); 

    let seatsAssigned = 0;

    while (seatsAssigned < seatsToAssign) {
        const partyIncides = Object.keys(quotients);
        let roundWinnerIndex = -1;
        let winningQuotient = 0;

        for (const partyIndex of partyIncides) {
            if (parties[partyIndex].votes < treshold && !parties[partyIndex].ignoresTreshold) {
                continue;
            }
            
            if (quotients[partyIndex] > winningQuotient) {
                winningQuotient = quotients[partyIndex];
                roundWinnerIndex = partyIndex;
            }
        }

        result[roundWinnerIndex].seats += 1;
        quotients[roundWinnerIndex] = parties[roundWinnerIndex].votes / (result[roundWinnerIndex].seats + 1);

        seatsAssigned += 1;
    }

    for (const [index, party] of Object.entries(parties)) {
        const expectedSeats = seatsToAssign * (party.votes/votesTotal);

        result[index].difference = result[index].seats - expectedSeats;
    }

    return result;
}