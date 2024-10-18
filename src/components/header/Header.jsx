"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    function goHome() {
        router.push("/");
    }

    return (
        <header>
            <div className="inner">
                <h1 className="logo" onClick={goHome}>
                    <Image
                        src={"/images/logo/logo.png"}
                        width={48}
                        height={48}
                        alt={"logo"}
                    />
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link href={"/"}>공지사항</Link>
                        </li>
                        <li>
                            <Link href={"/"}>장바구니</Link>
                        </li>
                        <li>
                            <Link href={"/"}>예약확인</Link>
                        </li>
                        <li>
                            <Link href={"/"}>로그인</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-right">
                    <div className="manager-page--link">
                        <Image
                            src={"/images/icon/manager.png"}
                            width={16}
                            height={16}
                            alt={"logo"}
                        />
                        <Link href={"/admin"}>관리자 페이지</Link>
                    </div>

                    <div className="search-component">
                        <input type="text" className="search-input" />
                        <button type="submit"></button>
                    </div>
                </div>
            </div>
        </header>
    );
}
