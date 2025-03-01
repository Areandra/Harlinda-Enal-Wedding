import '../components/InvitationCard.css';
import Bunga1 from '../assets/Bunga1.png';
import Bunga2 from '../assets/Bunga2.png';
import Bunga3 from '../assets/Bunga3.png';
import Bunga4 from '../assets/Bunga4.png';
import Bunga5 from '../assets/Bunga5.png';
import Bunga6 from '../assets/Bunga6.png';
import Bunga7 from '../assets/Bunga7.png';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const InvitationCard = () => {
    const [hasAnimated, setHasAnimated] = useState(() => {
        return localStorage.getItem('hasAnimated') === "true";
    });

    useEffect(() => {
        if (!hasAnimated) {
            localStorage.setItem("hasAnimated", "true"); // Simpan dalam format string
            setHasAnimated(true);
        }
    }, [hasAnimated]);

    return (
        <motion.div
            initial={hasAnimated ? {} : { opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
        >
            <Card />
        </motion.div>
    );
};

export default InvitationCard;

function Card() {
    return (
        <div className="card">
            <img id="B1" src={Bunga1} alt="bunga" />
            <img id="B2" src={Bunga2} alt="bunga" />
            <img id="B3" src={Bunga3} alt="bunga" />
            <img src={Bunga4} alt="bunga" id="B4" />
            <img src={Bunga5} alt="bunga" id="B5" />
            <img src={Bunga6} alt="bunga" id="B6" />
            <img src={Bunga7} alt="bunga" id="B7" />
            <div id="Calbot">
                <p>Undangan Pernikahan</p>
                <div id="Name">
                    <h1>Enal Bachdim</h1>
                    <h1>&</h1>
                    <h1>Harlinda MA</h1>
                </div>
            </div>
            <div id="WeddingDate">
                <h1>Saturday</h1>
                <p>23 April 2025</p>
            </div>
            <div id="CountDown">
                <h1>Countdown :</h1>
                <h2>00 : 00 : 00 : 00</h2>
            </div>
            <div id="Guest">
                <h1>To :</h1>
                <p>Diah Ramayanti</p>
            </div>
        </div>
    );
}
