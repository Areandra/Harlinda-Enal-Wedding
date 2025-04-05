import './CreditCard.css';
import BSI from '../../assets/BSI.png'
import { useState, useRef } from "react";
import { motion } from "framer-motion";

function CreditCard({ norek, name }) {
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  const handleCopy = async () => {
    if (!navigator.clipboard) {
      alert("Clipboard API tidak didukung di browser ini.");
      return;
    }

    if (textRef.current) {
      try {
        await navigator.clipboard.writeText(textRef.current.innerText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Gagal menyalin:", error);
      }
    }
  };

  return (
    <div className='containerUtama'>
      <div className="containerc">
        <div className="cardc">
          <span className="logo">
            <img src={BSI} alt="BSI Logo" />
          </span>
          <span onClick={handleCopy} className="remove">
            <svg className="belum" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"></path>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"></path>
            </svg>
          </span>
          <span ref={textRef} className="number">{norek || "7194 269 263"}</span>
          <span className="owner">{"Harlinda" || "Your Name"}</span>
        </div>
      </div>
      <div className="TextPopup">
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-pop"
          >
            Rekening telah disalin!
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default CreditCard;
