
export const getColorByIndex = index => {
    const hueAngle = (index * 110) % 360;

    return `hsl(${hueAngle}, 75%, 60%)`;
}

