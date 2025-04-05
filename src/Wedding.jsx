import WeddingPage from './page/WeddingPage.jsx'
import PrayPage from './page/PrayPage.jsx'
import NavBar from './components/Navbar/NavBar.jsx'
import GiftPage from './page/GiftPage.jsx'
import RsvpPage from './page/RsvpPage.jsx'
import HeroPage from './page/HeroPage.jsx'
import Audio from "./components/Audio/Audio.jsx"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <HeroPage />
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
          <Audio allowedPaths={['/opened']}/>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/opened" element={<WeddingDetails />} />
            </Routes>
        </Router>
    )
}

export default Wedding
