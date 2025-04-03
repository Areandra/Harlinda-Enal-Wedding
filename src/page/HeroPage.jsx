import './HeroPage.css';
import { Link, useSearchParams } from 'react-router-dom';
import BungaHero1 from '../assets/BungaHero1.png';
import BungaHero2 from '../assets/BungaHero2.png';
import BungaHero3 from '../assets/BungaHero3.png';
import BungaHero4 from '../assets/BungaHero4.png';

function HeroPage() {
    const [searchParams] = useSearchParams();
    const tamu = searchParams.get("tamu");
    return (
        <>
            <section id="Hero">
                <div id="first">
                    <img src={BungaHero1} alt="bungahero" id="BH1" />
                    <img src={BungaHero2} alt="bungahero" id="BH2" />
                    <img src={BungaHero3} alt="bungahero" id="BH3" />
                    <img src={BungaHero4} alt="bungahero" id="BH4" />
                </div>
                <div id="second">
                    <img src={BungaHero2} alt="bungahero" id="BH5" />
                    <img src={BungaHero3} alt="bungahero" id="BH6" />
                    <img src={BungaHero4} alt="bungahero" id="BH7" />
                </div>
                <div id='Button'>
                <Link
                    className="button"
                    onClick={() => {
                        localStorage.setItem("hasAnimated", "false");
                        console.log("hasAnimated:", localStorage.getItem("hasAnimated"));
                    }}
                    to={`/opened?tamu=${tamu}`}
                > Buka Undangan
                </Link>
                </div>
                <div id='Calbot'>
                    <p>Undangan Pernikahan</p>
                    <div id="Name">
                        <h1>Enal Bachdim</h1>
                        <h1>&</h1>
                        <h1>Harlinda MA</h1>
                    </div>
                    <div id="Guest">
                        <h1>To :</h1>
                        <p>{tamu}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroPage