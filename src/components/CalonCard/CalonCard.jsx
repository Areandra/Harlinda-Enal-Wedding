import PhotoProfil from '../../assets/Pr.jpeg';
import Bunga3 from '../../assets/Bunga3.png'
import Bunga4 from '../../assets/Bunga4.png'
import ButterFly from '../ButterFly/ButterFly';
import './CalonCard.css'; 

const CalonCard = ({ calon, pembelai, description }) => {
  return (
    <div className={`card calons ${pembelai}`}>
      <div 
        style={{
          transform: "scale(0.3)", 
          zIndex: 1,
          position: "absolute", 
          ...(pembelai === "Laki" ? { right: "88%", top: "15%", transform:"rotateY(180deg) scale(0.3)" } : { right: "0%", top : "63%" })
        }}
      >
        <ButterFly />
      </div>
      <div 
        style={{
          transform: "scale(0.3)", 
          position: "absolute", 
          ...(pembelai === "Laki" ? { right: "16%", top : "40%" } : { right: "70%", top: "15%", transform:"rotateY(180deg) scale(0.3)" })
        }}
      >
        <ButterFly />
      </div>
      <div 
        style={{
          transform: "scale(0.3)", 
          position: "absolute", 
          ...(pembelai === "Laki" ? { right: "5%", top: "75%", transform:"rotateY(180deg) scale(0.3)" } : { right: "91%", top : "45%" })
        }}
      >
        <ButterFly />
      </div>
          <img src={Bunga3} alt="" className="BungaKiri" id="Ba1" />
          <img src={Bunga4} alt="" className="BungaKiri" id="Ba2"/>
          <img src={Bunga3} alt="" className="BungaKanan" id="Ba1" />
          <img src={Bunga4} alt="" className="BungaKanan" id="Ba2"/>
      {pembelai === "Laki" ? (
        <>
          <p>{description}</p>
          <h2>{calon}</h2>
          <img className='fp' src={PhotoProfil} alt="profil" />
        </>
      ) : pembelai === "Perempuan" ? (
        <>
          <img className='fp' src={PhotoProfil} alt="Profil" />
          <h2>{calon}</h2>
          <p>{description}</p>
        </>
      ) : (
        <p>Data tidak valid</p> // Jika pembelai bukan "Laki" atau "Perempuan"
      )}
    </div>
  );
}

export default CalonCard;
