const simplifynumber = number =>
    parseFloat(Math.abs(number).toFixed(2));

export const seatsFormatter = seats => {
    if (seats === 0) {
        return "No seats gained/lost";
    } else {
        return `${simplifynumber(seats)} seats ${seats > 0 ? 'gained' : 'lost'}`
    }
}

export const seatsFormatterReversed = seats => {
    if (seats === 0) {
        return "gained/lost no seats";
    } else {
        return `${seats > 0 ? 'gained' : 'lost'} ${simplifynumber(seats)} seats`
    }
}