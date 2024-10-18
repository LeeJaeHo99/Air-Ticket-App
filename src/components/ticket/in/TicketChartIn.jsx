import Image from "next/image";
import PriceChartIn from "./PriceChartIn";

export default function TicketDisc() {
    return (
        <div className="content-wrap">
            <div className="flight-way">
                <span className="departure-location">파리</span>
                <Image
                    src={"/images/icon/arrow-blue.png"}
                    width={24}
                    height={24}
                    alt={"arrow-icon"}
                />
                <span className="arrival-location">인천</span>
            </div>
            <PriceChartIn />
            <div className="booking-btn">예매하기</div>
        </div>
    );
}