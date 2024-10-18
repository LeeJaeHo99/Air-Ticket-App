export default function Godate() {
    let today = new Date();
    let year = today.getFullYear();
    console.log("year: ", year);
    let month = today.getMonth();
    console.log("month: ", month);
    let day = today.getDay();
    console.log("day: ", day);

    let monthText = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let departureDate = day + 7;

    if (departureDate >= 31) {
        let restDate = departureDate - 31;
        departureDate = restDate;
    }

    return (
        <div className="date">
            <span className="day">{departureDate}</span>
            <span className="month">{monthText[month]}</span>
            <span className="year">{year}</span>
        </div>
    );
}
