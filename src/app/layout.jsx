import style from '@/styles/css/style.css'
import Header from '@/components/header/Header';
import Footer from '../components/footer/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet"></link>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
