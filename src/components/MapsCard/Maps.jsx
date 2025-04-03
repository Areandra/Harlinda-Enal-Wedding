import "./Maps.css";

const GoogleMap = () => {
    return (
      <div className="MapsCard">
        <iframe className="maps card"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.10174717875847!2d119.41698075777076!3d-5.160964510703655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1d60085acf4f%3A0xe7c6be1e2ed868ad!2sGedung%20Serbaguna%20Balai%20Kencana!5e0!3m2!1sen!2sid!4v1743051261286!5m2!1sen!2sid"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;
  