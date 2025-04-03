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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
              <div className="NamaPembelai">
                <CalonCard calon="Enal" pembelai="Laki" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <img src={Bunga2} alt="" className="BungaDan" />                
                <CalonCard calon="Harlinda" pembelai="Perempuan" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
              </div>
              <Wave Pembatas="Atas"/>
          </div>
        </div>
    );
}

export default CalonBox;