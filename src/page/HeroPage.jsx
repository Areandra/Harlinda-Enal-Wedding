import './HeroPage.css'
import { Link } from 'react-router-dom'

function HeroPage() {
    return (
        <>
            <section id="Hero">
                <div id='Button'>
                    <Link className='button' to="/opened">Buka Undangan</Link>
                </div>
                <div>
                    <p>Undangan Pernikahan</p>
                    <div id="Name">
                        <h1>Enal Bachdim</h1>
                        <h1>&</h1>
                        <h1>Harlinda MA</h1>
                    </div>
                    <div id="Guest">
                        <h1>To :</h1>
                        <p>Diah Ramayanti</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroPage