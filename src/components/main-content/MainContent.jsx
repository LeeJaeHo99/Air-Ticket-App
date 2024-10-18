import MainBtn from './MainBtn';

export default function MainContent() {
    return (
        <div className="main-content--wrap">
            <div className="inner">
                <div className="main-content">
                    <video src="/videos/main-bg.mp4" autoPlay muted loop></video>
                    <h2 className="main-text">Air-Ticket-App</h2>
                    <MainBtn/>
                </div>
            </div>
        </div>
    );
}
