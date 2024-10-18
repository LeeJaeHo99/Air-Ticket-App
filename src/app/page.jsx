import MainContent from "@/components/main-content/MainContent";
import Destination from '@/components/destination/Destination';
import Trending from '@/components/trending/Trending';
import Book from '@/components/book/Book';
import Sale from '@/components/sale/Sale';

export default function Home() {
    return (
        <div className="home-wrap">
            <MainContent/>
            <Destination/>
            <Trending/>
            <Book/>
            <Sale/>
        </div>
    );
}