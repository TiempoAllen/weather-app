const GetDate = () => {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

export default GetDate;

// exports.getDate = () => {
//     const today = new Date();

//     const options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };
//     return today.toLocaleDateString("en-US", options);
// }
