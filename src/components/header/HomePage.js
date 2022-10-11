import './HomePage.css';
import { ArrowUpShort } from "react-bootstrap-icons";
import Footer from "../Footer";
import Main from "../Main";

function HomePage() {
    
    const handleScrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    return <>
        <Main />
        <Footer />
        <div className={'back-top back-top-show'} onClick={handleScrollUp}>
            <ArrowUpShort className={'position-absolute top-50 start-50 translate-middle fs-3'} />
        </div>
    </>
}

export default HomePage;