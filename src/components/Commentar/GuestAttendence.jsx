import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import "./GuestAttendence.css"; 

function GuestAttendance() {
  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState([]);
  const [isNameExists, setIsNameExists] = useState(false);
  const [showGuestList, setShowGuestList] = useState(false); 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlName = params.get("tamu");
    if (urlName) {
      setGuestName(urlName);
    }

    const q = query(collection(db, "guests"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const guestList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGuests(guestList);

      const nameExists = guestList.some(
        (guest) => guest.name.toLowerCase() === guestName.toLowerCase()
      );
      setIsNameExists(nameExists);
    });

    return () => unsubscribe();
  }, [guestName]); 

  const handleAddGuest = async (present) => {
    if (!guestName.trim() || isNameExists) return; 
    await addDoc(collection(db, "guests"), {
      name: guestName,
      present: present,
    });

    setGuestName("");
  };

  const toggleGuestList = () => {
    setShowGuestList(!showGuestList);
  };

  return (
    <div className="guest-attendance-container">
        <h2>Kedatangan Tamu</h2>
        {isNameExists && <p style={{ color: 'red' }}>Nama Sudah Terdaftar</p>} 
        <div className="input-container">
          <button onClick={() => handleAddGuest(true)} style={isNameExists ? {display: 'none'} : {display: 'block'}}>Hadir</button>
          <button onClick={() => handleAddGuest(false)} style={isNameExists ? {display: 'none'} : {display: 'block'}}>Tidak Hadir</button>
        </div>
        <button className="list-guest" onClick={toggleGuestList}>
          {showGuestList ? "Sembunyikan Daftar Tamu" : "Tampilkan Daftar Tamu"}
        </button>

        {showGuestList && (
          <div className="guest-list">
            <h3>Daftar Tamu</h3>
            <div className="listContainer">
            <ul style={{width:'90%',margin: 'auto', listStyle: 'none', padding: '0',}}>
            {guests.map((guest) => (
              <li className="listName"
                key={guest.id}
                style={{
                  textAlign: 'center',
                  backgroundImage: guest.present ? "repeating-linear-gradient(125deg, green 0px, green 10px, darkgreen 50px, green 100px)" : "repeating-linear-gradient(125deg, red 0px, red 10px, darkred 50px, red 100px)", 
                  color: "white",
                  padding: "5px",
                  margin: "5px 0",
                  borderRadius: "5px",
                }}
              >
                {guest.name}
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuestAttendance;
