"use clinet";

import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="inner">
                <div className="logo-wrap">
                    <div className="logo-top">
                        <Image
                            className="footer-logo"
                            src={"/images/logo/logo.png"}
                            width={48}
                            height={48}
                            alt={"logo"}
                        />
                        <div className="company-name">Ait-Ticket-App</div>
                    </div>
                    <div className="logo-bot">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Cum, ad!
                    </div>
                </div>
            </div>
        </footer>
    );
}
