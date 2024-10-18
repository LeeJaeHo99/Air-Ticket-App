import Link from 'next/link';
import Image from "next/image";
import TrendingBox from "./TrendingBox";

export default function Trending() {
    return (
        <section className="trending-wrap">
            <div className="inner">
                <h2 className="section-title">Top Trending Ticket</h2>
                <h3 className="section-subtitle">
                    Discover the most trending ticket worldwide for an
                    unforgettable experience
                </h3>
                <div className="see-all--btn--wrap">
                    <Link className="see-all--btn" href={'/'}>
                        <span>See All</span>
                        <Image
                            src={"/images/icon/arrow.png"}
                            width={16}
                            height={16}
                            alt={"arrow-icon"}
                        />
                    </Link>
                </div>
                <TrendingBox/>
            </div>
        </section>
    );
}
