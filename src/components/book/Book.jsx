import Image from "next/image";
import { book1, book2 } from "@/mock/data";
import Link from "next/link";

export default function Book() {
    return (
        <section className="book-wrap">
            <div className="inner">
                <h2 className="section-title">
                    Journey To The Skies Made Simple!
                </h2>
                <h3 className="section-subtitle">
                    Travelling is a Wonderful Way To Explore New Places.
                    <br />
                    Learn About Different Cultures And Gain Unique Experiences
                </h3>
                <div className="book-content--wrap">
                    {new Array(3).fill(null).map((el, i) => {
                        return (
                            <div className="book-content" key={i}>
                                <div className="book-content__bg">
                                    <Image
                                        src={
                                            `/images/home/book/book${i + 1}.jpg`
                                        }
                                        width={160}
                                        height={160}
                                        alt={"book-content__bg"}
                                    />
                                </div>
                                <div className="book-content__icon">
                                    <Image
                                        src={`/images/icon/book-icon__${
                                            i + 1
                                        }.png`}
                                        width={16}
                                        height={16}
                                        alt={`book-icon__${i + 1}`}
                                    />
                                </div>
                                <div className="book-content__disc">
                                    Lorem ipsum dolor sit. <br />
                                    Lorem ipsum dolor sit amet consectetur.<br/>
                                    Lorem, ipsum dolor.<br/>
                                    Lorem ipsum dolor sit amet consectetur.<br/>
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <div className="book-content__bot">
                                    <div className="book-content__text">
                                        {book1[i]}
                                        <br />
                                        {book2[i]}
                                    </div>
                                    <div className="book-content__link">
                                        <Link href="/">
                                            <span>Link Here</span>
                                            <Image
                                                src={"/images/icon/arrow2.png"}
                                                width={14}
                                                height={14}
                                                alt={"arrow2"}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
