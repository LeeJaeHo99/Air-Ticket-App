'use client';

import { useState } from "react";
import WalletAni from "../../lottie/WalletAni";

export default function WalletTextIn() {
    let [walletIn, setWalletIn] = useState(false);
    let [walletTextIn, setWalletTextIn] = useState("Add To My Wallet");

    function addWalletIn() {
        setWalletIn(true);
        setWalletTextIn("");

        setTimeout(() => {
            setWalletTextIn("💳");
            setWalletIn(false);
        }, 3000);
    }
    return (
        <>
            <div className="content-wrap__bot" onClick={addWalletIn}>
                {walletTextIn}
            </div>
            {walletIn ? <WalletAni /> : null}
        </>
    );
}
