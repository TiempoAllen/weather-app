
const getSunset = (timestamp, timezoneOffset) => {
    const date = new Date(timestamp * 1000);
    const offsetMilliseconds = timezoneOffset * 1000;
    date.setTime(date.getTime() + offsetMilliseconds);

    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

export default getSunset;
