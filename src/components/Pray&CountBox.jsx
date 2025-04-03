import ButterFly from "./ButterFly/ButterFly";
import Wave from "./Pembatas/PembatasOmbak";
import Bunga5 from '../assets/Bunga5.png';
import Bunga6 from '../assets/Bunga6.png';
import Bunga3 from '../assets/Bunga3.png';
import Bunga4 from '../assets/bunga4.png';

function PrayBox() {
    return (
      <>
        <div className='container' id='PrayDate'>
          <div className="pageContainer" id='PrayDate'>
            <div className="Bunga">
              <img src={Bunga5} alt="" className="BungaKiri" id="Bk1" />
              <img src={Bunga6} alt="" className="BungaKiri" id="Bk2" />
              <img src={Bunga3} alt="" className="BungaKiri" id="Bk3" />
              <img src={Bunga4} alt="" className="BungaKiri" id="Bk4"/>
              <div className="Kupu1">
                <ButterFly />
              </div>
            </div>
            <div className='PrayBox card'>
              <div className="text">
                <p>"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."</p>
                <h1>Surah Ar-Rum (30:21)</h1>
              </div>
            </div>
            <div className="CountBox card">
              <h1>Coming In</h1>
              <div className="Time">
                <p className="day">00<br/>Hari</p>
                <p className="hour">00<br/>Jam</p>
                <p className="menit">00<br/>Menit</p>
                <p className="Detik">00<br/>Detik</p>
              </div>
            </div>
              <Wave Pembatas = "Atas"/>
          </div>
        </div>
        {/* <div className="Bc">
          <ButterFly />
        </div> */}
      </>
    );  
}

export default PrayBox;