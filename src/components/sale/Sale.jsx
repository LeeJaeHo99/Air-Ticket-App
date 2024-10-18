import Image from "next/image";
import Link from "next/link";

export default function Sale() {
    return (
        <section className="sale-wrap">
            <div className="inner">
                <div className="sale-wrap__top">
                    <Image
                        className="sale-wrap--img"
                        src={"/images/home/sale/sale-bg.jpg"}
                        width={400}
                        height={600}
                        alt={"sale-bg"}
                    />
                    <div className="sale-wrap--text">
                        <div className="sale-wrap--text__top">
                            UNLEASH
                            <span>
                                Travelling is a Wonderful Way To Explore New
                                Places. Learn About Different Cultures And Gain
                                Unique Lorem, ipsum dolor dolor.
                            </span>
                        </div>
                        <div className="sale-wrap--text__mid">
                            WANDERLUST WITH
                        </div>
                        <div className="sale-wrap--text__bot">
                            <span>
                                Travelling is a Wonderful Way To Explore New
                                Places. Learn About Different Cultures And Gain
                                Unique Lorem ipsum dolor sit.
                            </span>
                            SKYWINGS
                        </div>
                    </div>
                </div>
                <div className="sale-wrap__bot">
                    <div className="sale-percent__box">
                        20% OFF
                        <span>
                            Till 28 September,
                            <br />
                            2024
                        </span>
                    </div>
                    <Link href={'/'} className="box2">
                        Book A Flight Now
                        <Image 
                            src={'/images/icon/arrow.png'}
                            width={24}
                            height={24}
                            alt={'arrow-icon'}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
