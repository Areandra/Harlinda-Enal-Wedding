import Wave from './Pembatas/PembatasOmbak';
import CalonCard from './CalonCard/CalonCard';
import Bunga2 from '../assets/Bunga2.png'


function CalonBox(){
    return (
        <div className="container" id='Pembelai'> 
          <div className="pageContainer" id='Pembelai'>
            <div className="line"></div>
            <Wave Pembatas="Bawah"/>
              <div className="Text">
                  <h1>Assalamualaikum</h1>
                  <p>Doa Restu Anda untuk kedua pembelai merupakan karunia yang sangat berarti bagi kami.</p>
              </div>
              <div className="NamaPembelai">
                <CalonCard calon="Enal" pembelai="Laki" description="Putra dari Bapak dan Ibu."/>
                <img src={Bunga2} alt="" className="BungaDan" />                
                <CalonCard calon="Harlinda" pembelai="Perempuan" description="Putri dari Bapak Muhammad Ali dan Ibu Haspah."/>
              </div>
              <Wave Pembatas="Atas"/>
          </div>
        </div>
    );
}

export default CalonBox;