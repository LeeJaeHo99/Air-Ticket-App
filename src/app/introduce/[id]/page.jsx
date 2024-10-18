import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/library/mongodb";

export default async function IntroducePage({ params }) {
    let destination = [];
    let introduceEl = [];

    try {
        const db = (await connectDB).db("air-ticket");
        const recommend = db.collection("recommend");
        destination = await recommend.find({}).toArray();
        console.log("destination: ", destination);

        const introduce = db.collection("introduce");
        introduceEl = await introduce.find({}).toArray();
        console.log("introduceEl: ", introduceEl);
    } catch (e) {
        console.error(e);
        destination = [];
        introduceEl = [];
    }
    if (destination.length === 0 || introduceEl.length === 0) {
        return <p>데이터를 불러오지 못하였습니다.</p>;
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
        <section className="introduce-page--wrap">
            <div className="inner">
                <div className="introduce-top">
                    <div className="introduce-left">
                        <Image
                            src={`/images/home/destination/${params.id}.jpg`}
                            width={1000}
                            height={500}
                            alt={""}
                        />
                    </div>
                    <div className="introduce-right">
                        <Image
                            src={`/images/home/destination/flag/${params.id}.png`}
                            width={400}
                            height={240}
                            alt={"flag-image"}
                        />
                            <div className="introduce-country">
                                <h3 className="country-name">
                                    <p>국가</p>
                                    <span>{introduceEl[countryIndex].country}</span>
                                </h3>
                                <h3 className="capital-name">
                                    <p>수도</p>
                                    <span>{introduceEl[countryIndex].capital}</span>
                                </h3>
                                <h3 className="lang">
                                    <p>언어</p>
                                    <span>{introduceEl[countryIndex].lang}</span>
                                </h3>
                                <h3 className="flight-time">
                                    <p>비행시간</p>
                                    <span>{introduceEl[countryIndex].airtime}</span>
                                </h3>
                            </div>
                    </div>
                </div>
                <Link href={`/book/${introduceEl[countryIndex].countryU}`} className="introduce-bot">예약하러 가기</Link>
            </div>
        </section>
    );
}
