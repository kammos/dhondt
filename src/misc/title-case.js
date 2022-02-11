export const titleCase = name => {
    const splitAndJoined = name.split('-').join(' ');

    return splitAndJoined.charAt(0).toUpperCase() + splitAndJoined.slice(1);
}