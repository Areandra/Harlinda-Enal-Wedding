import '../page/PrayPage.css'
import { useState } from 'react';
import { motion } from 'framer-motion';



function PrayPage() {
  const [isOpen, setIsOpen] = useState (false);
  const PrayBook = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      > <div className="container">
          <div className={`book ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="cover">Klik untuk Buka</div>
            <div className="page"></div>
          </div>
        </div>
      </motion.div>
    )
  }
  return (
    <>
        <section id="PrayPage">
            <div>
                <h1>Doa</h1>
            </div>
            <PrayBook />
        </section>
    </>
  );
}
export default PrayPage

