"use client";

import { useState } from "react";

export default function WalletTextGo() {

    let [walletGo, setWalletGo] = useState(false);
    let [walletTextGo, setWalletTextGo] = useState('Add To My Wallet');

    function addWalletGo(){
        setWalletGo(true);
        
        setTimeout(() => {
            setWalletTextGo('💳');
            setWalletGo(false);
        }, 3000);
    }

    return (
        <div className="content-wrap__bot" onClick={addWalletGo}>
            {walletTextGo}
        </div>
    );
}
