import '../page/PrayPage.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PrayBox from '../components/Pray&CountBox';
import CalonBox from '../components/CalonBox';
import DetailsCard from '../components/DetailsCard/DetailsCard';
import Wave from '../components/Pembatas/PembatasOmbak';
import MapsCard from '../components/MapsCard/Maps';
import Bunga3 from '../assets/Bunga3.png'
import Bunga4 from '../assets/Bunga4.png'
import ButterFly from '../components/ButterFly/ButterFly.jsx'

function PrayPage() {
  return (
    <>
        <section id="PrayPage">
            <div className="pageContainer">
            <PrayBox />
            <CalonBox />
            <div className="container" id="Detail">
              <Wave Pembatas="Bawah"/>
              <img className="BungaPojok" id="P1" src={Bunga4}/>
              <img className="BungaPojok" id="P2" src={Bunga3}/>
              <div className="KupuD" id="k1"><ButterFly /></div>
              <div className="KupuD" id="k2"><ButterFly /></div>
              <div className="KupuD" id="k3"><ButterFly /></div>
              <div className="text">
                <h1>Informasi Acara</h1>
                <p>Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kapada kedua mempelai</p>
              </div>
              <DetailsCard title="Akad" date="Rabu, 23 April 2025" time="10.00 WITA - Selesai" img="https://img.icons8.com/ios-filled/100/rose-bouquet.png"/>
              <DetailsCard title="Resepsi" date="Rabu, 23 April 2025" time="11.00 WITA - 12.00 WITA" img="https://img.icons8.com/ios-filled/100/newlyweds.png"/>
           </div>
            <div className="container" id="Location">
              <img className="BungaPojok" id="P3" src={Bunga4}/>
              <img className="BungaPojok" id="P4" src={Bunga3}/>
              <div className="KupuD" id="k1"><ButterFly /></div>
              <div className="KupuD" id="k2"><ButterFly /></div>
              <div className="KupuD" id="k3"><ButterFly /></div>
              <div className="KupuD" id="k4"><ButterFly /></div>
              <div className="KupuD" id="k5"><ButterFly /></div>
              <h1>Maps</h1>
              <p>Gedung Balai Kencana Makassar<br/>Jalan Dr.Sam Ratulangi No. 138 Makassar</p>
              <MapsCard />
              <Wave Pembatas="Atas"/>
            </div>
            </div>
        </section>
    </>
  );
}
export default PrayPage

