import { Header } from "../components/Header";
import '../pages/HomePage.css'
export function HomePage(){
    return(
        <div className="homepage">
        <h1>Fashion is a dirty business. We’re on a mission to clean it up.</h1>
        <div className="homepage-firstview">
            <div className="homepage-offers">
                <p>End-of-Year Sale Up to 60% Off</p>
                <div className="homepage-offers-buttons">
                    <button>Shop Women</button>
                    <button>Shop Men</button>
                </div>
            </div>
            <div className="homepage-new-arrivals">
                <p>New Arrivals</p>
                <button>Shop Now</button>
            </div>

        </div>
        </div>
    )
}