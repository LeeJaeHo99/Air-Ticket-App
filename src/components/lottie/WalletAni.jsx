'use client';

import Lottie from "react-lottie-player";
import Wallet from "@/library/lottie/wallet.json";

export default function WalletAni() {
    return (
        <div className="WalletAni">
            <Lottie
                loop
                animationData={Wallet}
                play
                style={{ width: 150, height: 150 }}
            />
        </div>
    );
}
