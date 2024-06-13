import moment from "moment-timezone";

export default function TimeZone() {
    const accra = moment().tz('Africa/Accra').format('HH:mm');
    const london = moment().tz('Europe/London').format('HH:mm');
    const newYork = moment().tz('America/New_York').format('HH:mm');
    const tokyo = moment().tz('Asia/Tokyo').format('HH:mm');

    return (

        <div style={{backgroundColor: "lightgrey", width:500}}>
            <ul>
                <li>The time in Accra is: <h4>{accra}</h4> </li>
                <li>The time in London is: <h4>{london}</h4></li>
                <li>The time in New York is: <h4>{newYork}</h4></li>
                <li>The time in Tokyo is: <h4>{tokyo}</h4> </li>
            </ul>
        </div>
    )
}