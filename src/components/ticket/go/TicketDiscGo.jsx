import Image from "next/image";
import { connectDB } from '@/library/mongodb';
import Godate from './Godate';
import Indate from './Indate';

export default async function TicketDiscIn({params}) {
    let ticketData;
    try{
        const db = (await connectDB).db('air-ticket');
        const collection = db.collection('ticket');
        ticketData = await collection.find({}).toArray();
    }
    catch(e){
        console.error(e);
        return <p>데이터를 불러오지 못하였습니다.</p>
    }
    if(!ticketData || ticketData.length === 0){
        return <p>데이터를 불러오지 못하였습니다.</p>
    }

    let countryIndex;
    if(params.id === 'france'){
        countryIndex = 0;
    }else if(params.id === 'japan'){
        countryIndex = 1;
    }else if(params.id === 'england'){
        countryIndex = 2;
    }else if(params.id === 'greece'){
        countryIndex = 3;
    }else if(params.id === 'italy'){
        countryIndex = 4;
    }else{
        countryIndex = 5;
    }

    return (
        <>
            <div className="content-wrap__top">
                <div className="airplane-name--wrap">
                    <div className="airplane-logo">
                        <Image
                            src={`/images/book/logo/${ticketData[countryIndex].companyImg}--logo.png`}
                            width={36}
                            height={36}
                            alt={"logo"}
                        />
                    </div>
                    <div className="airplane-name">대한항공</div>
                </div>
                <div className="ticket-disc--wrap">
                    <div className="ticket-time--wrap">
                        <div className="departure">
                            <div className="title">Departure</div>
                            <div className="time">
                                {ticketData[countryIndex].goTime}
                                <span>{ticketData[countryIndex].goAmPm}</span>
                            </div>
                            <Godate/>
                        </div>
                        <div className="arrival">
                            <div className="title">Arrival</div>
                            <div className="time">
                                {ticketData[countryIndex].inTime}
                                <span>{ticketData[countryIndex].inAmPm}</span>
                            </div>
                            <Indate/>
                        </div>
                    </div>
                    <div className="ticket-disc">
                        <div className="seat-wrap">
                            <span className="seat-num">{ticketData[countryIndex].seat}</span>
                            <div>Seats</div>
                        </div>
                        <div className="terminal-wrap">
                            <span className="terminal-num">{ticketData[countryIndex].terminal}</span>
                            <div>Terminal</div>
                        </div>
                        <div className="gate-wrap">
                            <span className="gate-num">{ticketData[countryIndex].gate}</span>
                            <div>Gate</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
