import WalletTextIn from "./WalletTextIn";
import TicketDiscIn from "./TicketDiscIn";

export default function Ticket({params}) {
    return (
        <div className="ticket-wrap">
            <div className="ticket ticket-in">
                <div className="content-wrap">
                    <TicketDiscIn params={params}/>
                    <WalletTextIn />
                </div>
            </div>
        </div>
    );
}