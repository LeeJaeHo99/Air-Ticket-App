import Image from "next/image";
import Link from "next/link";
import { connectDB } from '@/library/mongodb';

export default async function DestinationBox() {
    let destination = [];
    let randomDestination = [];

    try{
        const db = (await connectDB).db('air-ticket');
        const collection = db.collection('recommend');
        destination = await collection.find({}).toArray();

        function getRandomDestination(arr, num) {
            const shuffled = [...arr].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, num);
        }
        randomDestination = getRandomDestination(destination, 3);
    }
    catch(e){
        console.error(e);
        destination = [];
    }
    if (destination.length === 0) {
        return <p>데이터를 불러오지 못하였습니다.</p>;
    }
    
    return (
        <>
            {randomDestination.map((el, i) => {
                return (
                    <div className="destination-box" key={i}>
                        <Link href={`/introduce/${randomDestination[i].img}`}>
                            <Image
                                className="destination-bg"
                                src={`/images/home/destination/${randomDestination[i].img}.jpg`}
                                width={460}
                                height={280}
                                alt={`${randomDestination[i].city}`}
                            />
                        </Link>
                        <div className="destination-disc">
                            <div className="destination-disc__left">
                                <p className="city-disc">
                                    {randomDestination[i].title}
                                </p>
                                <div className="city-name--wrap">
                                    <Image
                                        className="location-icon"
                                        src={"/images/icon/location.png"}
                                        width={16}
                                        height={16}
                                        alt={"location-icon"}
                                    />
                                    <p className="city-name">
                                        {randomDestination[i].city},&nbsp;&nbsp;
                                        {randomDestination[i].country}
                                    </p>
                                </div>
                            </div>
                            <div className="destination-disc__right">
                                <div className="grade-wrap">
                                    <Image
                                        src={"/images/icon/star.png"}
                                        width={16}
                                        height={16}
                                        alt={"star-icon"}
                                    />
                                    <span className="grade">{randomDestination[i].grade}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
