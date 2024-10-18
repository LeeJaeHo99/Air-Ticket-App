import DestinationBox from "./DestinationBox";

export default function Destination() {
    return (
        <section className="destination-wrap">
            <div className="inner">
                <div className="destination-top">
                    <h2 className="section-title">Popular Destinaion</h2>
                    <p className="section-subtitle">
                        Unleash Your Wunderlist With SkyWings
                    </p>
                </div>
                <div className="destination-bot">
                    <DestinationBox/>
                </div>
            </div>
        </section>
    );
}
