import TicketChartGo from "@/components/ticket/go/TicketChartGo";
import TicketGo from "@/components/ticket/go/TicketGo";
import TicketChartIn from "@/components/ticket/in/TicketChartIn";
import TicketIn from "@/components/ticket/in/TicketIn";

export default function BookPage({params}) {
    return (
        <section className="book-page--wrap">
            <div className="inner">
                <h2 className="section-title">최저가 항공권 추천 <span>현재 날짜 기준 일주일 뒤 출발</span></h2>
                <div className="book-content">
                    <div className="book-content__left">
                        <TicketChartGo />
                    </div>
                    <div className="book-content__right">
                        <div className="book-content__right-title">
                            출국 항공권
                        </div>
                        <TicketGo />
                    </div>
                </div>
                <div className="book-content">
                    <div className="book-content__left">
                        <TicketChartIn />
                    </div>
                    <div className="book-content__right">
                        <div className="book-content__right-title">
                            입국 항공권
                        </div>
                        <TicketIn params={params}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
