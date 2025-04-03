import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./DetailsCard.css"; // Assuming you have a CSS file for styles
import Bunga3 from '../../assets/Bunga3.png';
import Bunga2 from '../../assets/Bunga2.png';

const DetailsCard = ({ title, date, time, img }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [isCentered, setIsCentered] = useState(false);

  // Animasi Step 1, Step 2, Step 3
  const cardControls = useAnimation();
  const imgControls = useAnimation();
  const contentControls = useAnimation();
  const bunga1Controls = useAnimation();
  const bunga2Controls = useAnimation();
  const bunga3Controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const middle = window.innerHeight / 2;

        const isNowCentered = rect.top < middle && rect.bottom > middle;
        setIsCentered(isNowCentered);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    if (isCentered) {
      // **Step 1** → Kartu membesar
      cardControls.start({
        height: "300px",
        scale: 1.05,
        boxShadow: "#DBB75F 0px 0px 20px",
        borderRadius: "50% / 150px",
        transition: { duration: 0.5, ease: "easeOut" },
      });

      // **Step 1** → Gambar menghilang
      imgControls.start({ scale: 0, transition: { duration: 0.3, delay: 0.2 } });

      // **Step 1** → Konten muncul
      contentControls.start({
        rotateX: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
      });

      // **Step 2** → Bunga 2 muncul setelah step 1 selesai
      bunga2Controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut", delay: 0.7 },
      });

      // **Step 3** → Bunga 1 & Bunga 3 muncul terakhir
      bunga1Controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut", delay: 1 },
      });

    } else {
      // **Step 3 → 2 → 1** (Animasi mundur saat keluar viewport)

      bunga1Controls.start({
        opacity: 0,
        scale: 0,
        y: -20,
        transition: { duration: 0.3, ease: "easeIn" },
      });

      bunga2Controls.start({
        opacity: 0,
        scale: 0,
        x: -20,
        transition: { duration: 0.3, ease: "easeIn", delay: 0.4 },
      });

      contentControls.start({
        rotateX: -90,
        transition: { duration: 0.5, ease: "easeIn", delay: 0.2 },
      });

      imgControls.start({ scale: 1, transition: { duration: 0.3, delay: 0.8 } });

      cardControls.start({
        height: "100px",
        scale: 1,
        boxShadow: "#DBB75F 0px 0px 10px",
        borderRadius: "50% / 130px",
        transition: { duration: 0.5, ease: "easeIn", delay: 0.3 },
      });
    }
  }, [isCentered, cardControls, imgControls, contentControls, bunga1Controls, bunga2Controls, bunga3Controls]);

  return (
    <div style={{ position: "relative", width: "auto",  }}>
    <motion.div
      className="cards" id="Details"
      ref={ref}
      initial={{ height: "100px", scale: 1, boxShadow: "#DBB75F 0px 0px 20px" }}
      animate={cardControls}
      >
      {/* Step 1 */}
      {img ? (
        <motion.img animate={imgControls} src={img} alt="Details" />
      ) : (
        <svg>...</svg>
      )}

      {/* Step 1 */}
      <motion.div className="card_content" initial={{ rotateX: -90 }} animate={contentControls}>
        <p className="card_title">{title}</p>
        <p className="card_description">
          {date}
          <br />
          {time}
          <br />
        </p>
      </motion.div>
    </motion.div>
      {/* Step 3 */}
      <motion.img
        src={Bunga3}
        alt=""
        className="BungaL"
        id="Bas1"
        initial={{ opacity: 0, y: -20 }}
        animate={bunga1Controls}
        />

      {/* Step 2 */}
      <motion.img
        src={Bunga2}
        alt=""
        className="BungaC"
        id="Bas2"
        initial={{ opacity: 0, x: -20 }}
        animate={bunga2Controls}
        />

      {/* Step 3 */}
      <motion.img
        src={Bunga3}
        alt=""
        className="BungaR"
        id="Bas1"
        initial={{ opacity: 0, y: -20 }}
        animate={bunga1Controls}
        />
    </div>
  );
};

export default DetailsCard;
