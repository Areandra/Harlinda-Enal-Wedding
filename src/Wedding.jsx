import WeddingPage from './page/WeddingPage.jsx'
import PrayPage from './page/PrayPage.jsx'
import NavBar from './components/NavBar.jsx'
import GiftPage from './page/GiftPage.jsx'
import RsvpPage from './page/RsvpPage.jsx'
import './Wedding.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <section id="Hero">
                <div>
                    <h1>Hero</h1>
                    <Link to="/opened">Wedding Details Go</Link>
                </div>
            </section>
        </>
    )
}

function WeddingDetails() {
    return (
        <>
            <WeddingPage />
            <NavBar />
            <PrayPage />
            <GiftPage />
            <RsvpPage />
        </>
    )
}

function Wedding() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/opened" element={<WeddingDetails />} />
            </Routes>
        </Router>
    )
}

export default Wedding
