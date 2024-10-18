"use client";

import Image from "next/image";
import { useState } from "react";
import { trending } from "@/mock/data";

export default function TrendingBox() {
    let [heart, setHeart] = useState("empty");
    function clickHeart() {
        if (heart === "empty") {
            setHeart("full");
        } else {
            setHeart("empty");
        }
    }

    return (
        <div className="trending-box--wrap">
            {trending.map((el, i) => {
                return (
                    <div className="trending-box" key={i}>
                        <div
                            className="trending-box__bg"
                            style={{
                                background: `url(/images/home/trending/${trending[i].img}.jpg) no-repeat`,
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="like-btn">
                                <Image
                                    onClick={clickHeart}
                                    src={`/images/icon/${heart}-heart-icon.png`}
                                    width={24}
                                    height={24}
                                    alt={"heart-icon"}
                                />
                            </div>
                        </div>
                        <div className="city-name">{trending[i].city}</div>
                        <div className="trending-box__disc">
                            <div className="trending-box__disc-left">
                                <div className="country-name--wrap">
                                    <Image
                                        src={"/images/icon/location.png"}
                                        width={16}
                                        height={16}
                                        alt={"location-icon"}
                                    />
                                    <span className="country-name">
                                        {trending[i].country}
                                    </span>
                                </div>
                                <div className="date-wrap">
                                    <Image
                                        src={"/images/icon/calendar-icon.png"}
                                        width={16}
                                        height={16}
                                        alt={"calendar-icon"}
                                    />
                                    <span className="date">{trending[i].date}</span>
                                </div>
                            </div>
                            <div className="trending-box__disc-right">
                                <div className="before-price">
                                    $&nbsp;<span>{trending[i].price}</span>
                                </div>
                                <div className="after-price">
                                    $&nbsp;<span>460</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
