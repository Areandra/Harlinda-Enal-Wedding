import './Wave.css'

function Wave({Pembatas}){
    if (Pembatas==="Atas") 
        return(
        <div className="waveAtas">
          <div className="wave1 semua" id="wave1"></div>
          <div className="wave1 semua" id="wave2"></div>
          <div className="wave1 semua" id="wave3"></div>
          <div className="wave1 semua" id="wave4"></div>
        </div>
    )
    if (Pembatas==="Bawah") 
        return(
        <div className="waveBawah">
            <div className="wave semua" id="wave1"></div>
            <div className="wave semua" id="wave2"></div>
            <div className="wave semua" id="wave3"></div>
            <div className="wave semua" id="wave4"></div>
        </div>
    )
  }
export default Wave